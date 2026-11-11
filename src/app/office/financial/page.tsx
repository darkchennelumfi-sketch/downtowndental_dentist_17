import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CreditCard,
  Landmark,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { financial } from "@/data/pages";

export const metadata: Metadata = {
  title: "Financial & Insurance",
  description:
    "Downtown Dental financial information: insurance claims, payment options, CareCredit, Cherry financing, and online bill pay for patients in Jamestown, North Dakota.",
  alternates: {
    canonical: "/office/financial",
  },
};

const acceptedPayments = [
  "Cash",
  "Checks",
  "Visa",
  "MasterCard",
  "Discover",
  "American Express",
  "Debit cards",
  "Health savings cards",
];

const financingOptions = [
  {
    icon: CreditCard,
    eyebrow: "Flexible financing",
    title: "CareCredit",
    text: "A healthcare payment plan for treatments and procedures your insurance does not cover. Apply online, then talk with our team about using it for your care.",
    href: practice.careCredit,
    label: "Explore CareCredit",
  },
  {
    icon: Sparkles,
    eyebrow: "Simple payment plans",
    title: "Cherry",
    text: "Apply for a Cherry payment plan from home and get a decision in minutes. It is a straightforward way to spread out the cost of larger treatment plans.",
    href: practice.cherry,
    label: "Explore Cherry",
  },
];

export default function FinancialPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial"
        title={
          <>
            Good care should feel{" "}
            <span className="display-italic text-clay">clear.</span>
          </>
        }
        description="You will always know what treatment costs before it begins. We review every fee, explain your options, and help you find a payment approach that works."
        crumbs={[
          { label: "Office", href: "/office/about-our-doctors" },
          { label: "Financial" },
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
          <div className="relative mx-auto w-full max-w-[25rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 p-7 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <Badge tone="cream">Accepted here</Badge>
              <ReceiptText className="h-5 w-5 text-clay" />
            </div>
            <p className="mt-5 font-display text-[1.9rem] leading-[1.05] tracking-[-0.025em] text-ink">
              No surprises at the front desk.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {acceptedPayments.map((payment) => (
                <li
                  key={payment}
                  className="flex items-center gap-2 text-xs font-semibold text-ink/68"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-pine" />
                  {payment}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ink/10 pt-4 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-pine">
              North Dakota Healthy Steps provider
            </p>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">Before treatment begins</p>
              <h2 className="display max-w-3xl text-balance text-[clamp(2.5rem,4.4vw,3.9rem)] text-ink">
                A plan, a price, and{" "}
                <span className="display-italic text-clay">a conversation.</span>
              </h2>
              <div className="prose-editorial mt-8 max-w-3xl text-[1.02rem]">
                {financial.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ReceiptText,
                  title: "Know the cost",
                  text: "Your treatment plan includes a breakdown of all applicable fees.",
                },
                {
                  icon: ShieldCheck,
                  title: "Use your benefits",
                  text: "We submit claims for you and help you make the most of your insurance.",
                },
                {
                  icon: Landmark,
                  title: "Ask us first",
                  text: "Talk with our office manager before treatment about special arrangements.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white/55 p-6">
                    <item.icon className="h-5 w-5 text-clay" />
                    <h3 className="mt-4 font-display text-[1.35rem] leading-tight tracking-[-0.015em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/68">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-cream">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
                />
                <Badge
                  tone="ink"
                  className="border-cream/15 bg-white/5 text-sage"
                >
                  Pay your bill
                </Badge>
                <h2 className="mt-4 font-display text-[1.9rem] leading-[1.05] tracking-[-0.025em]">
                  Online, any time.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  Make a secure payment through our online portal whenever it
                  is convenient for you.
                </p>
                <Button
                  asChild
                  variant="light"
                  size="md"
                  className="mt-6 w-full"
                >
                  <a
                    href={practice.payOnline}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pay online
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-5 border-t border-cream/10 pt-4 text-xs leading-relaxed text-cream/50">
                  Questions about a statement? Call{" "}
                  <a
                    href={practice.phoneHref}
                    className="font-semibold text-cream transition-colors hover:text-sage"
                  >
                    {practice.phone}
                  </a>
                  .
                </p>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-cream-2/55 p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Good to know
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/68">
                  Charges are payable at the time of treatment. If you need a
                  special arrangement, please speak with our office manager
                  before receiving service.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Payment plans</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                Spread out the cost.{" "}
                <span className="display-italic text-clay">
                  Keep the care.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/68">
                For larger treatment plans, outside financing can make the
                numbers easier to manage. Our team can help you compare options
                and decide what fits.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {financingOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 0.06}>
                <div className="card-hover flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white/65 p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-pine">
                      <option.icon className="h-5 w-5" />
                    </span>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink/68">
                      {option.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-6 font-display text-[2rem] leading-none tracking-[-0.03em] text-ink">
                    {option.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/68">
                    {option.text}
                  </p>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.13em] text-pine transition-colors hover:text-clay"
                  >
                    {option.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="mt-5 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-ink/10 bg-white/55 p-7 sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-start gap-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <p className="font-display text-[1.4rem] leading-tight tracking-[-0.02em] text-ink">
                    Have dental insurance?
                  </p>
                  <p className="mt-1 text-sm text-ink/68">
                    We will submit your claims for you and help you understand
                    your benefits.
                  </p>
                </div>
              </div>
              <a
                href={practice.careCredit}
                target="_blank"
                rel="noreferrer"
                className="shrink-0"
                aria-label="Visit CareCredit"
              >
                <Image
                  src="/images/carecredit-logo.png"
                  alt="CareCredit logo"
                  width={130}
                  height={40}
                  className="h-9 w-auto opacity-70 transition-opacity hover:opacity-100"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Let's make a plan that works."
        description="Bring your insurance card and your questions. We will walk through the numbers together before any treatment begins."
      />
    </>
  );
}
