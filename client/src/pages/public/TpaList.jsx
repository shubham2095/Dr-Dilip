import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Phone, ShieldCheck, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/common/Reveal";

const INSURANCE_COMPANIES = [
  "The New India Insurance Co. Ltd",
  "National Insurance Co. Ltd",
  "United India Insurance Co. Ltd",
  "The Oriental Insurance Co. Ltd",
  "Bajaj Allianz General Insurance Co. Ltd",
  "HDFC ERGO General Insurance Co. Ltd",
  "Aditya Birla Health Insurance Co. Ltd",
  "Reliance Health Insurance Co. Ltd",
  "Liberty General Insurance Ltd",
  "Universal Sompo General Insurance Co. Ltd",
  "IFFCO Tokio General Insurance",
  "Tata AIG General Insurance",
];

const TPA_PROVIDERS = [
  "Health Insurance TPA of India Ltd",
  "United Health Care Parekh TPA Pvt Ltd",
  "E Meditek TPA Service Ltd",
  "Raksha TPA Pvt Ltd",
  "Medi Assist India TPA Ltd",
  "MD India Health Care TPA Service Pvt Ltd",
  "Paramount Health Service & Insurance TPA Pvt Ltd",
  "Heritage Health TPA Pvt Ltd",
  "Focus Health Services TPA Pvt Ltd",
  "Medicare TPA Services Pvt Ltd",
  "Dedicated Health Care Services TPA Pvt Ltd",
  "Safeway Insurance TPA Pvt Ltd",
  "Anyuta TPA in Health Care Pvt Ltd",
  "East West Assist TPA Pvt Ltd",
  "Med Save Health Care TPA Ltd",
  "Genins India Insurance TPA Ltd",
  "Park Mediclaim TPA Pvt Ltd",
  "Health India TPA Services Pvt Ltd",
  "Good Health TPA Services Ltd",
  "Vipul Med Corp TPA Pvt Ltd",
  "Alankit Insurance TPA Ltd",
  "Anmol Medicare TPA Ltd",
  "Vidal Health TPA Pvt Ltd",
  "Rothshield Health Care TPA",
  "Family Health Plan TPA Ltd",
  "Ericson Insurance TPA",
];

export default function TpaList() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();

  const filteredInsurance = INSURANCE_COMPANIES.filter((n) =>
    n.toLowerCase().includes(q)
  );
  const filteredTpas = TPA_PROVIDERS.filter((n) => n.toLowerCase().includes(q));
  const totalResults = filteredInsurance.length + filteredTpas.length;

  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-16">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Cashless Mediclaim Facility
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              TPA &amp; Insurance Network
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Dr. Dilip Hospital is empaneled with the following insurance
              companies and Third Party Administrators (TPAs) for cashless
              mediclaim treatment.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* Search */}
        <Reveal>
          <div className="relative mb-8 sm:mb-10">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search insurance company or TPA..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 pl-11 text-sm shadow-sm sm:h-12 sm:text-base"
            />
            {query && (
              <p className="mt-2 text-sm text-muted-foreground">
                {totalResults} result{totalResults !== 1 && "s"} found
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Insurance Companies */}
          <Reveal>
            <Card className="h-full">
              <CardContent className="p-4 pt-5 sm:p-6 sm:pt-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10">
                    <Building2 className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold sm:text-base">Insurance Companies</h2>
                    <p className="text-xs text-muted-foreground">
                      {filteredInsurance.length} of {INSURANCE_COMPANIES.length} shown
                    </p>
                  </div>
                </div>

                {filteredInsurance.length > 0 ? (
                  <ul className="space-y-1">
                    {filteredInsurance.map((name) => (
                      <li
                        key={name}
                        className="flex items-start gap-2.5 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted/60"
                      >
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="break-words">{name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No matching insurance companies found.
                  </p>
                )}
              </CardContent>
            </Card>
          </Reveal>

          {/* TPA Providers */}
          <Reveal delay={100}>
            <Card className="h-full">
              <CardContent className="p-4 pt-5 sm:p-6 sm:pt-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10">
                    <ShieldCheck className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold sm:text-base">TPA Providers</h2>
                    <p className="text-xs text-muted-foreground">
                      {filteredTpas.length} of {TPA_PROVIDERS.length} shown
                    </p>
                  </div>
                </div>

                {filteredTpas.length > 0 ? (
                  <ul className="max-h-72 space-y-1 overflow-y-auto pr-1 sm:max-h-[520px]">
                    {filteredTpas.map((name) => (
                      <li
                        key={name}
                        className="flex items-start gap-2.5 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted/60"
                      >
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="break-words">{name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No matching TPA providers found.
                  </p>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {query && totalResults === 0 && (
          <Reveal>
            <div className="mt-6 rounded-lg border bg-muted/30 p-6 text-center">
              <Badge variant="secondary" className="mb-2">No matches</Badge>
              <p className="text-sm text-muted-foreground">
                We couldn't find "{query}" in our network. Please call us to
                confirm — new partnerships are added from time to time.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10">
            <p className="text-sm text-muted-foreground">
              Not sure if your insurance provider is on this list? Call us to
              confirm before your visit.
            </p>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href="tel:+911294086357">
                <Phone className="mr-2 h-4 w-4" />
                +91-129 408 6357
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center text-primary-foreground sm:py-12 md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">Planning a cashless treatment?</h2>
              <p className="mt-1 text-primary-foreground/80">
                Get in touch with our billing desk beforehand for a smooth process.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
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