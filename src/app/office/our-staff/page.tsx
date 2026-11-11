import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Quote, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { GalleryMarquee } from "@/components/gallery-marquee";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice, teamGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the business team, hygienists, and dental assistants who make every visit to Downtown Dental in Jamestown, North Dakota, feel personal.",
  alternates: {
    canonical: "/office/our-staff",
  },
};

export default function OurStaffPage() {
  const totalTeam = teamGroups.reduce(
    (total, group) => total + group.members.length,
    0,
  );

  return (
    <>
      <PageHero
        eyebrow="Our staff"
        title={
          <>
            The people who make it{" "}
            <span className="display-italic text-clay">feel easy.</span>
          </>
        }
        description="From your first phone call to the moment you settle into the chair, a whole team is looking out for you. These are the friendly faces behind Downtown Dental."
        crumbs={[
          { label: "Office", href: "/office/about-our-doctors" },
          { label: "Our Staff" },
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
          <div className="relative mx-auto w-full max-w-[30rem]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src="/images/team-2026.jpg"
                alt="The full Downtown Dental team gathered together in the office"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <Badge tone="cream" className="bg-cream/90 backdrop-blur">
                  Jamestown, North Dakota
                </Badge>
              </div>
            </div>
            <div className="glass absolute -right-3 -top-5 rounded-2xl px-4 py-3 sm:-right-6">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                One team
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink">
                <Sparkles className="h-3.5 w-3.5 text-clay" />
                {totalTeam + 4} people, one practice
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">More than a team</p>
            <h2 className="display text-balance text-[clamp(2.6rem,4.8vw,4.3rem)] text-ink">
              The kind of people who{" "}
              <span className="display-italic text-clay">remember you.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-4">
            <div className="space-y-4 text-pretty text-[1.03rem] leading-relaxed text-ink/68">
              <p>
                We know that our office is only as effective and as welcoming as
                the people who work in it, which is why we take pride in our
                friendly and well-trained team members. We put your needs first
                to achieve efficient and comprehensive treatment in a supportive
                and nurturing environment. We promise to speak candidly with you
                about possible treatments as well as any risks and associated
                costs of treatment, and how treatment can address your
                individual needs.
              </p>
              <p>
                Our staff is uniquely trained and highly skilled, and we strive
                to provide unparalleled service to each patient. Our staff
                consists of team members with specialized training and
                certifications, and years of experience in treating patients
                with the highest level of care. We strive to stay abreast of the
                very latest in technology and advances by regularly attending
                continuing education courses and seminars.
              </p>
              <p>
                To experience the difference that only a well-trained,
                professional and courteous team can deliver, schedule your
                appointment with our office today.
              </p>
            </div>
            <Quote className="mt-7 h-6 w-6 text-clay/40" />
            <p className="mt-2 font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-pine">
              “It is our mission to provide exceptional dental care and
              education to our patients in a friendly environment.”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-28">
        <div className="container-page space-y-16 lg:space-y-24">
          {teamGroups.map((group, index) => {
            const reverse = index % 2 === 1;

            return (
              <Reveal key={group.title}>
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={
                      reverse
                        ? "lg:col-span-5 lg:order-2"
                        : "lg:col-span-5"
                    }
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream shadow-soft">
                      <Image
                        src={group.image}
                        alt={group.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 38vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div
                    className={
                      reverse
                        ? "lg:col-span-7 lg:order-1"
                        : "lg:col-span-7"
                    }
                  >
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-pine">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {teamGroups.length.toString().padStart(2, "0")}
                    </p>
                    <h2 className="display mt-3 text-[clamp(2.2rem,4vw,3.4rem)] text-ink">
                      {group.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-ink/68">
                      {group.description}
                    </p>

                    <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {group.members.map((member, memberIndex) => (
                        <li
                          key={`${group.title}-${member.name}-${memberIndex}`}
                          className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-2.5"
                        >
                          <span className="font-display text-[1.3rem] tracking-[-0.015em] text-ink">
                            {member.name}
                          </span>
                          <span className="text-right text-[0.65rem] font-bold uppercase tracking-[0.09em] text-ink/68">
                            {member.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Behind the scenes</p>
            <h2 className="display text-[clamp(2.3rem,4.2vw,3.6rem)] text-ink">
              A little{" "}
              <span className="display-italic text-clay">personality.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/68">
            A practice is made of people, not just rooms and equipment. Here is
            a glimpse of ours.
          </p>
        </div>
        <GalleryMarquee />
      </section>

      <CTABand
        title="We would love to welcome you."
        description="Come meet the team in person. We are happy to answer questions before your first visit — no pressure, just a conversation."
      />
    </>
  );
}
