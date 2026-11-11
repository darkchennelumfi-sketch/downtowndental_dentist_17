import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Lock, Mail, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { PrivacyContent } from "@/components/privacy-content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { privacySections } from "@/data/pages";
import { slugifyHeading } from "@/components/editorial-sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Notice of privacy practices for Downtown Dental in Jamestown, North Dakota — how protected health information may be used and disclosed, and your rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const intro = privacySections.find((section) => section.heading === null);
  const sections = privacySections.filter(
    (section) => section.heading !== null,
  );
  const effectiveDate = intro?.blocks.find((block) => block.type === "p");
  const introBlocks =
    intro?.blocks.filter(
      (block, index) =>
        !(index === 0 && block.type === "p" && block.text.startsWith("Effective")),
    ) ?? [];

  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title={
          <>
            Your privacy,{" "}
            <span className="display-italic text-clay">protected.</span>
          </>
        }
        description="This notice describes how medical information about you may be used and disclosed, and how you can get access to this information. Please review it carefully."
        crumbs={[{ label: "Privacy Policy" }]}
        actions={
          <>
            <Button asChild size="lg">
              <a href={practice.phoneHref}>
                <Phone className="h-4 w-4" />
                Questions? Call us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact-us/contact-us">
                Contact the office
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        }
        media={
          <div className="relative mx-auto w-full max-w-[23rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-sage-light/50 p-8">
            <Badge tone="sage">
              <Lock className="h-3 w-3" />
              Notice of privacy practices
            </Badge>
            <p className="mt-5 font-display text-[1.8rem] leading-[1.06] tracking-[-0.025em] text-ink">
              Your health information belongs to you.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/68">
              We are committed to protecting the privacy of your protected
              health information and to explaining how it may be used.
            </p>
            <p className="mt-6 border-t border-ink/10 pt-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-pine">
              {effectiveDate?.type === "p"
                ? effectiveDate.text
                : "Effective April 14, 2003"}
            </p>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {intro ? (
              <Reveal>
                <div className="prose-editorial mb-12 text-[1.02rem]">
                  <PrivacyContent blocks={introBlocks} />
                </div>
              </Reveal>
            ) : null}

            <div className="space-y-10">
              {sections.map((section, index) => {
                const heading = section.heading as string;

                return (
                  <Reveal key={heading}>
                    <section
                      id={slugifyHeading(heading)}
                      className="scroll-mt-28 border-t border-ink/12 pt-8"
                    >
                      <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
                        <span className="pt-1 font-display text-sm text-clay-deep">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h2 className="font-display text-[clamp(1.7rem,2.6vw,2.25rem)] leading-[1.08] tracking-[-0.025em] text-ink">
                            {heading}
                          </h2>
                          <div className="prose-editorial mt-5">
                            <PrivacyContent blocks={section.blocks} />
                          </div>
                        </div>
                      </div>
                    </section>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <div className="mt-12 rounded-[1.75rem] border border-pine/15 bg-sage-light/45 p-7">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-pine" />
                  <div>
                    <p className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-pine">
                      Questions about your privacy rights?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/68">
                      Contact our Privacy Officer at the office. We are glad to
                      explain how your information is handled or help you submit
                      a request in writing.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <a
                        href={practice.phoneHref}
                        className="flex items-center gap-2 font-semibold text-pine"
                      >
                        <Phone className="h-4 w-4" />
                        {practice.phone}
                      </a>
                      <a
                        href={practice.emailHref}
                        className="flex items-center gap-2 break-all text-pine"
                      >
                        <Mail className="h-4 w-4 shrink-0" />
                        {practice.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-ink/10 bg-cream-2/55 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  On this page
                </p>
                <nav aria-label="Privacy policy sections">
                  <ul className="mt-4 space-y-1">
                    {sections.map((section) => (
                      <li key={section.heading}>
                        <a
                          href={`#${slugifyHeading(section.heading as string)}`}
                          className="block rounded-lg py-1.5 text-sm text-ink/68 transition-colors hover:text-clay"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-white/55 p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Our office
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/68">
                  {practice.address.street}
                  <br />
                  {practice.address.city}, {practice.address.state}{" "}
                  {practice.address.zip}
                </p>
                <p className="mt-2 text-xs text-ink/68">{practice.shortHours}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        title="We are here to answer questions."
        description="If anything in this notice is unclear, call the office and ask for our Privacy Officer."
      />
    </>
  );
}
