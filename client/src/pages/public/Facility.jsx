import { Link } from "react-router-dom";
import { Armchair, BedDouble, Stethoscope, Ambulance, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/common/Reveal";
import facility1 from "@/assets/facility-1.webp";
import facility2 from "@/assets/facility-2.webp";
import facility3 from "@/assets/facility-3.webp";
import facility4 from "@/assets/facility-4.webp";
import facility5 from "@/assets/facility-5.webp";

const FACILITIES = [
  { icon: Armchair, title: "Waiting Areas", subtitle: "State-of-the-Art Assistance", desc: "Comfortable, clean waiting areas designed with families and young children in mind.", image: facility1 },
  { icon: BedDouble, title: "Long Term Rooms", subtitle: "The Support You Need", desc: "Dedicated rooms for patients requiring extended stays, with round-the-clock care.", image: facility2 },
  { icon: Stethoscope, title: "Operating Rooms", subtitle: "A True Advantage", desc: "Well-equipped operating rooms staffed by experienced medical professionals.", image: facility3 },
  { icon: Ambulance, title: "Ambulance Services", subtitle: "State-of-the-Art Assistance", desc: "Round-the-clock ambulance services for emergencies, ensuring timely care when it matters most.", image: facility4 },
  { icon: Zap, title: "Power Backup", subtitle: "A True Advantage", desc: "Uninterrupted power backup to keep critical care and equipment running at all times.", image: facility5 },
];

export default function Facility() {
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Our Facility
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Comfort & Care
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The hospital is well equipped in terms of manpower, machinery,
              and infrastructure — built to support every stage of your
              child's care.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map(({ icon: Icon, title, subtitle, desc, image }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <Card className="overflow-hidden">
                <img src={image} alt={title} className="aspect-video w-full object-cover" />
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
                  <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="border-y bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="rounded-2xl border bg-background p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold">Round-the-Clock Emergency Service</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Dr. Dilip Hospital provides round-the-clock emergency service.
                Emergency beds and observation beds are well designated to
                ensure your child receives immediate attention whenever it's
                needed most.
              </p>
              <Button asChild className="mt-6">
                <a href="tel:+911294086357">Call Emergency Line</a>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">Want to visit our hospital?</h2>
              <p className="mt-1 text-primary-foreground/80">Get directions or book an appointment with our team.</p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}