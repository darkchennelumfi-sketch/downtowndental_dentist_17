import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Glossary } from "@/components/glossary";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { glossary } from "@/data/pages";

export const metadata: Metadata = {
  title: "Dental Glossary",
  description:
    "A plain-language glossary of dental terms from Downtown Dental in Jamestown, ND. Search or browse definitions for common dental words and procedures.",
  alternates: {
    canonical: "/general-info/glossary",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Glossary"
        title={
          <>
            Dental words,{" "}
            <span className="display-italic text-clay">
              made understandable.
            </span>
          </>
        }
        description="A clear explanation is part of good care. Search for a term or browse by letter — no jargon required."
        crumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Glossary" },
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
          <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-sage-light/50 p-8">
            <Badge tone="sage">
              <BookOpen className="h-3 w-3" />
              {glossary.length} terms
            </Badge>
            <p className="mt-5 font-display text-[1.8rem] leading-[1.06] tracking-[-0.025em] text-ink">
              If we use a word you do not know, ask.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/68">
              You deserve to understand your diagnosis and your options. This
              glossary is a start — and our team is always glad to explain
              further.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-pine">
              <Sparkles className="h-3.5 w-3.5" />
              Search, browse, or just explore
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Glossary />
        </div>
      </section>

      <CTABand
        title="A question we did not define?"
        description="Reach out and ask. We would rather explain something twice than have you leave unsure."
      />
    </>
  );
}
