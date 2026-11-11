import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Treatment } from "@/data/treatments";
import { cn } from "@/lib/utils";

export function TreatmentCard({
  treatment,
  className,
  compact = false,
}: {
  treatment: Treatment;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/treatment/${treatment.slug}`}
      className={cn(
        "group card-hover flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/60",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-cream-2",
          compact ? "h-40" : "h-52",
        )}
      >
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <Badge tone="cream" className="bg-cream/90 backdrop-blur">
            {treatment.category}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink">
          {treatment.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/68">
          {treatment.teaser}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-pine">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
