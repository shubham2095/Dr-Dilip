import { z } from "zod";

const REQUIRED = "Name, email, and message are required.";

// "Required" message only when the field is missing; wrong types get their own message.
const requiredText = (max, tooLong) =>
  z
    .string({ error: (issue) => (issue.input === undefined ? REQUIRED : "Invalid input.") })
    .trim()
    .min(1, REQUIRED)
    .max(max, tooLong);

export const contactSchema = z.object({
  name: requiredText(100, "Name must be 100 characters or fewer."),
  email: requiredText(254, "Email is too long.").regex(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Please provide a valid email address.",
  ),
  phone: z.string().trim().max(30, "Phone number is too long.").default(""),
  message: requiredText(5000, "Message must be 5000 characters or fewer."),
  // Honeypot field, checked in the controller.
  website: z.string().default(""),
});
