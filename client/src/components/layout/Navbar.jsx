import logo from "@/assets/logo.webp";
import logoRight from "@/assets/logo-right.webp";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  Phone,
  ChevronDown,
  Stethoscope,
  FlaskConical,
  ShieldCheck,
  Users,
  Lock,
  FileText,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const PRIMARY_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Facility", path: "/facility" },
];

const MORE_LINKS = [
  { name: "Pathology & Radiology", path: "/pathology-radiology", icon: FlaskConical },
  { name: "TPA List", path: "/tpa-list", icon: ShieldCheck },
  { name: "Panels of Doctors", path: "/panels-of-doctors", icon: Users },
  { divider: true },
  { name: "Privacy Policy", path: "/privacy", icon: Lock },
  { name: "Terms & Conditions", path: "/terms", icon: FileText },
  { name: "Refund Policy", path: "/refund-policy", icon: RotateCcw },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMoreActive = MORE_LINKS.some(
    (l) => !l.divider && l.path === location.pathname
  );

  const linkClass = ({ isActive }) =>
    `group relative py-1.5 text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  const closeMenu = () => setOpen(false);

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-2.5 rounded-md px-3 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;

  const underline = (isActive) => (
    <span
      className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:px-4">
        {/* Logo */}
        <Link to="/" className="flex min-w-0 shrink items-center gap-2">
          <img
            src={logo}
            alt="Dr. Dilip Hospital Logo"
            className="h-8 w-8 shrink-0 object-contain transition-transform duration-300 sm:h-10 sm:w-10"
          />
          <span className="truncate text-base font-bold leading-tight tracking-tight sm:text-lg">
            Dr. Dilip
            <span className="block truncate text-[10px] font-medium text-muted-foreground sm:text-xs">
              Hospital
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-7">
          {PRIMARY_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end>
              {({ isActive }) => (
                <>
                  {link.name}
                  {underline(isActive)}
                </>
              )}
            </NavLink>
          ))}

          {/* More dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`group relative flex items-center gap-1 py-1.5 text-sm font-medium outline-none transition-colors ${
                isMoreActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              More
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-popup-open:rotate-180" />
              {underline(isMoreActive)}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              sideOffset={14}
              className="w-64 animate-in fade-in-0 zoom-in-95"
            >
              {MORE_LINKS.map((link, i) =>
                link.divider ? (
                  <DropdownMenuSeparator key={`div-${i}`} />
                ) : (
                  <DropdownMenuItem
                    key={link.path}
                    className="flex cursor-pointer items-center gap-2.5"
                    render={<Link to={link.path} />}
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.name}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/contact" className={linkClass}>
            {({ isActive }) => (
              <>
                Contact
                {underline(isActive)}
              </>
            )}
          </NavLink>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <a
            href="tel:+911294086357"
            className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0" />
            +91-129 408 6357
          </a>
          <Button
            asChild
            className="shrink-0 shadow-sm transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <img
            src={logoRight}
            alt="NABH Entry Level Certified"
            className="h-10 w-10 shrink-0 object-contain xl:h-11 xl:w-11"
            title="NABH Entry Level Certified — Patient Safety & Quality of Care"
          />
        </div>

        {/* Mobile / tablet nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            render={<Button variant="ghost" size="icon" className="shrink-0 lg:hidden" />}
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-72 overflow-y-auto sm:w-72">
            <nav className="mt-14 flex flex-col gap-1.5 px-3 pb-6">
              <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Menu
              </p>
              {PRIMARY_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="my-2 border-t" />

              <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                More
              </p>
              {MORE_LINKS.filter((l) => !l.divider).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  {link.name}
                </NavLink>
              ))}

              <div className="my-2 border-t" />

              <NavLink to="/contact" onClick={closeMenu} className={mobileLinkClass}>
                Contact
              </NavLink>

              <Button asChild className="mt-4 h-12 text-base">
                <Link to="/contact" onClick={closeMenu}>Book Appointment</Link>
              </Button>
              <a
                href="tel:+911294086357"
                className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +91-129 408 6357
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}