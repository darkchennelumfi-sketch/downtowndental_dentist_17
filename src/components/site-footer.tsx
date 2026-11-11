import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Brand } from "@/components/brand";
import {
  aboutLinks,
  contactLinks,
  patientLinks,
  practice,
  resourceLinks,
} from "@/data/site";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-start gap-1.5 py-1 text-sm leading-snug text-cream/55 transition-colors hover:text-cream";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
        <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-18rem] h-[32rem] w-[32rem] rounded-full border border-cream/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-12rem] h-[22rem] w-[22rem] rounded-full border border-cream/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-pine-soft/25 blur-3xl"
      />

      <div className="container-page relative z-10 pb-32 pt-16 lg:pb-10 lg:pt-20">
        <div className="grid gap-12 border-b border-cream/10 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Brand dark />
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-cream/55">
              Family-friendly dentistry in Jamestown, North Dakota. Thoughtful
              care for every stage of life — delivered by people who know your
              name.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-3 font-semibold text-cream transition-colors hover:text-sage"
              >
                <Phone className="h-4 w-4 text-sage" />
                {practice.phone}
              </a>
              <a
                href={practice.emailHref}
                className="flex items-center gap-3 text-cream/65 transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4 text-sage" />
                {practice.email}
              </a>
              <p className="flex items-start gap-3 text-cream/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {practice.address.street}, {practice.address.city},{" "}
                {practice.address.state} {practice.address.zip}
              </p>
              <p className="flex items-start gap-3 text-cream/65">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {practice.shortHours}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            <div>
              <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sage">
                The practice
              </p>
              <ul className="space-y-0.5">
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sage">
                Your visit
              </p>
              <ul className="space-y-0.5">
                {patientLinks.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sage">
                Treatments
              </p>
              <ul className="space-y-0.5">
                {treatments.slice(0, 7).map((treatment) => (
                  <li key={treatment.slug}>
                    <FooterLink href={`/treatment/${treatment.slug}`}>
                      {treatment.shortTitle}
                    </FooterLink>
                  </li>
                ))}
                <li>
                  <FooterLink href="/treatments">All treatments</FooterLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sage">
                Connect
              </p>
              <ul className="space-y-0.5">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
                <li>
                  <FooterLink href={practice.payOnline} external>
                    Pay online
                  </FooterLink>
                </li>
              </ul>
              <a
                href={practice.facebook}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/65 transition-colors hover:border-cream/40 hover:text-cream"
                aria-label="Downtown Dental on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Downtown Dental. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-cream"
            >
              Privacy Policy
            </Link>
            <Link
              href="/general-info/related-links"
              className="transition-colors hover:text-cream"
            >
              Related Links
            </Link>
            <a
              href={practice.directions}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-1 transition-colors hover:text-cream",
              )}
            >
              Get directions
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
