import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { practice } from "@/data/site";
import { faq } from "@/data/pages";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common dental questions from Downtown Dental in Jamestown, North Dakota — visits, toothbrushes, flossing, toothpaste, payment plans, and emergencies.",
  alternates: {
    canonical: "/patient/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title={
          <>
            Answers, before{" "}
            <span className="display-italic text-clay">you ask.</span>
          </>
        }
        description="A few of the questions we hear most often — about routine visits, brushing, flossing, and how payment works. If yours is not here, we are one call away."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "FAQ" },
        ]}
        actions={
          <>
            <Button asChild size="lg">
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
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                {faq.length} common questions
              </p>
              <p className="text-xs text-ink/68">Updated for today&apos;s care</p>
            </div>
            <FAQAccordion defaultOpen="faq-0" />
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-cream">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
                />
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Still wondering?
                </p>
                <h2 className="mt-4 font-display text-[1.85rem] leading-[1.05] tracking-[-0.025em]">
                  Ask us anything.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  There is no such thing as a silly question when it comes to
                  your health. Call or email and we will get you a real answer.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={practice.phoneHref}
                    className="flex items-center gap-2.5 text-sm font-semibold text-cream transition-colors hover:text-sage"
                  >
                    <Phone className="h-4 w-4 text-sage" />
                    {practice.phone}
                  </a>
                  <a
                    href={practice.emailHref}
                    className="flex items-center gap-2.5 break-all text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-sage" />
                    {practice.email}
                  </a>
                </div>
                <Button
                  asChild
                  variant="light"
                  size="md"
                  className="mt-6 w-full"
                >
                  <Link href="/contact-us/contact-us">
                    Contact the office
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-cream-2/55 p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Helpful next steps
                </p>
                <ul className="mt-3 space-y-1">
                  {[
                    ["Your first visit", "/patient/first-visit"],
                    ["Brushing & flossing", "/patient/brushing-and-flossing"],
                    ["Common problems", "/patient/common-problems"],
                    ["Payment plans", "/contact-us/contact-us-copy-1"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group flex items-center justify-between gap-3 rounded-lg py-2 text-sm text-ink/68 transition-colors hover:text-clay"
                      >
                        {label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        title="Have a question we did not answer?"
        description="Send us a note or call the office. A real person from our team will get back to you."
      />
    </>
  );
}
