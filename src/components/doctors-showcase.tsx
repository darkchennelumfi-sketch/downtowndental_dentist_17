"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { doctors } from "@/data/site";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

export function DoctorsShowcase({
  variant = "light",
  className,
  defaultValue = "doctor-0",
}: {
  variant?: "light" | "dark";
  className?: string;
  defaultValue?: string;
}) {
  const dark = variant === "dark";

  return (
    <div className={className}>
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultValue}
        className={cn(
          "border-t",
          dark ? "border-cream/15" : "border-ink/12",
        )}
      >
        {doctors.map((doctor, index) => (
          <AccordionItem
            key={doctor.name}
            value={`doctor-${index}`}
            className={cn(dark ? "border-cream/15" : "border-ink/12")}
          >
            <AccordionTrigger
              className={cn(
                "group py-7 hover:no-underline",
                dark
                  ? "text-cream hover:text-white [&>span]:border-cream/20 [&>span]:text-cream/70"
                  : "text-ink",
              )}
            >
              <span className="grid flex-1 grid-cols-[2.5rem_1fr] items-center gap-4 sm:grid-cols-[3rem_1fr_auto]">
                <span
                  className={cn(
                    "text-[0.7rem] font-bold tracking-[0.14em]",
                    dark ? "text-sage" : "text-ink/68",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-[1.55rem] leading-tight tracking-[-0.02em] sm:text-[1.8rem]">
                    {doctor.name}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.14em]",
                      dark ? "text-cream/40" : "text-ink/68",
                    )}
                  >
                    {doctor.role}
                  </span>
                </span>
                <span
                  className={cn(
                    "hidden items-center gap-2 text-xs sm:flex",
                    dark ? "text-cream/40" : "text-ink/68",
                  )}
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                  {doctor.education}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "pb-8 pr-0 text-[0.98rem] leading-relaxed sm:pl-[4rem]",
                dark ? "text-cream/65" : "text-ink/68",
              )}
            >
              <div className="max-w-2xl space-y-4">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {doctor.joined ? (
                  <p
                    className={cn(
                      "pt-2 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
                      dark ? "text-sage" : "text-pine",
                    )}
                  >
                    Part of Downtown Dental since {doctor.joined}
                  </p>
                ) : null}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
