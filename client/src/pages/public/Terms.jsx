import { Link } from "react-router-dom";
import {
  FileText, ArrowRight, CheckCircle2, Info, Mail, CalendarClock,
  AlertCircle, ShieldAlert, ExternalLink, Scale, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/common/Reveal";

const SECTIONS = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    title: "1. Acceptance of Terms",
    content: `By accessing or using this website, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use this website. We may update these terms from time to time, and continued use of the site after changes constitutes acceptance of the revised terms.`,
  },
  {
    id: "informational",
    icon: Info,
    title: "2. Informational Purpose Only",
    content: `The content on this website — including details about services, facilities, doctors, and the pathology/radiology partnership — is provided for general informational purposes only. It does not constitute medical advice, diagnosis, or treatment, and should not be used as a substitute for consultation with a qualified healthcare provider. Always seek the advice of Dr. Dilip Hospital's medical staff or another qualified physician for any questions regarding a medical condition.`,
  },
  {
    id: "contact-form",
    icon: Mail,
    title: "3. Contact Form Submissions",
    content: `When you submit the contact form on this website, the information you provide (name, email, phone number, and message) is sent directly to Dr. Dilip Hospital via email for the purpose of responding to your inquiry or appointment request. We do not use this information for marketing purposes or share it with third parties, except where necessary to respond to your request.`,
  },
  {
    id: "appointments",
    icon: CalendarClock,
    title: "4. Appointment Requests",
    content: `Submitting a contact form or calling to request an appointment does not guarantee a confirmed appointment time. All appointment requests are subject to confirmation by Dr. Dilip Hospital's staff via phone or email. The hospital reserves the right to reschedule or decline appointment requests based on availability and medical judgment.`,
  },
  {
    id: "accuracy",
    icon: AlertCircle,
    title: "5. Accuracy of Information",
    content: `We make reasonable efforts to keep information on this website — including doctor availability, services, timings, and facilities — accurate and up to date. However, we cannot guarantee that all information is free of errors or fully current at all times. Please confirm important details (such as timings or doctor availability) by phone before visiting.`,
  },
  {
    id: "liability",
    icon: ShieldAlert,
    title: "6. Limitation of Liability",
    content: `Dr. Dilip Hospital is not liable for any damages arising from your use of, or inability to use, this website, including reliance on any information presented here. This website is provided on an "as is" basis without warranties of any kind, express or implied.`,
  },
  {
    id: "third-party",
    icon: ExternalLink,
    title: "7. Third-Party Links & Services",
    content: `This website may reference third-party services (such as our pathology and radiology partner). We are not responsible for the content, accuracy, or practices of any third party, and any engagement with such services is at your own discretion.`,
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "8. Governing Law",
    content: `These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of the courts in Faridabad, Haryana.`,
  },
  {
    id: "contact-us",
    icon: Phone,
    title: "9. Contact Us",
    content: `If you have any questions about these Terms & Conditions, please reach out to us via the contact form or by calling +91-129 408 6357.`,
  },
];

export default function Terms() {
  return (
    <div>
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-16">
            <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <FileText className="mr-1.5 h-3.5 w-3.5" />
              Legal
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Please read these terms carefully before using this website.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Content with sidebar nav */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Sticky table of contents — desktop only */}
          <Reveal className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                On this page
              </p>
              {SECTIONS.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {title.replace(/^\d+\.\s/, "")}
                </a>
              ))}
            </nav>
          </Reveal>

          {/* Accordion */}
          <div className="min-w-0">
            <Reveal>
              <Accordion type="single" collapsible defaultValue="acceptance" className="w-full">
                {SECTIONS.map(({ id, icon: Icon, title, content }) => (
                  <AccordionItem key={id} value={id} id={id} className="scroll-mt-24">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-8 sm:w-8">
                          <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                        </div>
                        <span className="text-sm sm:text-base">{title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9.5 text-sm leading-relaxed text-muted-foreground sm:pl-11">
                      {content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            <Reveal>
              <p className="mt-8 text-center text-xs text-muted-foreground lg:text-left">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center text-primary-foreground sm:py-12 md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">Questions about our terms?</h2>
              <p className="mt-1 text-primary-foreground/80">Get in touch with our team.</p>
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