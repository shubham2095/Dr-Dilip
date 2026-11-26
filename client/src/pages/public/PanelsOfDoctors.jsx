import { Link } from "react-router-dom";
import { Stethoscope, ArrowRight, BadgeCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Reveal from "@/components/common/Reveal";
import about from "@/assets/about.webp";

const MEDICAL_DIRECTOR = {
  name: "Dr. Dilip Kumar Jha",
  qualifications: "M.B.B.S., M.D. (Pediatrics), MIAP",
  regNo: "HN2319",
  role: "Medical Director",
};

const VISITING_DOCTORS = [
  { name: "Dr. Pratibha Rajvanshi", qualifications: "M.B.B.S., D.G.O., HCMS-I", specialty: "Gynaecology" },
  { name: "Dr. Surender Vashishtha", qualifications: "M.B.B.S., M.S., FIAGES, FMAS", specialty: "Surgeon" },
  { name: "Dr. Rakesh", qualifications: "MBBS", specialty: "General Medicine" },
  { name: "Dr. Prem Kumar", qualifications: "M.B.B.S., M.S.", specialty: "Surgeon" },
  { name: "Dr. Bhagwan Das Makhija", qualifications: "MBBS, MD", specialty: "Anesthesia" },
  { name: "Dr. Ravinder Kaur", qualifications: "M.B.B.S., D.G.O., DNB", specialty: "Senior Consultant & Laparoscopist Gynaecologist", regNo: "DMC: 16075" },
  { name: "Dr. Anshul Rajvanshi", qualifications: "MBBS", specialty: "RMO" },
];

function getInitials(name) {
  return name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function PanelsOfDoctors() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Our Medical Team
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Panel of Doctors
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Apart from full-fledged pediatric care led by Dr. Dilip Kumar
              Jha, several well-known consultants in their respective fields
              also provide services to the hospital.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Medical Director spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <Card className="overflow-hidden border-primary/30">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2">
                <img
                  src={about}
                  alt="Dr. Dilip Kumar Jha, Medical Director"
                  className="h-full max-h-80 w-full object-cover md:max-h-none"
                />
              </div>
              <CardContent className="flex flex-col justify-center p-8 md:col-span-3 md:p-10">
                <Badge className="mb-3 w-fit gap-1.5">
                  <Award className="h-3.5 w-3.5" />
                  {MEDICAL_DIRECTOR.role}
                </Badge>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {MEDICAL_DIRECTOR.name}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {MEDICAL_DIRECTOR.qualifications}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  Reg. No. {MEDICAL_DIRECTOR.regNo}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Founder and lead pediatrician of Dr. Dilip Hospital,
                  dedicated to comprehensive, family-centered care for
                  children from newborn through teenage years.
                </p>
              </CardContent>
            </div>
          </Card>
        </Reveal>
      </section>

      {/* Visiting Doctors */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Visiting Doctors</h2>
              <p className="mt-2 text-muted-foreground">
                Well-known consultants across specialties, available to
                support your family's care.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VISITING_DOCTORS.map((doc, i) => (
              <Reveal key={doc.name} delay={(i % 3) * 100}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col pt-6">
                    <Avatar className="h-14 w-14 border-2 border-primary/10 transition-colors duration-300 group-hover:border-primary/30">
                      <AvatarFallback className="bg-primary/10 text-base font-semibold text-primary">
                        {getInitials(doc.name)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold">{doc.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {doc.qualifications}
                    </p>
                    <div className="mt-auto pt-3">
                      <Badge variant="secondary">{doc.specialty}</Badge>
                      {doc.regNo && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                          {doc.regNo}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold">
                Want to consult one of our doctors?
              </h2>
              <p className="mt-1 text-primary-foreground/80">
                Book an appointment and we'll help schedule your visit.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}