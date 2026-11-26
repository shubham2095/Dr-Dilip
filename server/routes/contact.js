import express from "express";
import transporter from "../utils/mailer.js";

const router = express.Router();

// simple in-memory rate limit (per IP) to stop spam bursts
const requestLog = new Map();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

router.post("/", async (req, res) => {
  try {
    const ip = req.ip;
    if (isRateLimited(ip)) {
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again in a minute.",
      });
    }

    const { name, email, phone, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // basic honeypot check (optional field the frontend can add, bots fill it)
    if (req.body.website) {
      // silently succeed to fool bots, don't actually send mail
      return res.status(200).json({ success: true });
    }

    await transporter.sendMail({
      from: `"Dr. Dilip Hospital Website" <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

export default router;