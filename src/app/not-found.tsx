import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { practice } from "@/data/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  {
    title: "Explore treatments",
    text: "From routine cleanings to same-day crowns.",
    href: "/treatments",
  },
  {
    title: "Your first visit",
    text: "What to expect, start to finish.",
    href: "/patient/first-visit",
  },
  {
    title: "Patient resources",
    text: "FAQ, glossary, and everyday care guides.",
    href: "/resources",
  },
  {
    title: "Contact the office",
    text: "Call, email, or find directions.",
    href: "/contact-us/contact-us",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
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
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">404 — Page not found</p>
          <p className="font-display text-[clamp(6rem,18vw,13rem)] leading-[0.82] tracking-[-0.06em] text-clay/25">
            404
          </p>
          <h1 className="display mt-4 text-balance text-[clamp(2.8rem,6vw,5rem)] text-ink">
            That page has{" "}
            <span className="display-italic text-clay">wandered off.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-ink/68">
            The link may be old, or the page may have moved. Let us help you find
            what you were looking for — or just give us a call.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={practice.phoneHref}>
                <Phone className="h-4 w-4" />
                {practice.phone}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/12 pt-10">
          <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-pine">
            <Search className="h-3.5 w-3.5" />
            A few good places to start
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 transition-colors hover:border-pine/30 hover:bg-white/80"
              >
                <div>
                  <h2 className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-ink">
                    {link.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-ink/68">
                    {link.text}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-pine">
                  Go there
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
