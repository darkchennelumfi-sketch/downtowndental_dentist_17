import type { Metadata } from "next";
import Link from "next/link";
import {
  AlignHorizontalSpaceAround,
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  HeartPulse,
  Phone,
  ScanSearch,
  Thermometer,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import { commonProblems } from "@/data/pages";

export const metadata: Metadata = {
  title: "Common Dental Problems",
  description:
    "Learn about common dental problems — tooth decay, sensitive teeth, gum disease, bad breath, canker sores, and orthodontic concerns — from Downtown Dental in Jamestown, ND.",
  alternates: {
    canonical: "/patient/common-problems",
  },
};

const icons: LucideIcon[] = [
  ScanSearch,
  Thermometer,
  HeartPulse,
  Wind,
  CircleDot,
  AlignHorizontalSpaceAround,
];

const helpLinks: Record<string, { href: string; label: string }> = {
  "Tooth Decay": {
    href: "/patient/tooth-decay-prevention",
    label: "Preventing tooth decay",
  },
  "Sensitive Teeth": {
    href: "/treatment/fillings",
    label: "Restorative care",
  },
  "Gum Disease": {
    href: "/treatment/periodontal-gum-disease",
    label: "Gum disease treatment",
  },
  "Bad Breath (Halitosis)": {
    href: "/patient/brushing-and-flossing",
    label: "Brushing & flossing",
  },
  "Canker Sores": {
    href: "/patient/emergencies",
    label: "When to call us",
  },
  "Orthodontic Problems": {
    href: "/treatment/orthodontics-and-dental-hygiene",
    label: "Orthodontic hygiene",
  },
};

export default function CommonProblemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Common problems"
        title={
          <>
            Small concerns,
            <br />
            <span className="display-italic text-clay">
              taken seriously.
            </span>
          </>
        }
        description="A twinge, a change, a question that keeps coming back — these are the everyday dental concerns we hear about most. Understanding them is the first step toward feeling better."
        crumbs={[
          { label: "Patients", href: "/patient/first-visit" },
          { label: "Common Problems" },
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
            <div className="flex items-center justify-between">
              <Badge tone="sage">A note on symptoms</Badge>
              <HeartPulse className="h-5 w-5 text-clay" />
            </div>
            <p className="mt-5 font-display text-[1.8rem] leading-[1.08] tracking-[-0.025em] text-ink">
              If something changes, do not wait for it to get worse.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/68">
              Pain, swelling, bleeding, or a persistent change in your mouth is
              a good reason to call. We would much rather see you early.
            </p>
            <a
              href={practice.phoneHref}
              className="link-underline mt-6 inline-flex text-sm font-semibold text-pine"
            >
              {practice.phone}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">What we see most</p>
              <h2 className="display text-balance text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                Six things worth{" "}
                <span className="display-italic text-clay">knowing about.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ink/68">
                These are not a diagnosis — just plain-language starting points.
                If any of them sound familiar, let us take a closer look.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {commonProblems.map((problem, index) => {
              const Icon = icons[index % icons.length] ?? CircleDot;
              const help = helpLinks[problem.title];

              return (
                <Reveal key={problem.title} delay={(index % 2) * 0.06}>
                  <article className="card-hover flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white/55 p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-pine">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm text-ink/68">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[1.7rem] leading-tight tracking-[-0.022em] text-ink">
                      {problem.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-ink/68">
                      {problem.text}
                    </p>
                    {help ? (
                      <Link
                        href={help.href}
                        className="mt-5 inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-pine transition-colors hover:text-clay"
                      >
                        {help.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="Something does not feel right?"
        description="You do not have to diagnose it yourself. Call the office or request a visit and we will help you figure out the next step."
      />
    </>
  );
}
