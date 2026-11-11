import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Anchor,
  ArrowRight,
  ArrowUpRight,
  Check,
  Crown,
  HeartPulse,
  Phone,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DoctorsShowcase } from "@/components/doctors-showcase";
import { GalleryMarquee } from "@/components/gallery-marquee";
import { MapCard } from "@/components/map-card";
import { ContactDetails } from "@/components/contact-details";
import { CTABand } from "@/components/cta-band";
import { practice } from "@/data/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const trustItems = [
  {
    icon: Sparkles,
    title: "Same-day crowns",
    text: "CEREC technology, crafted in our office.",
  },
  {
    icon: ScanLine,
    title: "Digital X-rays",
    text: "Up to 90% less radiation than film.",
  },
  {
    icon: ShieldCheck,
    title: "Healthy Steps provider",
    text: "A North Dakota Healthy Steps provider.",
  },
  {
    icon: Activity,
    title: "CareCredit financing",
    text: "Flexible options for larger treatment plans.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-ink/10 bg-cream-2/45">
        <div className="container-page grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 py-6 sm:py-7 lg:px-7 lg:first:pl-0 lg:last:pr-0"
            >
              <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.11em] text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink/68">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-ink/8"
        />
        <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">Welcome to Downtown Dental</p>
            <h2 className="display text-balance text-[clamp(2.7rem,4.8vw,4.5rem)] text-ink">
              The kind of dental office you{" "}
              <span className="display-italic text-clay">look forward to.</span>
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-ink/20" />
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/68">
                Jamestown, North Dakota
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-pretty text-[1.03rem] leading-relaxed text-ink/68">
              <p>
                Thank you for your interest in our dental office. Our experienced
                dentists <strong className="font-semibold text-ink">Dr. Alissa Hanson</strong>,{" "}
                <strong className="font-semibold text-ink">Dr. Whitney Bruins</strong>,{" "}
                <strong className="font-semibold text-ink">Dr. Kelly Odden</strong> and{" "}
                <strong className="font-semibold text-ink">Dr. Kali Anderson</strong>{" "}
                provide top-notch dental care for families and people of all ages
                from Jamestown and surrounding North Dakota communities.
              </p>
              <p>
                Our friendly and highly-trained team is excited to provide you
                and your family the full scope of dental care services that you
                need. You will feel comfortable and secure in our state-of-the-art
                facility. We are here to help answer your questions — and we are
                always happy to welcome new patients to the practice.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-pine/15 bg-sage-light/45 p-6 sm:p-7">
              <Quote className="h-5 w-5 text-pine/50" />
              <p className="mt-3 font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-pine sm:text-[1.5rem]">
                “It is our mission to provide exceptional dental care and
                education to our patients in a friendly environment.”
              </p>
              <p className="mt-3 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-pine/55">
                The Downtown Dental team
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/office/about-our-doctors"
                className="link-underline text-sm font-semibold text-pine"
              >
                Meet the doctors
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/office/our-staff"
                className="link-underline text-sm font-semibold text-pine"
              >
                Meet the team
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={practice.reviews}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-sm font-semibold text-pine"
              >
                Our reviews
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream-2/55 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Care, considered"
                title={
                  <>
                    Every smile,
                    <br />
                    <span className="display-italic text-clay">fully considered.</span>
                  </>
                }
              />
              <div className="max-w-sm">
                <p className="text-sm leading-relaxed text-ink/68">
                  From the first cleaning to a complex restoration, care is
                  planned around your comfort, your goals, and the whole picture
                  of your health.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-5">
                  <Link href="/treatments">
                    Explore all treatments
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-6">
            <Reveal className="md:col-span-4 md:row-span-2">
              <Link
                href="/treatments"
                className="group relative flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-8 text-cream sm:min-h-[34rem] sm:p-10"
              >
                <Image
                  src="/images/patient-sunglasses.jpg"
                  alt="A Downtown Dental patient relaxing in the dental chair"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover opacity-90 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="relative z-10">
                  <Badge tone="cream" className="bg-cream/15 text-cream backdrop-blur">
                    <ShieldCheck className="h-3 w-3" />
                    Preventive & family care
                  </Badge>
                  <h3 className="mt-5 max-w-xl font-display text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.02] tracking-[-0.03em]">
                    A healthy smile starts with everyday care.
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70">
                    Regular cleanings, sealants, kids&apos; hygiene, and the
                    small habits that keep big problems from ever starting.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cream">
                    Find your starting point
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.06} className="md:col-span-2">
              <Link
                href="/treatment/crowns-and-bridgework"
                className="group card-hover flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-7 text-cream"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-sage">
                    <Crown className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm text-cream/30">01</span>
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Restorative
                  </p>
                  <h3 className="mt-2 font-display text-[1.85rem] leading-[1.05] tracking-[-0.025em]">
                    Same-day strength.
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream/55">
                    CEREC crowns, made and placed in a single visit.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cream/70 transition-colors group-hover:text-cream">
                    Crowns & bridges
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-2">
              <Link
                href="/treatment/dental-implants"
                className="group card-hover flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-sage-light/60 p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-pine">
                    <Anchor className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm text-ink/68">02</span>
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-pine">
                    Implants
                  </p>
                  <h3 className="mt-2 font-display text-[1.85rem] leading-[1.05] tracking-[-0.025em] text-ink">
                    Replace what&apos;s missing.
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/68">
                    A lasting, natural-looking solution — root and all.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-pine">
                    Dental implants
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.05} className="md:col-span-2">
              <Link
                href="/treatment/root-canal-treatment"
                className="group card-hover flex h-full min-h-[13rem] flex-col justify-between rounded-[2rem] border border-ink/10 bg-white/55 p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-2 text-clay">
                  <Activity className="h-4 w-4" />
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-[1.55rem] leading-tight tracking-[-0.02em] text-ink">
                    Save the natural tooth.
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-pine">
                    Root canal treatment
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-2">
              <Link
                href="/treatment/periodontal-gum-disease"
                className="group card-hover flex h-full min-h-[13rem] flex-col justify-between rounded-[2rem] border border-ink/10 bg-white/55 p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-2 text-clay">
                  <HeartPulse className="h-4 w-4" />
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-[1.55rem] leading-tight tracking-[-0.02em] text-ink">
                    Protect the foundation.
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-pine">
                    Gum health
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.14} className="md:col-span-2">
              <Link
                href="/treatment/digital-x-rays"
                className="group card-hover flex h-full min-h-[13rem] flex-col justify-between rounded-[2rem] border border-ink/10 bg-white/55 p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-2 text-clay">
                  <ScanLine className="h-4 w-4" />
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-[1.55rem] leading-tight tracking-[-0.02em] text-ink">
                    See more, sooner.
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-pine">
                    Digital diagnostics
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2.5rem] bg-ink text-cream lg:grid lg:grid-cols-2">
              <div className="relative z-10 p-7 sm:p-10 lg:p-14">
                <Badge tone="ink" className="border-cream/15 bg-white/5 text-sage">
                  <Sparkles className="h-3 w-3" />
                  Same-day crowns
                </Badge>
                <h2 className="display mt-6 text-balance text-[clamp(2.5rem,4.6vw,4.3rem)] text-cream">
                  A new crown,
                  <br />
                  <span className="display-italic text-sage">before you leave.</span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/65">
                  Our CEREC system lets us design, mill, and place a ceramic
                  crown right here in the office. No impression trays. No
                  temporary crown. No second visit for the final fit.
                </p>

                <ul className="mt-7 grid gap-2.5 text-sm text-cream/75 sm:grid-cols-2">
                  {[
                    "No unpleasant impression material",
                    "No temporary crown",
                    "No follow-up appointment",
                    "A natural-looking ceramic finish",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    ["01", "A camera captures the area to be treated."],
                    ["02", "The crown is designed as a 3-D model."],
                    ["03", "It is milled from ceramic in our office."],
                    ["04", "The finished restoration is placed."],
                  ].map(([number, text]) => (
                    <div key={number} className="flex gap-3">
                      <span className="font-display text-sm text-sage/70">
                        {number}
                      </span>
                      <span className="text-xs leading-relaxed text-cream/55">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="light" size="md" className="mt-8">
                  <Link href="/treatment/crowns-and-bridgework">
                    Explore crowns & bridgework
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[38rem]">
                <Image
                  src="/images/cerec.jpg"
                  alt="CEREC same-day crown technology at Downtown Dental"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink/60 lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-2/45 py-24 lg:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The doctors"
              title={
                <>
                  Four dentists.
                  <br />
                  <span className="display-italic text-clay">One shared standard.</span>
                </>
              }
              description="Different backgrounds, different interests, the same approach: listen carefully, explain clearly, and care for each person as an individual."
            />
            <div className="relative mt-9 max-w-md">
              <div className="arch relative aspect-[4/5] overflow-hidden border border-ink/10 bg-cream shadow-soft">
                <Image
                  src="/images/doctors-2026.jpg"
                  alt="The four Downtown Dental dentists together"
                  fill
                  sizes="(max-width: 1024px) 90vw, 34vw"
                  className="object-cover"
                />
              </div>
              <div className="glass absolute -right-3 bottom-6 rounded-2xl px-4 py-3">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Accepting new patients
                </p>
              </div>
            </div>
            <Button asChild variant="outline" size="md" className="mt-8">
              <Link href="/office/about-our-doctors">
                Meet all four doctors
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <DoctorsShowcase />
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 border-b border-ink/12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["4", "Dentists under one roof"],
              ["13", "Team members who know your name"],
              ["90%", "Less radiation with digital X-rays"],
              ["1", "Visit for a CEREC crown"],
            ].map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.06}>
                <div className="lg:border-l lg:border-ink/10 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                  <p className="display text-[3.6rem] leading-none text-clay sm:text-[4.2rem]">
                    {value}
                  </p>
                  <p className="mt-3 max-w-[11rem] text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-ink/68">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-page mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our people, our place"
            title={
              <>
                A practice with a{" "}
                <span className="display-italic text-clay">personality.</span>
              </>
            }
          />
          <Link
            href="/office/our-staff"
            className="link-underline shrink-0 text-sm font-semibold text-pine"
          >
            Meet the whole team
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <GalleryMarquee />
      </section>

      <section className="border-y border-clay/20 bg-clay/8 py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-8">
            <Quote className="h-9 w-9 text-clay/50" />
            <h2 className="display mt-5 max-w-3xl text-balance text-[clamp(2.4rem,4.8vw,4.4rem)] text-ink">
              Don&apos;t just take our word for it.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-ink/68">
              Check out what others are saying about their visits to Downtown
              Dental — then come see the difference for yourself.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg">
                <a href={practice.reviews} target="_blank" rel="noreferrer">
                  Read our Google reviews
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={practice.facebook} target="_blank" rel="noreferrer">
                  Connect on Facebook
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Find us"
              title={
                <>
                  Right where
                  <br />
                  <span className="display-italic text-clay">you need us.</span>
                </>
              }
              description="We are on 1st Avenue South in Jamestown, with easy parking and a team that is glad to help you find your way."
            />
            <div className="mt-9">
              <ContactDetails />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={practice.directions} target="_blank" rel="noreferrer">
                  Get directions
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={practice.payOnline} target="_blank" rel="noreferrer">
                  Pay online
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <MapCard />
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream-2/60 px-5 py-4">
              <Phone className="h-4 w-4 shrink-0 text-clay" />
              <p className="text-sm text-ink/68">
                Prefer to call?{" "}
                <a
                  href={practice.phoneHref}
                  className="font-semibold text-ink transition-colors hover:text-clay"
                >
                  {practice.phone}
                </a>{" "}
                — we are happy to help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
