"use client";

import { useState } from "react";
import { TreatmentCard } from "@/components/treatment-card";
import {
  treatmentCategories,
  treatments,
  type TreatmentCategory,
} from "@/data/treatments";
import { cn } from "@/lib/utils";

type Filter = "All" | TreatmentCategory;

const filters: Filter[] = [
  "All",
  ...treatmentCategories.map((category) => category.label),
];

export function TreatmentGrid() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All"
      ? treatments
      : treatments.filter((treatment) => treatment.category === active);

  return (
    <div>
      <div
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        role="group"
        aria-label="Filter treatments by category"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "h-10 shrink-0 cursor-pointer rounded-full border px-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-all duration-300",
              active === filter
                ? "border-ink bg-ink text-cream"
                : "border-ink/15 bg-transparent text-ink/68 hover:border-ink/35 hover:text-ink",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-ink/68">
          No treatments found in this category.
        </p>
      ) : null}
    </div>
  );
}
