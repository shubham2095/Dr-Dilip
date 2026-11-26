import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Phone, X, MessageSquare } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary/70 via-primary to-primary/70 shadow-[0_0_8px_rgba(0,0,0,0.15)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.396.703 4.63 1.912 6.507L4 29l7.68-1.878A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7a9.63 9.63 0 0 1-4.91-1.343l-.352-.21-4.556 1.115 1.214-4.44-.229-.362A9.62 9.62 0 0 1 5.7 15c0-5.688 4.617-10.3 10.304-10.3S26.31 9.312 26.31 15s-4.618 10.3-10.306 10.3Zm5.646-7.71c-.31-.155-1.832-.904-2.116-1.007-.284-.104-.49-.155-.696.155-.207.31-.799 1.007-.98 1.214-.18.207-.361.233-.671.078-.31-.155-1.309-.482-2.494-1.537-.922-.822-1.545-1.838-1.726-2.148-.18-.31-.02-.478.136-.632.14-.14.31-.362.465-.543.155-.181.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.696-1.677-.955-2.297-.252-.604-.507-.522-.696-.532l-.593-.01a1.14 1.14 0 0 0-.826.388c-.284.31-1.084 1.06-1.084 2.582 0 1.522 1.11 2.994 1.265 3.201.155.207 2.185 3.335 5.293 4.678.74.32 1.318.511 1.768.654.743.236 1.42.203 1.955.123.596-.089 1.832-.75 2.09-1.474.259-.724.259-1.345.181-1.474-.078-.13-.284-.207-.594-.362Z" />
    </svg>
  );
}

function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop to close on outside click */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px] transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
        {/* WhatsApp option */}
        <a
          href="https://wa.me/919818621985"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-3.5 pr-1.5 shadow-xl ring-1 ring-black/5 transition-all duration-300 ease-out hover:shadow-2xl sm:gap-3 sm:py-2 sm:pl-4 sm:pr-2 ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-90 opacity-0"
          }`}
          style={{ transitionDelay: open ? "100ms" : "0ms" }}
        >
          <span className="text-xs font-semibold text-foreground sm:text-sm">
            WhatsApp
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 text-white transition-transform duration-200 hover:scale-105 sm:h-10 sm:w-10">
            <WhatsAppIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </span>
        </a>

        {/* Call option */}
        <a
          href="tel:+911294086357"
          aria-label="Call us"
          className={`flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-3.5 pr-1.5 shadow-xl ring-1 ring-black/5 transition-all duration-300 ease-out hover:shadow-2xl sm:gap-3 sm:py-2 sm:pl-4 sm:pr-2 ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-90 opacity-0"
          }`}
          style={{ transitionDelay: open ? "40ms" : "0ms" }}
        >
          <span className="text-xs font-semibold text-foreground sm:text-sm">
            Call Us
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 hover:scale-105 sm:h-10 sm:w-10">
            <Phone className="h-4 w-4" />
          </span>
        </a>

        {/* Main toggle button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close contact options" : "Contact us"}
          aria-expanded={open}
          className={`group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 sm:h-16 sm:w-16 ${
            open ? "bg-foreground" : "bg-green-500"
          }`}
        >
          <span className="relative flex h-6 w-6 items-center justify-center sm:h-7 sm:w-7">
            <MessageSquare
              className={`absolute h-6 w-6 transition-all duration-300 sm:h-7 sm:w-7 ${
                open
                  ? "scale-0 rotate-45 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute h-6 w-6 transition-all duration-300 sm:h-7 sm:w-7 ${
                open
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-45 opacity-0"
              }`}
            />
          </span>
          {!open && (
            <>
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-500 opacity-40" />
              <span className="absolute inset-0 -z-10 rounded-full bg-green-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
            </>
          )}
        </button>
      </div>
    </>
  );
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  return (
    <div>
      <ScrollProgressBar />
      <Navbar />
      <main key={location.pathname} className="flex-1 animate-in fade-in duration-300">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}