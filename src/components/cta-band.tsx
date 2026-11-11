import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { practice } from "@/data/site";
import { cn } from "@/lib/utils";

type CTABandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  className?: string;
};

export function CTABand({
  title = "New patients are always welcome.",
  description = "Tell us what would make you feel at home, and we will take it from there. A healthier, happier smile starts with one easy conversation.",
  primaryLabel = "Request an appointment",
  primaryHref = "/contact-us/appointment-request",
  className,
}: CTABandProps) {
  return (
    <section className={cn("container-page py-20 lg:py-28", className)}>
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-cream sm:px-10 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-40 h-[30rem] w-[30rem] rounded-full border border-cream/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-[20rem] w-[20rem] rounded-full border border-cream/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/4 h-[26rem] w-[26rem] rounded-full bg-pine-soft/30 blur-3xl"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-sage">
                <span className="mr-2 inline-block h-px w-6 translate-y-[-4px] bg-current opacity-60" />
                Your next visit
              </p>
              <h2 className="display max-w-3xl text-balance text-[clamp(2.5rem,5vw,4.6rem)] text-cream">
                {title}
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-cream/65">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Button asChild variant="light" size="lg" className="w-full sm:w-auto">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost-light"
                size="lg"
                className="w-full border border-cream/20 sm:w-auto"
              >
                <a href={practice.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {practice.phone}
                </a>
              </Button>
              <p className="mt-2 text-center text-xs text-cream/45 lg:text-right">
                {practice.shortHours}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
