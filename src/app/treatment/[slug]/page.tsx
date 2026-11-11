import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContentBlocks } from "@/components/content-blocks";
import { EditorialSections } from "@/components/editorial-sections";
import { ArticleCards } from "@/components/article-cards";
import { VisitSidebar } from "@/components/visit-sidebar";
import { TreatmentCard } from "@/components/treatment-card";
import { CTABand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import {
  getTreatment,
  relatedTreatments,
  treatments,
} from "@/data/treatments";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {
      title: "Treatment not found",
    };
  }

  return {
    title: treatment.title,
    description: treatment.description,
    alternates: {
      canonical: `/treatment/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.title} | Downtown Dental`,
      description: treatment.description,
      url: `/treatment/${treatment.slug}`,
      images: [
        {
          url: treatment.image,
          alt: treatment.imageAlt,
        },
      ],
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  const related = relatedTreatments(treatment, 3);

  return (
    <>
      <PageHero
        eyebrow={treatment.category}
        title={treatment.title}
        description={treatment.teaser}
        crumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: treatment.shortTitle },
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
          <div className="relative mx-auto w-full max-w-[27rem]">
            <div className="relative aspect-[4/3.6] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src={treatment.image}
                alt={treatment.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <div className="absolute left-5 top-5">
                <Badge tone="cream" className="bg-cream/90 backdrop-blur">
                  {treatment.category}
                </Badge>
              </div>
            </div>

            <div className="glass absolute -bottom-6 -left-3 right-10 rounded-2xl px-5 py-4 sm:-left-6 sm:right-auto sm:max-w-[19rem]">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                Included in your visit
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {treatment.highlights.slice(0, 2).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-xs leading-snug text-ink/68"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-clay" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-sage/30 blur-2xl"
            />
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="prose-editorial text-[1.08rem] leading-[1.8]">
                <ContentBlocks blocks={treatment.intro} />
              </div>
            </Reveal>

            <div className="mt-14">
              <EditorialSections sections={treatment.sections} />
            </div>

            {treatment.articles.length > 0 ? (
              <div className="mt-16 border-t border-ink/12 pt-10">
                <ArticleCards articles={treatment.articles} />
              </div>
            ) : null}
          </div>

          <VisitSidebar
            className="lg:col-span-4"
            highlights={treatment.highlights}
            related={related}
            title={`Ask us about ${treatment.shortTitle.toLowerCase()}.`}
            description="Have a question about this treatment, or ready to schedule? Our team is glad to help."
          />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream-2/45 py-20 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Keep exploring"
              title={
                <>
                  Related{" "}
                  <span className="display-italic text-clay">care.</span>
                </>
              }
            />
            <Link
              href="/treatments"
              className="link-underline shrink-0 text-sm font-semibold text-pine"
            >
              All treatments
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <TreatmentCard treatment={item} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Ready to talk about ${treatment.shortTitle.toLowerCase()}?`}
        description="Request an appointment and we will follow up to find a time that works. New patients are always welcome."
      />
    </>
  );
}
