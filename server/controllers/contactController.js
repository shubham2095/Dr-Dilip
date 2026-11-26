import { sendContactEmail } from "../services/mailService.js";

export async function submitContact(req, res) {
  // Honeypot: real visitors never see this field. Report success to bots without sending mail.
  if (req.body.website) {
    return res.json({ success: true });
  }

  try {
    await sendContactEmail(req.body);
    res.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, message: "Something went wrong. Please try again later." });
  }
}
