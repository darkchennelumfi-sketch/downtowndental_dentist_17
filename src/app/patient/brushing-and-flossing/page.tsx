import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brush,
  Check,
  Clock,
  Phone,
  Smile,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { EditorialSections } from "@/components/editorial-sections";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { brushingSections } from "@/data/pages";

export const metadata: Metadata = {
  title: "Brushing & Flossing",
  description:
    "A practical guide to brushing and flossing from Downtown Dental in Jamestown, ND — technique, timing, toothpaste, and the daily habits that protect your smile.",
  alternates: {
    canonical: "/patient/brushing-and-flossing",
  },
};

const routine = [
  {
    icon: Clock,
    title: "Four times daily",
    text: "After breakfast, after lunch or school, after dinner, and at bedtime.",
  },
  {
    icon: Brush,
    title: "Soft bristles",
    text: "A small strip of fluoride toothpaste and small, circular motions.",
  },
  {
    icon: Smile,
    title: "Floss every day",
    text: "Reach below the gum line and between every tooth — especially at night.",
  },
  {
    icon: Sparkles,
    title: "Replace worn brushes",
    text: "As soon as the bristles start to wear down or fray, swap in a new one.",
  },
];

export default function BrushingPage() {
  return (
    <>
      <PageHero
        eyebrow="Brushing & flossing"
        title={
          <>
            The everyday habits that{" "}
            <span className="display-italic text-clay">
              protect your smile.
            </span>
          </>
        }
        description="Good at-home care is the cornerstone of a healthy mouth. A few minutes of attention each day prevents unhealthy teeth and costly dental treatments."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "Brushing & Flossing" },
        ]}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact-us/appointment-request">
                Request a cleaning
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
                src="/images/toothbrush-cleaning-teeth.jpg"
                alt="A dental professional helping a child brush their teeth"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <div className="absolute left-5 top-5">
                <Badge tone="cream" className="bg-cream/90 backdrop-blur">
                  Small habits, big difference
                </Badge>
              </div>
            </div>
            <div className="glass absolute -bottom-5 -right-3 rounded-2xl px-5 py-4 sm:-right-6">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                The goal
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                A clean mouth, every day
              </p>
            </div>
          </div>
        }
      />

      <section className="border-b border-ink/10 bg-cream-2/45">
        <div className="container-page grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {routine.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.11em] text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink/68">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow mb-5">Technique, step by step</p>
                <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,3.9rem)] text-ink">
                  Slow down.{" "}
                  <span className="display-italic text-clay">
                    Cover every surface.
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-10">
              <EditorialSections sections={brushingSections} />
            </div>

            <Reveal>
              <div className="mt-12 rounded-[1.75rem] border border-pine/15 bg-sage-light/45 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  A gentle reminder
                </p>
                <p className="mt-3 font-display text-[1.45rem] leading-snug tracking-[-0.02em] text-pine">
                  Bleeding when you first start flossing is common. If it
                  continues after the first few times, let us know at your next
                  appointment.
                </p>
                <Link
                  href="/patient/faq"
                  className="link-underline mt-4 inline-flex text-sm font-semibold text-pine"
                >
                  More oral health questions
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  At a glance
                </p>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Brush slowly and carefully, covering every surface.",
                    "Hold the brush at an angle toward the gum line.",
                    "Brush your tongue and the roof of your mouth.",
                    "Do not swallow toothpaste; rinse thoroughly after.",
                    "Floss between every tooth, including behind the back teeth.",
                    "Floss at night so teeth are clean before bed.",
                  ].map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/68"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-cream-2/55 p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Need a hand?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/68">
                  We are happy to demonstrate brushing or flossing technique at
                  your next visit — no judgment, just helpful coaching.
                </p>
                <Button asChild size="md" className="mt-5 w-full">
                  <Link href="/contact-us/appointment-request">
                    Request a visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        title="A cleaning is a fresh start."
        description="Book a professional cleaning and let our hygienists help you fine-tune the routine that works for your mouth."
      />
    </>
  );
}
