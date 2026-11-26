import { api } from "./api";

// Sends the contact form to the server, which emails the hospital.
export function sendContactMessage(form) {
  return api("/contact", { method: "POST", body: form });
}
