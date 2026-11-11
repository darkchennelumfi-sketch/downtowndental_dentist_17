import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CreditCard,
  ExternalLink,
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
import { faq } from "@/data/pages";

export const metadata: Metadata = {
  title: "Payment Plans",
  description:
    "Payment plans at Downtown Dental in Jamestown, ND. Explore Cherry and CareCredit financing, insurance, and secure online bill pay.",
  alternates: {
    canonical: "/contact-us/contact-us-copy-1",
  },
};

const paymentQuestion = faq.find((item) =>
  item.question.toLowerCase().includes("payment plans"),
);

export default function PaymentPlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment plans"
        title={
          <>
            A plan that fits{" "}
            <span className="display-italic text-clay">your life.</span>
          </>
        }
        description="Dental care is an investment, and the cost should never feel like a surprise. Explore flexible financing and payment options before you begin treatment."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "Payment Plans" },
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
          <div className="relative mx-auto w-full max-w-[25rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <Badge tone="cream">Flexible options</Badge>
              <CreditCard className="h-5 w-5 text-clay" />
            </div>
            <p className="mt-5 font-display text-[1.9rem] leading-[1.06] tracking-[-0.03em] text-ink">
              Care now.
              <br />
              <span className="display-italic text-clay-deep">
                Payments that make sense.
              </span>
            </p>
            <div className="mt-6 space-y-3 border-t border-ink/10 pt-5">
              {["Cherry", "CareCredit", "Insurance claims", "Online bill pay"].map(
                (item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-ink/68"
                  >
                    <Check className="h-4 w-4 text-pine" />
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Financing, explained</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                Choose the option that{" "}
                <span className="display-italic text-clay">
                  feels manageable.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/68">
                Our team will review the cost of your treatment plan before
                anything begins. If you would like to spread payments out, these
                outside financing partners are a good place to start.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card-hover flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white/65 p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-pine">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <Badge tone="sage">Payment plans</Badge>
                </div>
                <h3 className="mt-7 font-display text-[2.3rem] leading-none tracking-[-0.03em] text-ink">
                  Cherry
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/68">
                  Apply for a Cherry payment plan from the comfort of home.
                  Cherry offers a simple way to break up the cost of larger
                  treatment plans into more manageable payments.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Apply online in a few minutes.",
                    "Get a decision without leaving the house.",
                    "Use it for treatment plans that fit your budget.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink/68"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <Button asChild size="md">
                    <a
                      href={practice.cherry}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apply with Cherry
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="md">
                    <a
                      href={practice.cherryInfo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      How Cherry works
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card-hover flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white/65 p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-light text-ink-2">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <Image
                    src="/images/carecredit-logo.png"
                    alt="CareCredit logo"
                    width={110}
                    height={34}
                    className="h-7 w-auto opacity-70"
                  />
                </div>
                <h3 className="mt-7 font-display text-[2.3rem] leading-none tracking-[-0.03em] text-ink">
                  CareCredit
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/68">
                  CareCredit is a healthcare payment plan for treatments and
                  procedures your insurance does not cover. It is a familiar,
                  widely accepted option for dental care.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Designed for healthcare expenses.",
                    "Apply online through CareCredit.",
                    "Ask our team how it works with your plan.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink/68"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button asChild size="md">
                    <a
                      href={practice.careCredit}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore CareCredit
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-[1.75rem] border border-ink/10 bg-cream-2/60 p-6">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <p className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-ink">
                    Use your dental insurance
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/68">
                    We submit all insurance claims for you and will fully
                    attempt to help you receive your benefits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.75rem] border border-ink/10 bg-cream-2/60 p-6">
                <ReceiptText className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <p className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-ink">
                    Know the cost first
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/68">
                    Your treatment plan includes a breakdown of applicable fees
                    before treatment is administered.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-5">Simple and secure</p>
            <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)] text-ink">
              Pay your bill{" "}
              <span className="display-italic text-clay">online.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-ink/68">
              Make a payment through our secure online portal whenever it is
              convenient for you. If something on your statement does not look
              right, call the office and we will sort it out together.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={practice.payOnline} target="_blank" rel="noreferrer">
                  Pay online
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={practice.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {practice.phone}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-7">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                We accept
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "Cash",
                  "Checks",
                  "Visa",
                  "MasterCard",
                  "Discover",
                  "American Express",
                  "Debit cards",
                  "Health savings cards",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink/68"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-pine" />
                    {item}
                  </li>
                ))}
              </ul>
              {paymentQuestion ? (
                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                    Common question
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-snug text-ink">
                    {paymentQuestion.question}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/68">
                    {paymentQuestion.answer}
                  </p>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Let's talk through the numbers."
        description="We will review your treatment plan and payment options before anything begins. No pressure, no surprises."
      />
    </>
  );
}
