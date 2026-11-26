import nodemailer from "nodemailer";

let transporter;

// Created on first use so the .env values are loaded by then.
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

// Submitted text goes into an HTML email, so it must be escaped first.
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function multiline(value = "") {
  return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

// Keep user input out of subject lines as a single clean line.
function singleLine(value = "") {
  return String(value).replace(/[\r\n]+/g, " ").trim();
}

export async function sendContactEmail({ name, email, phone, message }) {
  await getTransporter().sendMail({
    from: `"Dr. Dilip Hospital Website" <${process.env.SMTP_USER}>`,
    to: process.env.CLIENT_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission from ${singleLine(name)}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${multiline(message)}</p>
    `,
  });
}
