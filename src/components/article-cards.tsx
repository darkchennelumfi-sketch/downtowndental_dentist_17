import { ArrowUpRight, BookOpen } from "lucide-react";
import type { RelatedArticle } from "@/data/treatments";

export function ArticleCards({
  articles,
  title = "Related reading",
  eyebrow = "From Dear Doctor",
}: {
  articles: RelatedArticle[];
  title?: string;
  eyebrow?: string;
}) {
  if (articles.length === 0) return null;

  return (
    <section>
      <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-pine">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2rem] tracking-[-0.025em] text-ink">
        {title}
      </h2>
      <div className="mt-6 grid gap-4">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="nofollow noreferrer"
            className="group flex gap-4 rounded-2xl border border-ink/10 bg-white/45 p-5 transition-colors hover:border-pine/30 hover:bg-white/80"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-light text-pine">
              <BookOpen className="h-4 w-4" />
            </span>
            <span>
              <span className="flex items-start justify-between gap-4">
                <span className="font-display text-[1.15rem] leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-pine">
                  {article.title}
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink/68 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-ink/68">
                {article.excerpt}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
