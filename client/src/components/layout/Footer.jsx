import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import logo from "@/assets/logo.avif";
import logoRight from "@/assets/logo-right.webp";

const QUICK_LINKS = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Facility", path: "/facility" },
  { name: "Pathology & Radiology", path: "/pathology-radiology" },
  { name: "TPA List", path: "/tpa-list" },
  { name: "Panels of Doctors", path: "/panels-of-doctors" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Refund Policy", path: "/refund-policy" },
  { name: "Contact", path: "/contact" },
];

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t bg-muted/30">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      {/* Accent top line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-primary" />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="group flex items-center gap-2 w-fit">
              <img
                src={logo}
                alt="Dr. Dilip Hospital"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-lg font-bold leading-tight">
                Dr. Dilip
                <span className="block text-xs font-medium text-muted-foreground">
                  Hospital
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Dedicated pediatric and neonatal care in Faridabad —
              comprehensive, coordinated, family-centered healthcare for
              your child.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.facebook.com/drdiliphospital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/drdilipkjha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919818621985"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            {/* NABH badge */}
            <div className="mt-5 flex items-center gap-3 rounded-lg border bg-background/60 p-3 transition-shadow duration-200 hover:shadow-sm">
              <img src={logoRight} alt="NABH Certified" className="h-10 w-10 shrink-0 object-contain" />
              <span className="text-xs leading-snug text-muted-foreground">
                NABH Entry Level Certified — Patient Safety & Quality of Care
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="relative w-fit pb-2 text-sm font-semibold tracking-wide text-foreground">
              Quick Links
              <span className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-primary/40" />
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="relative w-fit pb-2 text-sm font-semibold tracking-wide text-foreground">
              Legal &amp; Support
              <span className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-primary/40" />
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>

            <h4 className="relative mt-6 flex w-fit items-center gap-1.5 pb-2 text-sm font-semibold tracking-wide text-foreground">
              <Clock className="h-4 w-4 text-primary" />
              Timings
              <span className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-primary/40" />
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Weekdays: 9:00 AM – 1:00 PM
              <br />
              Evening: 5:30 PM – 8:00 PM
              <br />
              Sunday: 11:30 AM – 12:30 PM
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="relative w-fit pb-2 text-sm font-semibold tracking-wide text-foreground">
              Contact Us
              <span className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-primary/40" />
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <span className="pt-1">
                  765, Link Road, Sector 28, Near Indian Oil Petrol Pump,
                  Faridabad, Haryana 121008
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <a
                  href="tel:+911294086357"
                  className="transition-colors hover:text-primary"
                >
                  +91-129 408 6357
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="h-3.5 w-3.5" />
                </span>
                <a
                  href="https://wa.me/919818621985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  +91-981 862 1985
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <a
                  href="mailto:drdiliphospital@gmail.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  drdiliphospital@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {year} Dr. Dilip Hospital. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://heltog.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs transition-opacity hover:opacity-80"
            >
              Powered by{" "}
              <span className="font-semibold text-yellow-500">
                Heltog Technologies Pvt. Ltd.
              </span>
              <ArrowUpRight size={12} className="text-yellow-500" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}