import Link from "next/link";
import { ArrowUpRight, Check, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { practice } from "@/data/site";
import type { Treatment } from "@/data/treatments";
import { cn } from "@/lib/utils";

export function VisitSidebar({
  title = "We would love to meet you.",
  description = "Tell us what you need and we will help you find the right next step.",
  highlights,
  related,
  className,
}: {
  title?: string;
  description?: string;
  highlights?: readonly string[];
  related?: Treatment[];
  className?: string;
}) {
  return (
    <aside className={cn("space-y-4 lg:sticky lg:top-28", className)}>
      <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-cream/10"
        />
        <Badge tone="ink" className="border-cream/15 bg-white/5 text-sage">
          Plan your visit
        </Badge>
        <h2 className="mt-4 font-display text-[1.9rem] leading-[1.05] tracking-[-0.025em]">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cream/60">
          {description}
        </p>
        <Button asChild variant="light" size="md" className="mt-6 w-full">
          <Link href="/contact-us/appointment-request">
            Request an appointment
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
        <div className="mt-5 space-y-3 text-sm">
          <a
            href={practice.phoneHref}
            className="flex items-center gap-2.5 font-semibold text-cream transition-colors hover:text-sage"
          >
            <Phone className="h-4 w-4 text-sage" />
            {practice.phone}
          </a>
          <p className="flex items-start gap-2.5 text-cream/65">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
            {practice.address.street}, {practice.address.city},{" "}
            {practice.address.state} {practice.address.zip}
          </p>
          <p className="flex items-start gap-2.5 text-cream/65">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
            {practice.shortHours}
          </p>
        </div>
      </div>

      {highlights && highlights.length > 0 ? (
        <div className="rounded-[1.5rem] border border-ink/10 bg-white/50 p-6">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
            What to know
          </p>
          <ul className="mt-4 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/68"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage-light text-pine">
                  <Check className="h-2.5 w-2.5" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {related && related.length > 0 ? (
        <div className="rounded-[1.5rem] border border-ink/10 bg-cream-2/55 p-6">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pine">
            Related care
          </p>
          <ul className="mt-3 space-y-1">
            {related.map((treatment) => (
              <li key={treatment.slug}>
                <Link
                  href={`/treatment/${treatment.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-lg py-2 text-sm text-ink/68 transition-colors hover:text-clay"
                >
                  {treatment.shortTitle}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}
