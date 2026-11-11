import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Car,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { MapCard } from "@/components/map-card";
import { ContactDetails } from "@/components/contact-details";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";

export const metadata: Metadata = {
  title: "Map & Directions",
  description:
    "Find Downtown Dental at 815 1st Ave. S., Jamestown, ND 58401. Get directions, office hours, phone, fax, and contact information.",
  alternates: {
    canonical: "/office/map-and-directions",
  },
};

const arrivalSteps = [
  {
    icon: Car,
    title: "Find us downtown",
    text: "We are on 1st Avenue South in Jamestown, close to the heart of downtown. Use the directions link below for turn-by-turn navigation.",
  },
  {
    icon: CalendarCheck,
    title: "Check in at the front desk",
    text: "Our business team will greet you and help with any insurance or health information forms before your appointment begins.",
  },
  {
    icon: Clock,
    title: "Arrive a few minutes early",
    text: "A little extra time makes the first visit calmer. If you are running late, give us a call and we will do our best to help.",
  },
];

export default function MapPage() {
  return (
    <>
      <PageHero
        eyebrow="Map & directions"
        title={
          <>
            Right where
            <br />
            <span className="display-italic text-clay">you need us.</span>
          </>
        }
        description="Find us at 815 1st Avenue South in Jamestown, North Dakota. Call ahead if you need help finding the office — we are always glad to guide you."
        crumbs={[
          { label: "Office", href: "/office/about-our-doctors" },
          { label: "Map & Directions" },
        ]}
        actions={
          <>
            <Button asChild size="lg">
              <a href={practice.directions} target="_blank" rel="noreferrer">
                Get directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
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
          <div className="relative mx-auto w-full max-w-[25rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-8 text-cream shadow-soft">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
            />
            <Badge tone="ink" className="border-cream/15 bg-white/5 text-sage">
              Our address
            </Badge>
            <p className="mt-5 font-display text-[2.1rem] leading-[1.05] tracking-[-0.03em]">
              815 1st Ave. S.
            </p>
            <p className="mt-1 font-display text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-sage">
              Jamestown, ND 58401
            </p>
            <div className="mt-7 space-y-3 border-t border-cream/10 pt-5 text-sm">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-cream transition-colors hover:text-sage"
              >
                <Phone className="h-4 w-4 text-sage" />
                {practice.phone}
              </a>
              <p className="flex items-start gap-2.5 text-cream/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {practice.shortHours}
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <MapCard />
            </Reveal>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Button asChild size="md">
                <a href={practice.directions} target="_blank" rel="noreferrer">
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </Button>
              <p className="text-xs leading-relaxed text-ink/68">
                Maps open in a new tab.
              </p>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-[2rem] border border-ink/10 bg-white/55 p-7 sm:p-8">
              <p className="eyebrow mb-5">Contact the office</p>
              <ContactDetails />
              <div className="mt-7 flex flex-wrap gap-3 border-t border-ink/10 pt-6">
                <Button asChild size="md">
                  <Link href="/contact-us/appointment-request">
                    Request a visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/contact-us/contact-us">Contact page</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">When you arrive</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                A warm welcome,{" "}
                <span className="display-italic text-clay">
                  right from the door.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {arrivalSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-ink/10 bg-white/60 p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-pine">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-ink/68">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.55rem] leading-tight tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/68">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="We are easy to reach."
        description="Call the office for directions, parking questions, or anything else that would make your visit easier."
      />
    </>
  );
}
