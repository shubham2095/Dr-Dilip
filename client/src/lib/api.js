const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

export async function sendContactForm(data) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }
  return json;
}