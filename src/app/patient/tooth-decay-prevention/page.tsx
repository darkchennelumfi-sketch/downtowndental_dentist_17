import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { EditorialSections } from "@/components/editorial-sections";
import { ArticleCards } from "@/components/article-cards";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { toothDecay, toothDecayArticles } from "@/data/pages";

export const metadata: Metadata = {
  title: "Tooth Decay Prevention",
  description:
    "Understand how tooth decay starts and what you can do to prevent it. Practical prevention guidance from Downtown Dental in Jamestown, North Dakota.",
  alternates: {
    canonical: "/patient/tooth-decay-prevention",
  },
};

const preventionSteps = [
  "Brush and floss consistently to remove plaque.",
  "Get adequate fluoride from toothpaste and professional care.",
  "Limit acidic foods and sugary drinks between meals.",
  "Ask about sealants for back teeth that trap food.",
  "Keep regular cleaning and checkup appointments.",
];

const preventionArticles = toothDecayArticles.map((article) => ({
  title: article.title,
  href: article.href,
  excerpt: article.excerpt,
  image: "/images/cavity.jpg",
}));

export default function ToothDecayPage() {
  return (
    <>
      <PageHero
        eyebrow="Tooth decay prevention"
        title={
          <>
            Decay is common.
            <br />
            <span className="display-italic text-clay">
              It is not inevitable.
            </span>
          </>
        }
        description="Tooth decay is one of the most prevalent human diseases — but with the right daily habits and regular professional care, you can tip the balance in your favor."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "Tooth Decay Prevention" },
        ]}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact-us/appointment-request">
                Request a checkup
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
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src="/images/cavity.jpg"
                alt="Illustration of tooth decay and a cavity"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <div className="absolute left-5 top-5">
                <Badge tone="cream" className="bg-cream/90 backdrop-blur">
                  Prevention first
                </Badge>
              </div>
            </div>
            <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-5 py-4 sm:-left-6">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                The good news
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink">
                <ShieldCheck className="h-3.5 w-3.5 text-clay" />
                Prevention works
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <EditorialSections sections={toothDecay} />
            </Reveal>

            <div className="mt-16 border-t border-ink/12 pt-10">
              <ArticleCards
                articles={preventionArticles}
                title="Keep reading about decay"
              />
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
                  Everyday prevention
                </Badge>
                <h2 className="mt-4 font-display text-[1.85rem] leading-[1.05] tracking-[-0.025em]">
                  Five habits that help.
                </h2>
                <ul className="mt-5 space-y-3">
                  {preventionSteps.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/65"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      {step}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="light"
                  size="md"
                  className="mt-6 w-full"
                >
                  <Link href="/contact-us/appointment-request">
                    Request an appointment
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-cream-2/55 p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Related care
                </p>
                <ul className="mt-3 space-y-1">
                  {[
                    ["Dental sealants", "/treatment/dental-sealants"],
                    ["Digital X-rays", "/treatment/digital-x-rays"],
                    ["Brushing & flossing", "/patient/brushing-and-flossing"],
                    ["Common problems", "/patient/common-problems"],
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

              <div className="mt-5 flex items-start gap-3 rounded-[1.5rem] border border-pine/15 bg-sage-light/45 p-6">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                <p className="text-sm leading-relaxed text-ink/68">
                  Wondering whether sealants are right for your child? We are
                  glad to talk through it at a checkup.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        title="Let's keep small problems small."
        description="A routine checkup is the simplest way to catch decay early — and to get a plan you understand."
      />
    </>
  );
}
