import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileText, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const SECTIONS = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Balancing Care and Confidentiality",
    body: "Ethical medical research and patient privacy protections both matter to us. Health research plays a vital role in improving healthcare for everyone, but protecting patients from harm and preserving their rights is just as essential. We collect only the personal health information we need — with the goal of benefiting your care and, where relevant, contributing to broader public health — while treating your dignity and confidentiality as non-negotiable.",
  },
  {
    icon: Lock,
    number: "02",
    title: "How We Protect Your Information",
    body: "Your personal and medical information is kept strictly confidential and is only accessed by authorized medical staff directly involved in your care. We do not share your personal health information with third parties without your consent, except where required by law or necessary for your treatment (for example, coordinating with diagnostic or insurance partners on your behalf).",
  },
  {
    icon: FileText,
    number: "03",
    title: "Ongoing Commitment",
    body: "We continually review our practices around handling health-related data to close gaps and strengthen protections, in line with evolving ethical and legal standards for confidentiality in healthcare.",
  },
];

export default function Privacy() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Your Trust Matters
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We are committed to protecting your privacy and safeguarding
              your personal and health information at every step of your
              care.
            </p>
            <div className="mx-auto mt-6 flex w-fit items-center gap-1.5 rounded-full border bg-background px-3 py-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              Last reviewed:{" "}
              {new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="relative space-y-6">
          {/* Connecting line for larger screens */}
          <div className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-border sm:block" />

          {SECTIONS.map(({ icon: Icon, number, title, body }, i) => (
            <Reveal key={number} delay={i * 100}>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="absolute right-4 top-4 select-none text-5xl font-bold text-muted/10 transition-colors duration-300 group-hover:text-primary/10">
                  {number}
                </div>
                <CardContent className="relative flex gap-4 pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            If you have any questions about how we handle your information,
            please contact us directly.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">
                Have a question about your privacy?
              </h2>
              <p className="mt-1 text-primary-foreground/80">
                Reach out to our team — we're happy to explain.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}