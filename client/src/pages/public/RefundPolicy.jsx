import { Link } from "react-router-dom";
import { RotateCcw, XCircle, ArrowRight, Clock, Percent, CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/common/Reveal";

const QUICK_FACTS = [
  { icon: Clock, value: "2 Days", label: "Refund processing time" },
  { icon: Percent, value: "5%", label: "Deduction on refunds" },
  { icon: CalendarX, value: "1 Day", label: "Minimum cancellation notice" },
];

export default function RefundPolicy() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Payments
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Please review our policy below before making a payment for a
              procedure, investigation, or consultation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-3xl px-4 pt-16">
        <div className="grid grid-cols-3 gap-4">
          {QUICK_FACTS.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 100}>
              <div className="rounded-xl border bg-muted/30 p-4 text-center transition-colors duration-300 hover:bg-primary/5">
                <Icon className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xl font-bold sm:text-2xl">{value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policy details */}
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16">
        <Reveal>
          <Card className="group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <CardContent className="flex gap-4 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                <RotateCcw className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold">Refund Policy</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Once a cancellation request is acknowledged by the hospital,
                  the remitted amount will be refunded within{" "}
                  <span className="font-medium text-foreground">2 days</span>{" "}
                  of acknowledgement, after deducting{" "}
                  <span className="font-medium text-foreground">5%</span> of
                  the amount. In case of payment gateway transactions, the
                  refund will be made to the same account used for payment.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card className="group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <CardContent className="flex gap-4 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                <XCircle className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold">Cancellation Policy</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A person who has remitted the required amount and placed an
                  order for a procedure on behalf of a beneficiary may request
                  cancellation of that procedure, provided the request is
                  received and acknowledged by the hospital. Cancellation
                  requests must be submitted{" "}
                  <span className="font-medium text-foreground">
                    at least one day prior
                  </span>{" "}
                  to the scheduled date of the procedure, investigation, or
                  consultation.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <p className="text-center text-xs text-muted-foreground">
            For any refund or cancellation requests, please contact us
            directly by phone or through the contact form below.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">
                Need to request a cancellation?
              </h2>
              <p className="mt-1 text-primary-foreground/80">
                Reach out to our team as early as possible.
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