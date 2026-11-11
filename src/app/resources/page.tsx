import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brush,
  CreditCard,
  ExternalLink,
  HeartPulse,
  HelpCircle,
  Phone,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { faq } from "@/data/pages";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Patient resources from Downtown Dental in Jamestown, ND — dental FAQ, common problems, emergencies, brushing and flossing, tooth decay prevention, glossary, and payment plans.",
  alternates: {
    canonical: "/resources",
  },
};

const resources = [
  {
    icon: HelpCircle,
    title: "Frequently asked questions",
    text: "Quick answers about visits, brushing, flossing, toothpaste, and payment.",
    href: "/patient/faq",
    label: "Read the FAQ",
  },
  {
    icon: ScanSearch,
    title: "Common dental problems",
    text: "Plain-language starting points for tooth decay, sensitivity, gum disease, and more.",
    href: "/patient/common-problems",
    label: "Browse common problems",
  },
  {
    icon: ShieldAlert,
    title: "Dental emergencies",
    text: "What to do — and who to call — when something needs attention right away.",
    href: "/patient/emergencies",
    label: "Emergency guidance",
  },
  {
    icon: Brush,
    title: "Brushing & flossing",
    text: "Technique, timing, and the everyday habits that protect your smile.",
    href: "/patient/brushing-and-flossing",
    label: "Build your routine",
  },
  {
    icon: Sparkles,
    title: "Tooth decay prevention",
    text: "How decay starts, what makes it worse, and the practical steps that help.",
    href: "/patient/tooth-decay-prevention",
    label: "Prevent decay",
  },
  {
    icon: BookOpen,
    title: "Dental glossary",
    text: "Searchable definitions for the dental terms you may hear at your visit.",
    href: "/general-info/glossary",
    label: "Open the glossary",
  },
  {
    icon: Stethoscope,
    title: "Related links",
    text: "Trusted professional organizations and independent dental resources.",
    href: "/general-info/related-links",
    label: "See trusted links",
  },
  {
    icon: CreditCard,
    title: "Payment plans",
    text: "CareCredit, Cherry, insurance, and online payment options.",
    href: "/contact-us/contact-us-copy-1",
    label: "Explore payment options",
  },
];

export default function ResourcesPage() {
  const popularQuestions = faq.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Patient resources"
        title={
          <>
            A little library for{" "}
            <span className="display-italic text-clay">your smile.</span>
          </>
        }
        description="Everything we would hand you at the front desk, gathered in one place — clear answers, practical guides, and trusted links."
        crumbs={[{ label: "Resources" }]}
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
          <div className="relative mx-auto w-full max-w-[28rem]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src="/images/branding-4.jpg"
                alt="A bright, welcoming space inside Downtown Dental"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <Badge tone="cream" className="bg-cream/90 backdrop-blur">
                  Read, learn, ask
                </Badge>
              </div>
            </div>
            <div className="glass absolute -right-3 -top-5 rounded-2xl px-4 py-3 sm:-right-6">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                In one place
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                {resources.length} resource guides
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Start here</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                Answers for the questions that{" "}
                <span className="display-italic text-clay">
                  come up at home.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <Reveal key={resource.href} delay={(index % 4) * 0.05}>
                <Link
                  href={resource.href}
                  className={`card-hover group flex h-full min-h-[15rem] flex-col justify-between rounded-[1.75rem] border p-6 ${
                    index === 0
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/10 bg-white/55"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        index === 0
                          ? "border border-cream/15 bg-white/5 text-sage"
                          : "bg-sage-light text-pine"
                      }`}
                    >
                      <resource.icon className="h-4 w-4" />
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        index === 0 ? "text-cream/35" : "text-ink/68"
                      }`}
                    />
                  </div>
                  <div className="mt-8">
                    <h3
                      className={`font-display text-[1.35rem] leading-tight tracking-[-0.02em] ${
                        index === 0 ? "text-cream" : "text-ink"
                      }`}
                    >
                      {resource.title}
                    </h3>
                    <p
                      className={`mt-2 text-xs leading-relaxed ${
                        index === 0 ? "text-cream/55" : "text-ink/68"
                      }`}
                    >
                      {resource.text}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${
                        index === 0 ? "text-sage" : "text-pine"
                      }`}
                    >
                      {resource.label}
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Asked most often</p>
            <h2 className="display text-[clamp(2.3rem,4.2vw,3.6rem)] text-ink">
              Three questions,{" "}
              <span className="display-italic text-clay">answered.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/68">
              These come up again and again — and the answers are simpler than
              you might expect.
            </p>
            <Button asChild variant="outline" size="md" className="mt-6">
              <Link href="/patient/faq">
                Read all questions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {popularQuestions.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.05}>
                  <div className="grid grid-cols-[2rem_1fr] gap-4 py-6">
                    <span className="pt-1 text-[0.68rem] font-bold tracking-[0.12em] text-ink/68">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.3rem] leading-snug tracking-[-0.015em] text-ink">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/68">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <Link
              href="/patient/first-visit"
              className="card-hover group flex h-full flex-col justify-between rounded-[1.75rem] border border-ink/10 bg-white/55 p-7"
            >
              <HeartPulse className="h-5 w-5 text-clay" />
              <div className="mt-8">
                <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink">
                  New here? Start with your first visit.
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-pine">
                  What to expect
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <Link
              href="/treatments"
              className="card-hover group flex h-full flex-col justify-between rounded-[1.75rem] border border-ink/10 bg-white/55 p-7"
            >
              <Stethoscope className="h-5 w-5 text-clay" />
              <div className="mt-8">
                <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink">
                  Explore every treatment we offer.
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-pine">
                  Treatment library
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-ink/10 bg-ink p-7 text-cream">
              <Sparkles className="h-5 w-5 text-sage" />
              <div className="mt-8">
                <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-cream">
                  Can&apos;t find what you need?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/55">
                  Call or email the office and we will help.
                </p>
                <a
                  href={practice.phoneHref}
                  className="link-underline mt-4 inline-flex text-sm font-semibold text-sage"
                >
                  {practice.phone}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Information is a good start."
        description="When you are ready to talk about your own smile, we are here to listen."
      />
    </>
  );
}
