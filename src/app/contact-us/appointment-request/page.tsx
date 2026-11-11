import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AppointmentForm } from "@/components/appointment-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";

export const metadata: Metadata = {
  title: "Appointment Request",
  description:
    "Request an appointment at Downtown Dental in Jamestown, ND. Share your preferred days and times and our team will follow up to schedule.",
  alternates: {
    canonical: "/contact-us/appointment-request",
  },
};

const nextSteps = [
  {
    number: "01",
    title: "We receive your request",
    text: "Your details come to our front desk team — not an automated booking system.",
  },
  {
    number: "02",
    title: "We call or email you",
    text: "A team member will follow up to confirm a day and time that works for you.",
  },
  {
    number: "03",
    title: "We welcome you in",
    text: "Arrive a few minutes early with your insurance information, and we will take it from there.",
  },
];

export default function AppointmentRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointment request"
        title={
          <>
            Let&apos;s find a time{" "}
            <span className="display-italic text-clay">that works.</span>
          </>
        }
        description="Share a few details and we will follow up to schedule your visit. If you would rather talk to someone right away, call the office — we are happy to help."
        crumbs={[{ label: "Contact Us", href: "/contact-us/contact-us" }, { label: "Appointment Request" }]}
        actions={
          <>
            <Button asChild size="lg">
              <a href={practice.phoneHref}>
                <Phone className="h-4 w-4" />
                Call {practice.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/patient/first-visit">
                What to expect
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="mb-7 flex items-center gap-3">
              <Badge tone="sage">
                <CalendarCheck className="h-3 w-3" />
                New patients welcome
              </Badge>
              <p className="text-xs text-ink/68">No online payment required</p>
            </div>
            <AppointmentForm />
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-cream">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
                />
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-sage">
                  What happens next
                </p>
                <ol className="mt-5 space-y-5">
                  {nextSteps.map((step) => (
                    <li key={step.number} className="flex gap-4">
                      <span className="font-display text-sm text-sage/70">
                        {step.number}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-cream">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-cream/55">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[1.75rem] border border-ink/10 bg-white/60 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Prefer to call?
                </p>
                <a
                  href={practice.phoneHref}
                  className="mt-3 flex items-center gap-2.5 font-display text-[1.5rem] tracking-[-0.02em] text-ink transition-colors hover:text-clay"
                >
                  <Phone className="h-4 w-4 text-clay" />
                  {practice.phone}
                </a>
                <div className="mt-4 space-y-2.5 border-t border-ink/10 pt-4 text-sm">
                  <a
                    href={practice.emailHref}
                    className="flex items-center gap-2.5 break-all text-ink/68 transition-colors hover:text-clay"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-clay" />
                    {practice.email}
                  </a>
                  <p className="flex items-start gap-2.5 text-ink/68">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                    {practice.address.street}, {practice.address.city},{" "}
                    {practice.address.state} {practice.address.zip}
                  </p>
                  <p className="flex items-start gap-2.5 text-ink/68">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                    {practice.shortHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-[1.5rem] border border-pine/15 bg-sage-light/45 p-6">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                <p className="text-xs leading-relaxed text-ink/68">
                  This form is for appointment requests, not urgent dental
                  concerns. If you have a dental emergency, please call the
                  office directly.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-ink/10 bg-cream-2/55 p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Before you come in
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Bring your insurance information.",
                    "Arrive a few minutes early for forms.",
                    "Call us with any schedule changes.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-ink/68"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
