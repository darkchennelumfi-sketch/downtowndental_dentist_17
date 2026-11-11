"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";

export function HomeHero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-sage/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 -top-52 h-[46rem] w-[46rem] rounded-full border border-ink/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-[32rem] w-[32rem] rounded-full border border-ink/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-clay-light/25 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 lg:col-span-7"
          >
            <motion.div variants={item}>
              <Badge tone="sage" className="mb-7 px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
                </span>
                Accepting new patients
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="display text-balance text-[clamp(3.5rem,8.1vw,7.7rem)] text-ink"
            >
              A calmer kind
              <br />
              of{" "}
              <span className="display-italic relative inline-block text-clay-deep">
                dentistry.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 18"
                  className="absolute -bottom-3 left-0 h-3 w-full text-clay/45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 13C58 5 118 3 170 7c42 3 78 6 128 2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-ink/68 sm:text-lg"
            >
              Family-friendly care in the heart of Jamestown — with four
              experienced dentists, a warmly welcoming team, and modern tools
              that make every visit feel a little easier.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg">
                <Link href="/contact-us/appointment-request">
                  Request an appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={practice.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {practice.phone}
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] font-semibold text-ink/68"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                Insurance claims filed for you
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                CareCredit financing available
              </span>
            </motion.div>
          </motion.div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto w-full max-w-[29rem] lg:max-w-none"
            >
              <div className="arch relative aspect-[4/5] overflow-hidden border border-ink/10 bg-cream-2 shadow-soft">
                <Image
                  src="/images/doctors-2026.jpg"
                  alt="The four Downtown Dental dentists smiling together"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
              </div>

              <div className="glass absolute -left-4 top-10 rounded-2xl px-4 py-3 sm:-left-8">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Same-day crowns
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink">
                  <Sparkles className="h-3.5 w-3.5 text-clay" />
                  CEREC technology
                </p>
              </div>

              <div className="glass absolute -right-3 bottom-16 rounded-2xl px-4 py-3 sm:-right-6">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Our team
                </p>
                <p className="mt-0.5 text-sm font-semibold text-ink">
                  4 dentists · 13 teammates
                </p>
              </div>

              <div className="absolute -bottom-7 -left-4 hidden h-24 w-24 items-center justify-center rounded-full border border-ink/10 bg-cream/90 shadow-soft backdrop-blur sm:flex">
                <svg
                  viewBox="0 0 120 120"
                  className="animate-spin-slow absolute inset-0 h-full w-full text-ink/68"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="hero-circle"
                      d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                    />
                  </defs>
                  <text fontSize="8.5" letterSpacing="2.4" fill="currentColor">
                    <textPath href="#hero-circle">
                      DOWNTOWN DENTAL · JAMESTOWN ND ·
                    </textPath>
                  </text>
                </svg>
                <Sparkles className="h-5 w-5 text-clay" />
              </div>
            </motion.div>

            <div className="absolute -right-4 -top-4 -z-10 h-40 w-40 rounded-full border border-ink/10 sm:-right-8 sm:-top-8 sm:h-56 sm:w-56" />
            <div className="absolute -bottom-6 right-6 -z-10 h-32 w-32 rounded-full bg-sage/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
