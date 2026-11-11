import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Globe2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { relatedLinks } from "@/data/pages";

export const metadata: Metadata = {
  title: "Related Links",
  description:
    "Trusted dental resources recommended by Downtown Dental in Jamestown, ND — the ADA, AGD, AAID, AACD, CareCredit, and more.",
  alternates: {
    canonical: "/general-info/related-links",
  },
};

export default function RelatedLinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Related links"
        title={
          <>
            Trusted places to{" "}
            <span className="display-italic text-clay">learn more.</span>
          </>
        }
        description="Dental organizations and resources we trust for reliable, up-to-date oral health information. These links open in a new tab."
        crumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Related Links" },
        ]}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/resources">
                Explore our resources
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
          <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-white/65 p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <Badge tone="sage">Professional resources</Badge>
              <Globe2 className="h-5 w-5 text-clay" />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/ada-logo.png"
                alt="American Dental Association logo"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <div>
                <p className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink">
                  The American Dental Association
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink/68">
                  A trusted source for oral health information.
                </p>
              </div>
            </div>
            <p className="mt-6 border-t border-ink/10 pt-4 text-xs leading-relaxed text-ink/68">
              These organizations are independent of Downtown Dental. We share
              them because they are useful, not because they endorse us.
            </p>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Go straight to the source</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                Dental care,{" "}
                <span className="display-italic text-clay">
                  well explained.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/68">
                Whether you are researching a treatment, looking for a second
                perspective, or just curious about your oral health, these
                organizations are a good place to start.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link, index) => (
              <Reveal key={link.name} delay={(index % 3) * 0.05}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card-hover group flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white/55 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 min-w-12 items-center justify-center rounded-full bg-sage-light px-3 font-display text-sm text-pine">
                      {link.short}
                    </span>
                    <ExternalLink className="h-4 w-4 text-ink/68 transition-colors group-hover:text-clay" />
                  </div>
                  <h3 className="mt-6 font-display text-[1.45rem] leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-pine">
                    {link.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/68">
                    {link.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-pine">
                    Visit website
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-[1.75rem] border border-ink/10 bg-cream-2/55 p-6">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <p className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-ink">
                    Prefer plain-language definitions?
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/68">
                    Our glossary explains common dental terms without the
                    jargon.
                  </p>
                  <Link
                    href="/general-info/glossary"
                    className="link-underline mt-3 inline-flex text-sm font-semibold text-pine"
                  >
                    Open the glossary
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.75rem] border border-ink/10 bg-cream-2/55 p-6">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <p className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-ink">
                    Still have a question?
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/68">
                    Our team is happy to point you toward a trustworthy answer —
                    or take a look for you.
                  </p>
                  <Link
                    href="/contact-us/contact-us"
                    className="link-underline mt-3 inline-flex text-sm font-semibold text-pine"
                  >
                    Contact the office
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Reading is good. A checkup is better."
        description="If something you read has you wondering about your own smile, come in and let us take a look."
      />
    </>
  );
}
