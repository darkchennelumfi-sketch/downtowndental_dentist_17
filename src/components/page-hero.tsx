import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
  actions?: ReactNode;
  media?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  media,
  align = "left",
  className,
}: PageHeroProps) {
  const split = Boolean(media);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-ink/10 bg-cream-2/55 pb-20 pt-10 lg:pb-28 lg:pt-14",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 -top-64 h-[38rem] w-[38rem] rounded-full border border-ink/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 h-[26rem] w-[26rem] rounded-full border border-ink/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-18rem] h-[28rem] w-[28rem] rounded-full bg-sage/20 blur-3xl"
      />

      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink/68">
            <li>
              <Link href="/" className="transition-colors hover:text-pine">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 opacity-50" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-pine"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink/70">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div
          className={cn(
            "grid items-center gap-12 lg:gap-16",
            split ? "lg:grid-cols-12" : "lg:grid-cols-12",
          )}
        >
          <div
            className={cn(
              split ? "lg:col-span-7" : "lg:col-span-9",
              align === "center" && !split && "mx-auto text-center",
            )}
          >
            <p className="eyebrow mb-6">{eyebrow}</p>
            <h1 className="display text-balance text-[clamp(2.9rem,6.4vw,5.6rem)] text-ink">
              {title}
            </h1>
            {description ? (
              <div className="mt-7 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-ink/68 sm:text-lg">
                {description}
              </div>
            ) : null}
            {actions ? (
              <div className="mt-9 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>
          {media ? (
            <div className={cn("lg:col-span-5", align === "center" && "mx-auto")}>
              {media}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
