import { ContentBlocks } from "@/components/content-blocks";
import type { Section } from "@/data/pages";
import { cn } from "@/lib/utils";

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function EditorialSections({
  sections,
  className,
  numbered = true,
}: {
  sections: Section[];
  className?: string;
  numbered?: boolean;
}) {
  return (
    <div className={cn("space-y-12", className)}>
      {sections.map((section, index) => {
        const key = `${section.heading ?? "intro"}-${index}`;

        if (!section.heading) {
          return (
            <section key={key} className="prose-editorial">
              <ContentBlocks blocks={section.blocks} />
            </section>
          );
        }

        return (
          <section
            key={key}
            id={slugifyHeading(section.heading)}
            className="scroll-mt-28 border-t border-ink/12 pt-8"
          >
            <div
              className={cn(
                "grid gap-4",
                numbered && "sm:grid-cols-[3rem_1fr] sm:gap-6",
              )}
            >
              {numbered ? (
                <span
                  aria-hidden="true"
                  className="pt-1 font-display text-sm text-clay-deep"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              <div>
                <h2 className="font-display text-[clamp(1.7rem,2.6vw,2.25rem)] leading-[1.08] tracking-[-0.025em] text-ink">
                  {section.heading}
                </h2>
                <div className="prose-editorial mt-5">
                  <ContentBlocks blocks={section.blocks} />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
