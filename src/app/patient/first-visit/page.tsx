import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  Clock,
  Phone,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContentBlocks } from "@/components/content-blocks";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { careSteps, firstVisit } from "@/data/pages";

export const metadata: Metadata = {
  title: "Your First Visit",
  description:
    "What to expect at your first visit to Downtown Dental in Jamestown, North Dakota — paperwork, a one-hour exam, X-rays, a cleaning, and a clear treatment plan.",
  alternates: {
    canonical: "/patient/first-visit",
  },
};

const visitFacts = [
  {
    icon: Clock,
    title: "About one hour",
    text: "Your initial exam is unhurried, with time to talk and ask questions.",
  },
  {
    icon: ScanLine,
    title: "X-rays, generally",
    text: "So your doctor can examine jaw structure, tooth position, and decay.",
  },
  {
    icon: Sparkles,
    title: "A cleaning, in most cases",
    text: "Along with practical oral hygiene instructions for home.",
  },
  {
    icon: ClipboardList,
    title: "A written plan",
    text: "An evaluation outlining any existing problems and proposed treatment.",
  },
];

export default function FirstVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Your first visit"
        title={
          <>
            Come as you are.
            <br />
            <span className="display-italic text-clay">
              We will take it from there.
            </span>
          </>
        }
        description="Your first appointment is a conversation as much as a checkup. Here is exactly what to expect, so you can walk in feeling at ease."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "First Visit" },
        ]}
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
          <div className="relative mx-auto w-full max-w-[27rem]">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src="/images/patient-sunglasses.jpg"
                alt="A Downtown Dental patient relaxing in the dental chair"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <div className="absolute left-5 top-5">
                <Badge tone="cream" className="bg-cream/90 backdrop-blur">
                  New patients welcome
                </Badge>
              </div>
            </div>
            <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-5 py-4 sm:-left-6">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                Your first exam
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                Approximately one hour
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Step by step</p>
              <h2 className="display text-balance text-[clamp(2.5rem,4.6vw,4.2rem)] text-ink">
                What happens at{" "}
                <span className="display-italic text-clay">
                  your first appointment.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/68">
                We have designed the first visit to be comfortable and
                informative — never rushed, and never a mystery.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="relative flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white/55 p-6">
                  <span className="font-display text-[2.6rem] leading-none text-clay/60">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-[1.35rem] leading-snug tracking-[-0.018em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/68">
                    {step.text}
                  </p>
                  {index < careSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 hidden h-px w-6 bg-ink/15 lg:block"
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">In your own words</p>
              <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] text-ink">
                A visit built around{" "}
                <span className="display-italic text-clay">understanding.</span>
              </h2>
              <div className="prose-editorial mt-8 text-[1.02rem]">
                <ContentBlocks blocks={firstVisit} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  The short version
                </p>
                <ul className="mt-5 space-y-5">
                  {visitFacts.map((fact) => (
                    <li key={fact.title} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-light text-pine">
                        <fact.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          {fact.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-ink/68">
                          {fact.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-ink/10 pt-5">
                  <p className="flex items-start gap-2 text-xs leading-relaxed text-ink/68">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay" />
                    Please bring your insurance and health information so we
                    can begin your dental treatment.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-pine/15 bg-sage-light/45 p-6">
                <p className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-pine">
                  Prefer to fill out forms beforehand?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/68">
                  Share your email address with our team and we can send the
                  paperwork over before your visit.
                </p>
                <a
                  href={practice.emailHref}
                  className="link-underline mt-4 inline-flex text-sm font-semibold text-pine"
                >
                  Email the office
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Your first visit starts here."
        description="Tell us a little about yourself and we will follow up to schedule. If you have questions before then, just call."
      />
    </>
  );
}
