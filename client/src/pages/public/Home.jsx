import { Link } from "react-router-dom";
import {
  Baby,
  Syringe,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Clock,
  ArrowRight,
  Phone,
  Quote,
  Users,
  Award,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/common/Reveal";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import about from "@/assets/about.webp";
import service1 from "@/assets/service-1.webp";
import service2 from "@/assets/service-2.webp";
import service3 from "@/assets/service-3.webp";
import service4 from "@/assets/service-4.webp";
import service6 from "@/assets/service-6.webp";

const SERVICES_PREVIEW = [
  { icon: Baby, title: "Newborn Care", desc: "Well baby visits, newborn illness consultations, and all routine & optional vaccinations.", image: service1 },
  { icon: Stethoscope, title: "Child Health", desc: "Well child visits, illness consultation, diet & appetite programs, speech therapy.", image: service2 },
  { icon: HeartPulse, title: "Teenage Care", desc: "Growth & development visits, teenage illness consultation, counseling sessions.", image: service3 },
  { icon: Syringe, title: "Vaccination Centre", desc: "Highest quality single-dose vaccines, following the IAP vaccination schedule.", image: service4 },
];

const WHY_US = [
  { icon: ShieldCheck, title: "Experienced Care", desc: "Led by Dr. Dilip Kumar Jha, M.B.B.S., MD (Pediatrics), MIAP." },
  { icon: Clock, title: "24/7 Emergency", desc: "Round the clock emergency service with dedicated emergency beds." },
  { icon: HeartPulse, title: "Family-Centered", desc: "Comprehensive, coordinated, and family-centered clinical care." },
];

const STATS = [
  { icon: Calendar, end: 20, suffix: "+", label: "Years of Service" },
  { icon: Users, end: 35000, suffix: "+", label: "Children Treated" },
  { icon: Award, end: 7, suffix: "", label: "Specialist Consultants" },
  { icon: Clock, end: 24, suffix: "/7", label: "Emergency Care" },
];

// ⚠️ PLACEHOLDER — replace with real patient/parent feedback once client provides it
// Real Google reviews (4.1★, 106 reviews) — paraphrased from verified patients
const TESTIMONIALS = [
  {
    name: "Prashant Tyagi",
    source: "Google Review",
    text: "Took my daughter here for further treatment and had a wonderful experience — the TPA team was incredibly helpful throughout, and Dr. Dilip's kindness and effort made all the difference. I recommend this hospital to everyone.",
  },
  {
    name: "Archana Sharma",
    source: "Google Review",
    text: "Dr. Dilip is thoughtful and polite, and provides genuinely effective treatment. The whole team works together seamlessly — it's perfect for kids, which is why I always bring my daughter here.",
  },
  {
    name: "Prabhakar Upadhyay",
    source: "Google Review",
    text: "A good hospital for pediatric treatment — the doctor and nursing staff are very caring, and my child recovered faster than expected. Special thanks to Dr. Jha and the nursing team.",
  },
  {
    name: "Pramoud Sarma",
    source: "Google Review",
    text: "A renowned hospital in Faridabad with excellent diagnosis and a supportive, cooperative staff. Their TPA/insurance coordination is especially effective, with fast approvals when we needed them most.",
  },
  {
    name: "Vishal Yadav",
    source: "Google Review",
    text: "One of the best pediatric doctors in Faridabad — listens to patients with real patience and gives his best in every consultation. The staff are cooperative and courteous throughout.",
  },
  {
    name: "Pragya Jha",
    source: "Google Review",
    text: "Extremely reliable, caring, and courteous service, with genuine round-the-clock availability. I highly recommend it to all my friends, family, and relatives.",
  },
];

const FAQS = [
  { q: "Do I need to book an appointment in advance?", a: "While we try to accommodate walk-ins, booking ahead through our contact form or by phone helps us reduce your waiting time, especially during peak OPD hours." },
  { q: "What vaccination schedule do you follow?", a: "We strictly follow the schedule recommended by the Indian Academy of Pediatrics (IAP), using single-dose, non-stored vaccines for maximum safety and freshness." },
  { q: "Is emergency care available at night?", a: "Yes — Dr. Dilip Hospital provides round-the-clock emergency service with dedicated emergency and observation beds, every day of the year." },
  { q: "Do you accept cashless insurance?", a: "We're empaneled with several TPAs and insurance providers. Check our TPA List page or call us to confirm if your provider is covered." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -right-16 top-32 h-48 w-48 rounded-full bg-primary/5 blur-3xl sm:h-64 sm:w-64" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
          <Reveal>
            <div className="flex flex-col justify-center">
              <span className="mb-4 flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Trusted Pediatric Care in Faridabad
              </span>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to{" "}
                <span className="relative inline-block text-primary">
                  Dr. Dilip Hospital
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-primary/30"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C60 3 150 2 298 8"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Comprehensive, coordinated, and family-centered pediatric &
                neonatal healthcare — dedicated to your child's health, from
                newborn to teenage years.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group w-full rounded-full px-7 shadow-md shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0 sm:w-auto"
                >
                  <Link to="/contact">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group w-full rounded-full border-2 px-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:text-primary active:translate-y-0 sm:w-auto"
                >
                  <a href="tel:+911294086357" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Rating line */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <div className="flex -space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.1</span>
                <span className="text-sm text-muted-foreground">· 106 Google reviews</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mt-4 flex items-center justify-center px-2 pb-6 sm:px-0 sm:pb-8 md:mt-0 md:pb-0">
              {/* Accent ring behind photo */}
              <div className="absolute inset-6 -z-10 rounded-3xl border-2 border-dashed border-primary/20 md:inset-10" />

              <img
                src={about}
                alt="Dr. Dilip Kumar Jha at Dr. Dilip Hospital"
                className="aspect-square w-full max-w-sm rounded-2xl object-cover shadow-xl sm:max-w-md"
              />

              {/* Floating trust card */}
              <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border bg-background px-4 py-2.5 shadow-lg sm:-bottom-6 sm:left-6 sm:translate-x-0 sm:gap-3 sm:px-5 sm:py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10">
                  <Clock className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">24/7</p>
                  <p className="text-xs text-muted-foreground">Emergency Care</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <Reveal>
        <section className="border-b bg-primary">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-primary-foreground sm:py-10 md:grid-cols-4">
            {STATS.map(({ icon: Icon, end, suffix, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-5 w-5 opacity-80 sm:h-6 sm:w-6" />
                <span className="mt-2 text-2xl font-bold tabular-nums sm:text-3xl">
                  <AnimatedCounter end={end} suffix={suffix} />
                </span>
                <span className="mt-1 text-xs text-primary-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* About blurb */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal className="order-2 md:order-1">
            <img
              src={service6}
              alt="Doctor consulting with a young patient"
              className="aspect-video w-full rounded-2xl object-cover shadow-md"
            />
          </Reveal>
          <Reveal delay={150} className="order-1 md:order-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">A Bit About Us</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">
                Service At Its Finest
              </p>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                A humble beginning was made by Dr. Dilip Kumar Jha, M.B.B.S.,
                MD (Pediatrics), MIAP, establishing this hospital exclusively
                dedicated to the pediatric population of Faridabad and
                surrounding areas. Since inception, the hospital has grown to
                become an established name in pediatrics — not only in
                Faridabad city, but also in nearby villages.
              </p>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                As a social obligation, the hospital regularly offers free
                medical and immunization camps, along with subsidized OPD and
                IPD services for those in need.
              </p>
              <Button asChild variant="link" className="mt-2 px-0">
                <Link to="/about">
                  Learn more about us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Reveal>
            <div className="mb-8 text-center sm:mb-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Wide Range of Services</h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Personalized care for every stage — newborn to teenage.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {SERVICES_PREVIEW.map(({ icon: Icon, title, desc, image }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Card className="overflow-hidden text-center transition-shadow duration-300 hover:shadow-md">
                  {image && (
                    <img src={image} alt={title} className="aspect-video w-full object-cover" />
                  )}
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-3 text-base">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 text-center sm:mt-10">
              <Link
                to="/services"
                className="group inline-flex items-center gap-1.5 text-base font-semibold text-primary transition-colors hover:text-primary/80"
              >
                <span className="relative">
                  View All Services
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Doctor spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <Reveal>
          <Card className="overflow-hidden border-primary/20 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="grid md:grid-cols-5">
              <div className="relative md:col-span-2">
                <img
                  src={about}
                  alt="Dr. Dilip Kumar Jha"
                  className="h-56 w-full object-cover sm:h-64 md:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 md:bg-gradient-to-r" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur sm:bottom-4 sm:left-4">
                  <Award className="h-3.5 w-3.5" />
                  20+ Years of Experience
                </div>
              </div>
              <CardContent className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:col-span-3">
                <div>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Medical Director
                  </span>
                  <h2 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                    Dr. Dilip Kumar Jha
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {["M.B.B.S.", "M.D. (Pediatrics)", "MIAP"].map((cred) => (
                      <span
                        key={cred}
                        className="rounded-md border bg-muted/50 px-2 py-0.5 text-xs font-medium text-foreground/80"
                      >
                        {cred}
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground">
                      Reg. No. HN2319
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  With over two decades of dedicated pediatric practice, Dr.
                  Jha founded this hospital to bring specialized,
                  compassionate child healthcare to Faridabad — combining
                  clinical expertise with a genuinely family-centered
                  approach to every consultation.
                </p>

                <Link
                  to="/panels-of-doctors"
                  className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <span className="relative">
                    Meet our full medical team
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </div>
          </Card>
        </Reveal>
      </section>

      {/* Why us */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <Reveal>
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">What Parents Say</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Real experiences from families we've cared for.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">4.1</span>
              <a
                href="https://www.google.com/search?q=Dr.+Dilip+Hospital+Faridabad+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
              >
                from 106 Google reviews
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col pt-6">
                  <Quote className="h-6 w-6 text-primary/40" />
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    "{t.text}"
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                          {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-tight">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.source}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm hover:no-underline sm:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA banner */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center text-primary-foreground sm:py-12 md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                Need to schedule a visit for your child?
              </h2>
              <p className="mt-1 text-primary-foreground/80">
                Our team is here to help — book an appointment today.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}