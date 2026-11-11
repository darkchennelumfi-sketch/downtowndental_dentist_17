"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { glossary } from "@/data/pages";
import { cn } from "@/lib/utils";

export function Glossary() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");

  const letters = useMemo(
    () => Array.from(new Set(glossary.map((item) => item.letter))).sort(),
    [],
  );

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return glossary.filter((item) => {
      const matchesLetter = letter === "All" || item.letter === letter;
      const matchesQuery =
        normalized.length === 0 ||
        item.term.toLowerCase().includes(normalized) ||
        item.definition.toLowerCase().includes(normalized);
      return matchesLetter && matchesQuery;
    });
  }, [letter, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/68" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a term or definition"
            className="pl-11 pr-10"
            aria-label="Search the dental glossary"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-ink/68 transition-colors hover:bg-ink/5 hover:text-ink"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>

        <div
          className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1"
          role="group"
          aria-label="Filter glossary by letter"
        >
          <button
            type="button"
            onClick={() => setLetter("All")}
            aria-pressed={letter === "All"}
            className={cn(
              "h-9 min-w-9 shrink-0 cursor-pointer rounded-full px-3 text-[0.7rem] font-bold uppercase tracking-[0.08em] transition-colors",
              letter === "All"
                ? "bg-ink text-cream"
                : "text-ink/68 hover:bg-ink/5 hover:text-ink",
            )}
          >
            All
          </button>
          {letters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLetter(item)}
              aria-pressed={letter === item}
              className={cn(
                "h-9 w-9 shrink-0 cursor-pointer rounded-full text-[0.7rem] font-bold transition-colors",
                letter === item
                  ? "bg-ink text-cream"
                  : "text-ink/68 hover:bg-ink/5 hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs text-ink/68" aria-live="polite">
        {results.length} {results.length === 1 ? "term" : "terms"}
        {letter !== "All" ? ` starting with ${letter}` : ""}
        {query ? ` matching “${query}”` : ""}
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => (
          <div
            key={`${item.term}-${item.definition.slice(0, 12)}`}
            className="rounded-2xl border border-ink/10 bg-white/50 p-5 transition-colors hover:border-pine/30 hover:bg-white/80"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-[1.25rem] tracking-[-0.015em] text-ink">
                {item.term}
              </h3>
              <span className="text-[0.68rem] font-bold text-ink/68">
                {item.letter}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink/68">
              {item.definition}
            </p>
          </div>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-ink/15 p-10 text-center">
          <p className="font-display text-2xl text-ink">No term found.</p>
          <p className="mt-2 text-sm text-ink/68">
            Try a different word or clear the filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setLetter("All");
            }}
            className="mt-4 cursor-pointer text-xs font-bold uppercase tracking-[0.12em] text-clay"
          >
            Reset search
          </button>
        </div>
      ) : null}
    </div>
  );
}
