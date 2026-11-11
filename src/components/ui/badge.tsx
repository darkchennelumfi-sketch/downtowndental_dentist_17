import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "sage" | "clay" | "cream" | "ink" | "sky";
};

export function Badge({ className, tone = "sage", ...props }: BadgeProps) {
  const tones: Record<string, string> = {
    sage: "bg-sage-light text-pine border-pine/15",
    clay: "bg-clay-light/50 text-clay-ink border-clay/20",
    cream: "bg-cream-2 text-ink border-ink/10",
    ink: "bg-ink text-cream border-white/10",
    sky: "bg-sky-light text-ink-2 border-ink/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.13em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
