import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Phone,
  ScanLine,
  ShieldCheck,
  Siren,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TreatmentGrid } from "@/components/treatment-grid";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import {
  treatmentCategories,
  treatments,
  type TreatmentCategory,
} from "@/data/treatments";

export const metadata: Metadata = {
  title: "Dental Treatments",
  description:
    "Explore preventive, restorative, diagnostic, and comfort-focused dental treatments at Downtown Dental in Jamestown, North Dakota — from same-day CEREC crowns to dental implants and emergency care.",
  alternates: {
    canonical: "/treatments",
  },
};

const categoryIcons: Record<TreatmentCategory, LucideIcon> = {
  Preventive: ShieldCheck,
  Restorative: Sparkles,
  "Comfort & Function": HeartPulse,
  Diagnostics: ScanLine,
  Emergency: Siren,
};

const careSteps = [
  {
    number: "01",
    title: "Listen first",
    text: "We start with what you are feeling, what you have noticed, and what you want from your smile. No assumptions, no rushing.",
  },
  {
    number: "02",
    title: "See the whole picture",
    text: "Digital X-rays, an intra-oral camera, and a careful exam help us understand the cause — not just the symptom.",
  },
  {
    number: "03",
    title: "Plan it together",
    text: "You leave with clear options, honest recommendations, and a treatment plan that fits your life and your budget.",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={
          <>
            Care for every stage of{" "}
            <span className="display-italic text-clay">your smile.</span>
          </>
        }
        description="Preventive care, restorative work, and comfort-focused treatment — all under one roof, and all planned around you. Explore the treatments our Jamestown team provides."
        crumbs={[{ label: "Treatments" }]}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact-us/appointment-request">
                Request an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={practice.phoneHref}>
                <Phone className="h-4 w-4" />
                {practice.phone}
              </a>
            </Button>
          </>
        }
        media={
          <div className="relative mx-auto w-full max-w-[26rem]">
            <div className="arch relative aspect-[4/5] overflow-hidden border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src="/images/intra-oral-camera.jpg"
                alt="A Downtown Dental dentist using an intra-oral camera during an exam"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -left-4 bottom-14 rounded-2xl px-4 py-3 sm:-left-7">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                One practice
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                {treatments.length} treatment guides
              </p>
            </div>
            <div className="absolute -right-3 top-10 rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-soft">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                Same day
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                CEREC crowns
              </p>
            </div>
          </div>
        }
      />

      <section className="border-b border-ink/10 bg-cream-2/45">
        <div className="container-page grid gap-px sm:grid-cols-2 lg:grid-cols-5">
          {treatmentCategories.map((category) => {
            const Icon = categoryIcons[category.label];
            const count = treatments.filter(
              (treatment) => treatment.category === category.label,
            ).length;

            return (
              <div
                key={category.label}
                className="flex items-start gap-3.5 py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink">
                    {category.label}
                    <span className="ml-2 font-normal text-ink/68">
                      {String(count).padStart(2, "0")}
                    </span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/68">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="The full menu"
                title={
                  <>
                    Find the care
                    <br />
                    <span className="display-italic text-clay">
                      you need.
                    </span>
                  </>
                }
              />
              <p className="max-w-sm text-sm leading-relaxed text-ink/68">
                Not sure where to start? That is what we are here for. Browse
                by category, or call the office and we will point you in the
                right direction.
              </p>
            </div>
          </Reveal>

          <div className="mt-12">
            <TreatmentGrid />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/55 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2.5rem] bg-ink p-7 text-cream sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full border border-cream/10"
              />
              <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-5">
                  <Badge
                    tone="ink"
                    className="border-cream/15 bg-white/5 text-sage"
                  >
                    How we work
                  </Badge>
                  <h2 className="display mt-6 text-balance text-[clamp(2.4rem,4.4vw,4.1rem)] text-cream">
                    Good dentistry starts with a{" "}
                    <span className="display-italic text-sage">
                      good conversation.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/60">
                    Every treatment begins the same way: with time to talk,
                    look closely, and explain what we find in plain language.
                  </p>
                  <Link
                    href="/patient/first-visit"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sage transition-colors hover:text-cream"
                  >
                    What to expect at your first visit
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-px overflow-hidden rounded-2xl border border-cream/12 sm:grid-cols-1">
                    {careSteps.map((step) => (
                      <div
                        key={step.number}
                        className="flex gap-5 border-b border-cream/10 bg-white/[0.03] p-6 last:border-b-0 sm:p-7"
                      >
                        <span className="font-display text-sm text-sage/70">
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.02em] text-cream">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-cream/55">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Not sure which treatment is right?"
        description="Tell us what is bothering you, or simply come in for a checkup. We will help you understand the options and choose what feels right."
      />
    </>
  );
}
