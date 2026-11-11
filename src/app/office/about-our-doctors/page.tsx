import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Ear,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice, doctors } from "@/data/site";

export const metadata: Metadata = {
  title: "About Our Doctors",
  description:
    "Meet Dr. Alissa Hanson, Dr. Whitney Bruins, Dr. Kelly Odden, and Dr. Kali Anderson — four experienced dentists providing thoughtful family dental care in Jamestown, North Dakota.",
  alternates: {
    canonical: "/office/about-our-doctors",
  },
};

const values = [
  {
    icon: Ear,
    title: "We listen first",
    text: "Your concerns, your goals, and your history shape every recommendation. We make room for questions before we make a plan.",
  },
  {
    icon: MessageCircle,
    title: "We explain clearly",
    text: "Open communication is part of the care. We talk candidly about symptoms, diagnoses, alternatives, and what we recommend — in plain language.",
  },
  {
    icon: HeartHandshake,
    title: "We care for the person",
    text: "A comfortable visit is not a luxury. It is part of good dentistry, and it is something we work at with every patient, every day.",
  },
];

export default function AboutDoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our doctors"
        title={
          <>
            Four dentists. One shared{" "}
            <span className="display-italic text-clay">standard.</span>
          </>
        }
        description="Different backgrounds, different interests, and the same approach to care: listen carefully, explain clearly, and treat every patient as an individual."
        crumbs={[
          { label: "Office", href: "/office/about-our-doctors" },
          { label: "About Our Doctors" },
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
          <div className="relative mx-auto w-full max-w-[28rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[2rem] border border-ink/10 bg-cream-2 shadow-soft">
              <Image
                src="/images/doctors-indoor.jpg"
                alt="The Downtown Dental doctors laughing together indoors"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -left-3 bottom-8 rounded-2xl px-4 py-3 sm:-left-7">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                Accepting new patients
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink">
                <Sparkles className="h-3.5 w-3.5 text-clay" />
                All ages, all stages
              </p>
            </div>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">The people behind your care</p>
            <h2 className="display text-balance text-[clamp(2.5rem,4.4vw,3.9rem)] text-ink">
              Experienced hands.
              <br />
              <span className="display-italic text-clay">
                A familiar welcome.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-pretty text-[1.03rem] leading-relaxed text-ink/68">
              <p>
                Our dentists bring a wide range of experience and interests to
                Downtown Dental, but they share one belief: excellent dentistry
                begins with a relationship. That means knowing your name,
                remembering your history, and making sure you understand every
                step of your care.
              </p>
              <p>
                Together with our hygienists, assistants, and business team,
                they care for families and people of all ages from Jamestown
                and the surrounding North Dakota communities.
              </p>
            </div>
            <Link
              href="/office/our-staff"
              className="link-underline mt-7 inline-flex text-sm font-semibold text-pine"
            >
              Meet the whole team
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Your dentists</p>
            <h2 className="display text-balance text-[clamp(2.5rem,4.6vw,4.1rem)] text-ink">
              Get to know{" "}
              <span className="display-italic text-clay">our doctors.</span>
            </h2>
          </div>

          <div className="mt-12 border-b border-ink/12">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.name}>
                <article className="grid gap-8 border-t border-ink/12 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12">
                  <div className="flex items-start gap-5 lg:col-span-3 lg:flex-col lg:gap-6">
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-pine/15 bg-sage-light sm:h-24 sm:w-24">
                      <span className="font-display text-2xl text-pine sm:text-3xl">
                        {doctor.initials}
                      </span>
                      <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 bg-cream text-[0.6rem] font-bold text-ink/68">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-pine">
                        {doctor.role}
                      </p>
                      {doctor.joined ? (
                        <p className="mt-2 text-xs text-ink/68">
                          With Downtown Dental since {doctor.joined}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                      <h3 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-none tracking-[-0.03em] text-ink">
                        {doctor.name}
                      </h3>
                      <Badge tone="sage">{doctor.role}</Badge>
                    </div>

                    <p className="mt-3 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.11em] text-ink/68">
                      <GraduationCap className="h-4 w-4 text-clay" />
                      {doctor.education}
                    </p>

                    <div className="mt-6 max-w-3xl space-y-4 text-[0.98rem] leading-relaxed text-ink/68">
                      {doctor.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">A shared philosophy</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                What you can expect from{" "}
                <span className="display-italic text-clay">
                  every dentist here.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-ink/10 bg-white/55 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-pine">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.6rem] leading-tight tracking-[-0.02em] text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/68">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-ink/10 bg-cream-2/60 p-7 sm:flex-row sm:p-9">
              <div>
                <p className="font-display text-[1.7rem] leading-tight tracking-[-0.02em] text-ink">
                  Ready to meet your dentist?
                </p>
                <p className="mt-1.5 text-sm text-ink/68">
                  We would be glad to welcome you to the practice.
                </p>
              </div>
              <Button asChild size="md" className="shrink-0">
                <Link href="/contact-us/appointment-request">
                  Request a visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
