import { Link } from "react-router-dom";
import {
  Baby, Stethoscope, HeartPulse, Syringe, PackageCheck, Activity, Wind,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/common/Reveal";
import service1 from "@/assets/service-1.webp";
import service2 from "@/assets/service-2.webp";
import service3 from "@/assets/service-3.webp";
import service4 from "@/assets/service-4.webp";
import service5 from "@/assets/service-5.webp";
import service6 from "@/assets/service-6.webp";

const FEATURED_CATEGORIES = [
  {
    id: "newborn",
    icon: Baby,
    title: "Newborn",
    subtitle: "Getting You Answers",
    image: service1,
    items: [
      "Well Baby Visit",
      "Newborn Illness Consultations",
      "Newborn Vaccinations – All routine and optional vaccines",
      '"Caring Newborn" – Workshop for parents',
      "Newborn Screening Programs",
    ],
  },
  {
    id: "children",
    icon: Stethoscope,
    title: "Children",
    subtitle: "A High Standard of Care",
    image: service2,
    items: [
      "Well Child Visit",
      "Child Illness Consultation",
      "Vaccinations – Routine, overdue/missed vaccines",
      "Diet and Appetite Improvement Program",
      "Counseling Sessions – Behavior problems, poor school performance, and others",
      "Speech Therapy",
    ],
  },
  {
    id: "teenage",
    icon: HeartPulse,
    title: "Teenage",
    subtitle: "Health Matters",
    image: service3,
    items: [
      "Growth and Development Visit",
      "Teenage Illness Consultation",
      "Vaccinations – Routine, overdue/missed vaccines",
      "Diet for Teenagers",
      "Counseling Sessions – Managing teenagers",
    ],
  },
  {
    id: "vaccination",
    icon: Syringe,
    title: "Vaccination Centre",
    subtitle: "A High Standard of Care",
    image: service4,
    items: [
      "Highest Quality Vaccines Used",
      "No Storage of Vaccines",
      "Only Single Dose Vaccines Used",
      "Follows IAP Vaccination Schedule",
      "Free Growth & Development Assessment on Vaccination Day",
      "All Latest Vaccines Available",
      "Routine and Overdue/Missed Vaccination Facility",
      "Adult Vaccinations",
    ],
  },
];

const MORE_CATEGORIES = [
  {
    id: "packages",
    icon: PackageCheck,
    title: "Annual Health Packages",
    subtitle: "Health Matters",
    items: ["Newborn Care Package", "Unlimited Health Package", "Regular Health Package"],
  },
  {
    id: "chronic",
    icon: Activity,
    title: "Chronic Disease Program",
    subtitle: "A High Standard of Care",
    items: [
      "Asthma Control Program",
      "Constipation Control Program",
      "Obesity Control Program",
      "Weight and Height Improvement Program",
    ],
  },
  {
    id: "others",
    icon: Wind,
    title: "Others",
    subtitle: "Health Matters",
    items: ["Nebulisation", "Dressing"],
  },
];

export default function Services() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Our Services
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Wide Range of Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Personalized care for every stage of your child's growth — from
              newborn to teenage years.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Adolescent Medicine */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold">Adolescent Medicine</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">
                Getting You Answers
              </p>
              <p className="mt-4 text-muted-foreground">
                We offer state-of-the-art care to help lead you down the path
                to good health. Our medical staff is devoted to your comfort
                and care, providing information every step of the way. If you
                have any questions about our Adolescent Medicine services, or
                any of our other services, please get in touch today.
              </p>
              <Button asChild className="mt-6">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={service6}
              alt="Teenage patient consultation"
              className="aspect-video w-full rounded-2xl object-cover shadow-md"
            />
          </Reveal>
        </div>
      </section>

      {/* Featured categories — image-led cards */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Care at Every Stage</h2>
              <p className="mt-2 text-muted-foreground">
                From your baby's first days to the teenage years.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURED_CATEGORIES.map(({ id, icon: Icon, title, subtitle, image, items }, i) => (
              <Reveal key={id} delay={(i % 2) * 100}>
                <Card className="overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="aspect-video w-full object-cover"
                  />
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p className="text-xs text-muted-foreground">{subtitle}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-1.5">
                      {items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                      {items.length > 4 && (
                        <li className="pl-6 text-xs text-muted-foreground">
                          +{items.length - 4} more
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining categories — compact accordion */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Additional Programs
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {MORE_CATEGORIES.map(({ id, icon: Icon, title, subtitle, items }) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold">{title}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{subtitle}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-12 list-disc space-y-1.5 text-sm text-muted-foreground">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">Not sure which service you need?</h2>
              <p className="mt-1 text-primary-foreground/80">Call us or book an appointment — we'll guide you.</p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}