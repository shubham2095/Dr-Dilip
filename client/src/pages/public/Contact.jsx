import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { sendContactMessage } from "@/services/contactService";
import Reveal from "@/components/common/Reveal";

const initialForm = { name: "", email: "", phone: "", message: "", website: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (form.phone && !/^[0-9+\-\s()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await sendContactMessage(form);
      setStatus("success");
      setStatusMessage(res.message || "Your message has been sent successfully!");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setStatusMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Have a question or need to book an appointment? Reach out to us
              — we're here to help.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <Reveal>
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      765, Link Road, Sector 28, Near Indian Oil Petrol Pump,
                      Faridabad, Haryana 121008
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+911294086357" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
                      +91-129 408 6357
                    </a>
                    <a href="tel:+919818621985" className="mt-0.5 block text-sm text-muted-foreground hover:text-primary">
                      +91-981 862 1985
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <a
                      href="https://wa.me/919818621985"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                    >
                      +91-981 862 1985
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:drdiliphospital@gmail.com" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
                      drdiliphospital@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={400}>
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Timings</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Weekdays: Morning 9:00 AM – 1:00 PM<br />
                      Evening: 5:30 PM – 8:00 PM
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sunday: 11:30 AM – 12:30 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* Contact form */}
          <Reveal delay={150} className="md:col-span-3">
          <div className="md:col-span-3">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold">Send Us a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {/* Honeypot field — hidden from real users, bots fill it */}
                  <div className="hidden" aria-hidden="true">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      className="mt-1.5"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        className="mt-1.5"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        className="mt-1.5"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      className="mt-1.5"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                    {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>

                  {status === "success" && (
                    <div className="flex items-start gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      {statusMessage}
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      {statusMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <Reveal>
        <section className="border-t">
          <div className="h-96 w-full">
            <iframe
              title="Dr. Dilip Hospital Location"
              src="https://www.google.com/maps?q=765+Link+Road+Sector+28+Faridabad+Haryana+121008&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </Reveal>
    </div>
  );
}