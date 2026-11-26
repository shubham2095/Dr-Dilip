import { Link } from "react-router-dom";
import { HeartHandshake, Users, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/common/Reveal";
import about from "@/assets/about.webp";

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: "Established Expertise", desc: "An established name in pediatrics, serving Faridabad city and nearby villages since inception." },
  { icon: HeartHandshake, title: "Social Commitment", desc: "Free medical & immunization camps, with 5–10% free/subsidized OPD services and 5–10% subsidized IPD care." },
  { icon: Clock, title: "Round-the-Clock Emergency", desc: "24/7 emergency service with dedicated emergency beds and observation beds." },
  { icon: Users, title: "Family-Centered Care", desc: "Comprehensive, coordinated care built around supporting families in their child's health journey." },
];

export default function About() {
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              About Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              A Bit About Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Service at its finest — dedicated pediatric care for Faridabad
              and the surrounding areas.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal className="order-2 md:order-1">
            <img
              src={about}
              alt="Dr. Dilip Kumar Jha, Medical Director"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
            />
          </Reveal>

          <Reveal delay={150} className="order-1 md:order-2">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                A humble beginning was made by{" "}
                <strong className="text-foreground">
                  Dr. Dilip Kumar Jha, M.B.B.S., MD (Pediatrics), MIAP
                </strong>
                , by establishing and starting this hospital exclusively
                dedicated to the pediatric population at Faridabad and
                surrounding areas.
              </p>
              <p className="mt-4 text-muted-foreground">
                Since inception, this institution has grown leaps and bounds
                to become an established name in pediatrics — not only in
                Faridabad city, but also in nearby villages. The hospital is
                well equipped in terms of manpower, machinery, and
                infrastructure.
              </p>
              <p className="mt-4 text-muted-foreground">
                Dr. Dilip Hospital offers full service in neonatology,
                pediatric and adolescent primary care, through to specialized
                healthcare — providing comprehensive, coordinated, and
                family-centered clinical care, with the goal of supporting
                families in the promotion of children's health and the
                prevention of childhood diseases.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">What Sets Us Apart</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border bg-primary/5 p-8 md:p-12">
            <h2 className="text-2xl font-bold">Our Commitment to the Community</h2>
            <p className="mt-4 text-muted-foreground">
              As a social obligation to society, the hospital offers free
              medical and immunization camps from time to time. Approximately
              5–10% of OPD services are provided free or at subsidized rates,
              and 5–10% of IPD (in-patient) care is offered at cost — ensuring
              quality pediatric healthcare remains accessible to all families
              in the community, regardless of their financial background.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">Want to know more?</h2>
              <p className="mt-1 text-primary-foreground/80">
                Explore our services or get in touch with our team.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}