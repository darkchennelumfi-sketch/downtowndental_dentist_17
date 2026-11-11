import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarClock, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContentBlocks } from "@/components/content-blocks";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { officePolicies } from "@/data/pages";
import { slugifyHeading } from "@/components/editorial-sections";

export const metadata: Metadata = {
  title: "Office Policies",
  description:
    "Downtown Dental office policies: our mission, office hours, appointment scheduling, and insurance information for patients in Jamestown, North Dakota.",
  alternates: {
    canonical: "/office/office-policies",
  },
};

export default function OfficePoliciesPage() {
  const [mission, ...rest] = officePolicies;
  const quickFacts = [
    {
      icon: CalendarClock,
      title: "24-hour notice",
      text: "We request 24 hours' notice if you need to cancel or reschedule.",
    },
    {
      icon: ShieldCheck,
      title: "Insurance help",
      text: "We submit claims for you and help you maximize your benefits.",
    },
    {
      icon: Phone,
      title: "Arrive on time",
      text: "If you are more than 15 minutes late, we may need to reschedule.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Office policies"
        title={
          <>
            Clear policies.
            <br />
            <span className="display-italic text-clay">Calmer visits.</span>
          </>
        }
        description="A few simple agreements help every appointment run smoothly — for you, for the person after you, and for our team. Here is what to know before you come in."
        crumbs={[
          { label: "Office", href: "/office/about-our-doctors" },
          { label: "Office Policies" },
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
          <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-8 text-cream shadow-soft">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
            />
            <Badge tone="ink" className="border-cream/15 bg-white/5 text-sage">
              Good to know
            </Badge>
            <p className="mt-5 font-display text-[1.7rem] leading-tight tracking-[-0.02em]">
              Our mission is simple.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">
              {mission?.blocks[0]?.type === "p"
                ? mission.blocks[0].text
                : "Exceptional dental care and education, delivered in a friendly environment."}
            </p>
            <p className="mt-6 border-t border-cream/10 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-sage">
              {practice.shortHours}
            </p>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {rest.map((section, index) => (
                <Reveal key={section.heading ?? index}>
                  <article
                    id={
                      section.heading
                        ? slugifyHeading(section.heading)
                        : undefined
                    }
                    className="scroll-mt-28 rounded-[2rem] border border-ink/10 bg-white/55 p-7 sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(rest.length).padStart(2, "0")}
                        </p>
                        <h2 className="display mt-3 text-[clamp(1.9rem,3vw,2.6rem)] text-ink">
                          {section.heading}
                        </h2>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/68" />
                    </div>
                    <div className="prose-editorial mt-5 text-[0.98rem]">
                      <ContentBlocks blocks={section.blocks} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-ink/10 bg-cream-2/60 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Quick reference
                </p>
                <div className="mt-6 space-y-6">
                  {quickFacts.map((fact) => (
                    <div key={fact.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/70 text-pine">
                        <fact.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          {fact.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-ink/68">
                          {fact.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[2rem] border border-ink/10 bg-white/55 p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Office hours
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  {practice.hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-ink/8 pb-2 last:border-b-0"
                    >
                      <dt className="text-ink/68">{item.day}</dt>
                      <dd className="font-semibold text-ink">{item.time}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/office/financial"
                  className="link-underline mt-6 inline-flex text-sm font-semibold text-pine"
                >
                  Financial & payment options
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        title="Questions about a policy?"
        description="Call the office or send us a note before your visit. We are always glad to clarify how things work."
      />
    </>
  );
}
