import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactDetails } from "@/components/contact-details";
import { MapCard } from "@/components/map-card";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Downtown Dental in Jamestown, ND. Call 701-251-2240, email office@downtowndental.biz, or visit 815 1st Ave. S. Office hours and directions inside.",
  alternates: {
    canonical: "/contact-us/contact-us",
  },
};

const reasons = [
  {
    icon: CalendarCheck,
    title: "Schedule a visit",
    text: "Request an appointment online or call and we will find a time that works.",
  },
  {
    icon: ShieldAlert,
    title: "Dental emergency",
    text: "Call the office as soon as you can. During business hours, we will work you in.",
  },
  {
    icon: Mail,
    title: "A general question",
    text: "Email the office and a member of our team will get back to you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s start with{" "}
            <span className="display-italic text-clay">a conversation.</span>
          </>
        }
        description="Whether you are ready to book, have a question about insurance, or just want to know what to expect — we are glad you reached out."
        crumbs={[{ label: "Contact Us" }]}
        actions={
          <>
            <Button asChild size="lg">
              <a href={practice.phoneHref}>
                <Phone className="h-4 w-4" />
                {practice.phone}
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
          <div className="relative mx-auto w-full max-w-[25rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-8 text-cream shadow-soft">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
            />
            <Badge tone="ink" className="border-cream/15 bg-white/5 text-sage">
              Downtown Dental
            </Badge>
            <p className="mt-5 font-display text-[2rem] leading-[1.05] tracking-[-0.03em]">
              You will always reach a real person.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Our business team answers the phones, knows the schedule, and can
              help with insurance questions before you come in.
            </p>
            <div className="mt-6 space-y-3 border-t border-cream/10 pt-5 text-sm">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-cream transition-colors hover:text-sage"
              >
                <Phone className="h-4 w-4 text-sage" />
                {practice.phone}
              </a>
              <a
                href={practice.emailHref}
                className="flex items-center gap-2.5 break-all text-cream/65 transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4 shrink-0 text-sage" />
                {practice.email}
              </a>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="rounded-[2rem] border border-ink/10 bg-white/55 p-7 sm:p-8">
              <p className="eyebrow mb-5">Reach the office</p>
              <ContactDetails />
              <div className="mt-7 flex flex-wrap gap-3 border-t border-ink/10 pt-6">
                <Button asChild size="md">
                  <a href={practice.directions} target="_blank" rel="noreferrer">
                    Get directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <a href={practice.payOnline} target="_blank" rel="noreferrer">
                    Pay online
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <MapCard />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-cream-2/55 px-5 py-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <p className="text-sm leading-relaxed text-ink/68">
                  {practice.address.street}
                  <br />
                  {practice.address.city}, {practice.address.state}{" "}
                  {practice.address.zip}
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-cream-2/55 px-5 py-4">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <p className="text-sm leading-relaxed text-ink/68">
                  {practice.shortHours}
                  <br />
                  After hours: answering service
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">How can we help?</p>
              <h2 className="display text-balance text-[clamp(2.2rem,4.2vw,3.6rem)] text-ink">
                Three good reasons{" "}
                <span className="display-italic text-clay">to call.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-ink/10 bg-white/60 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-pine">
                    <reason.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.45rem] leading-tight tracking-[-0.02em] text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/68">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink/68">
              Please do not use email for urgent dental concerns. Call the office
              so we can respond right away. For a life-threatening emergency,
              call 911.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="The easiest way to start is a phone call."
        description="Or request an appointment online and we will follow up with you. Either way, a friendly voice is on the other end."
      />
    </>
  );
}
