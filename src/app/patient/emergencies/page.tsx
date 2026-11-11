import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Phone,
  ShieldAlert,
  Siren,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { emergencyCare } from "@/data/pages";

export const metadata: Metadata = {
  title: "Dental Emergencies",
  description:
    "What to do in a dental emergency — toothache, broken tooth, knocked-out tooth, bitten tongue, broken jaw, and bleeding — from Downtown Dental in Jamestown, ND.",
  alternates: {
    canonical: "/patient/emergencies",
  },
};

export default function EmergenciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental emergencies"
        title={
          <>
            When something needs attention{" "}
            <span className="display-italic text-clay">right now.</span>
          </>
        }
        description="A dental emergency can feel frightening. Take a breath, read the guidance below, and call us. During regular business hours, we will work you into our schedule."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "Emergencies" },
        ]}
        actions={
          <>
            <Button asChild variant="clay" size="lg">
              <a href={practice.phoneHref}>
                <Phone className="h-4 w-4" />
                Call {practice.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact-us/appointment-request">
                Request an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
        media={
          <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-clay/25 bg-clay/10 p-8">
            <div className="flex items-center justify-between">
              <Badge tone="clay">Call first</Badge>
              <Siren className="h-5 w-5 text-clay" />
            </div>
            <p className="mt-5 font-display text-[1.8rem] leading-[1.06] tracking-[-0.025em] text-ink">
              We will do our best to see you the same day.
            </p>
            <div className="mt-6 space-y-3 border-t border-clay/20 pt-5 text-sm">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-ink transition-colors hover:text-clay"
              >
                <Phone className="h-4 w-4 text-clay" />
                {practice.phone}
              </a>
              <p className="flex items-start gap-2.5 text-ink/68">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                {practice.shortHours}
              </p>
              <p className="flex items-start gap-2.5 text-ink/68">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                After hours, reach us through our answering service.
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-clay/20 bg-clay/8 p-5 sm:items-center">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-clay sm:mt-0" />
              <p className="text-sm leading-relaxed text-ink/70">
                <strong className="font-semibold text-ink">
                  For a life-threatening emergency,
                </strong>{" "}
                call 911 or go to the nearest emergency room. The guidance below
                is for dental injuries and concerns.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {emergencyCare.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.05}>
                <article
                  className={`card-hover flex h-full flex-col rounded-[1.75rem] border border-ink/10 p-7 sm:p-8 ${
                    index === 0 ? "bg-ink text-cream" : "bg-white/55"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        index === 0
                          ? "border border-cream/15 bg-white/5 text-sage"
                          : "bg-sage-light text-pine"
                      }`}
                    >
                      <AlertCircle className="h-5 w-5" />
                    </span>
                    <span
                      className={`font-display text-sm ${
                        index === 0 ? "text-cream/30" : "text-ink/68"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className={`mt-6 font-display text-[1.65rem] leading-tight tracking-[-0.022em] ${
                      index === 0 ? "text-cream" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-[0.94rem] leading-relaxed ${
                      index === 0 ? "text-cream/65" : "text-ink/68"
                    }`}
                  >
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-ink/10 bg-cream-2/60 p-7 sm:flex-row sm:items-center sm:p-9">
              <div>
                <p className="font-display text-[1.8rem] leading-tight tracking-[-0.025em] text-ink">
                  Not sure if it is an emergency?
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/68">
                  Call us and describe what is happening. We will tell you
                  whether to come in, monitor it at home, or seek urgent
                  medical care.
                </p>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <a href={practice.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {practice.phone}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 px-2 text-xs text-ink/68">
              <span className="inline-flex items-center gap-1.5">
                <ArrowUpRight className="h-3.5 w-3.5 text-clay" />
                Emergency guidance is general information, not a diagnosis.
              </span>
              <Link
                href="/patient/common-problems"
                className="font-semibold text-pine transition-colors hover:text-clay"
              >
                Browse common problems
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Dental emergency? Start with a phone call."
        description="We will help you understand what to do next and, when needed, get you into the office as soon as we can."
      />
    </>
  );
}
