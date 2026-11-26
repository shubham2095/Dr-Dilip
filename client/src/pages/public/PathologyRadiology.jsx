import { Link } from "react-router-dom";
import {
  Stethoscope, Syringe, Baby, FlaskConical, Siren, Clock, CheckCircle2, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/common/Reveal";

const WELL_BABY_TOPICS = [
  "Growth and development", "Family dynamics", "Healthy eating practices",
  "Importance of immunization", "Effective child rearing", "Injury prevention counseling",
  "Healthy lifestyles education", "Care of acute and chronic medical conditions",
];

const OPD_SPECIALTIES = ["Pediatric and Neonatal", "Gynaecologist and Obstetrics", "Orthopedic", "Surgeon"];

export default function PathologyRadiology() {
  return (
    <div>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Diagnostic & Outpatient Services
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Pathology &amp; Radiology Service
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A 24-hour medical dispensary offering coordinated OPD,
              immunization, well-baby, diagnostic, and emergency care — all
              under one roof.
            </p>
            <Badge variant="secondary" className="mt-4">
              <Clock className="mr-1.5 h-3.5 w-3.5" />
              24 Hours Medical Dispensary
            </Badge>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>OPD (Outpatient Department)</CardTitle>
                    <p className="text-sm text-muted-foreground">Available on all week days</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground">Specialties Covered</h4>
                    <ul className="mt-2 space-y-1.5">
                      {OPD_SPECIALTIES.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground">Outdoor Timings</h4>
                    <div className="mt-2 space-y-2 text-sm">
                      <p><span className="font-medium">Weekdays:</span> 9:00 AM – 1:00 PM &amp; 5:30 PM – 8:30 PM</p>
                      <p><span className="font-medium">Sunday:</span> 10:00 AM – 12:00 Noon{" "}
                        <span className="text-muted-foreground">(second half subject to emergency)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Syringe className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Immunization Clinic</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Operates on all days along with OPD timings. A trained
                  immunization counselor is always present for assistance, and
                  a strict schedule as recommended by the{" "}
                  <span className="font-medium text-foreground">Indian Academy of Pediatrics (IAP)</span> is followed.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <FlaskConical className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Pathology &amp; Radiology Clinic</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Outsourced services in tie-up with a well-known name in
                  pathological and radiology services — functioning fully
                  during OPD hours and in emergencies, so diagnostic support
                  is always available when needed.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Baby className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Well Baby Clinic</CardTitle>
                    <p className="text-sm text-muted-foreground">Prior registration required</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Scheduled as per the registration of the baby and their
                  parents. The clinic is targeted at bringing about better
                  harmony between parents and pediatrician, for effective
                  rearing of the child. Topics covered during meetings
                  include:
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {WELL_BABY_TOPICS.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {topic}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Siren className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Emergency Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A separate emergency unit functions round the clock with
                  resuscitation setups, along with dedicated emergency and
                  observation beds — ready to respond whenever your child
                  needs urgent care.
                </p>
                <Button asChild className="mt-4">
                  <a href="tel:+911294086357">Call Emergency Line</a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">Need a diagnostic test or OPD visit?</h2>
              <p className="mt-1 text-primary-foreground/80">Book an appointment and our team will guide you.</p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}