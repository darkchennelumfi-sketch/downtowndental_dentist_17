"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Phone,
} from "lucide-react";
import { Brand } from "@/components/brand";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import {
  aboutLinks,
  contactLinks,
  patientLinks,
  practice,
  resourceLinks,
  type NavLink,
} from "@/data/site";
import { treatments, treatmentCategories } from "@/data/treatments";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LinkPanel({
  links,
  pathname,
  width = "w-[620px]",
}: {
  links: NavLink[];
  pathname: string;
  width?: string;
}) {
  return (
    <div className="p-2">
      <div
        className={cn(
          "rounded-[1.75rem] border border-ink/10 bg-cream/95 p-3 shadow-soft backdrop-blur-xl",
          width,
        )}
      >
        <ul className="grid grid-cols-2 gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavigationMenu.Link
                asChild
                active={isActive(pathname, link.href)}
              >
                <Link
                  href={link.href}
                  className="group flex h-full flex-col gap-1 rounded-2xl px-4 py-4 transition-colors hover:bg-white/70 data-[active]:bg-white/70"
                >
                  <span className="flex items-center justify-between gap-3 text-[0.95rem] font-semibold text-ink transition-colors group-hover:text-pine">
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink/68 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
                  </span>
                  {link.description ? (
                    <span className="text-xs leading-relaxed text-ink/68">
                      {link.description}
                    </span>
                  ) : null}
                </Link>
              </NavigationMenu.Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TreatmentsPanel({ pathname }: { pathname: string }) {
  return (
    <div className="p-2">
      <div className="w-[880px] rounded-[1.75rem] border border-ink/10 bg-cream/95 p-3 shadow-soft backdrop-blur-xl">
        <div className="grid grid-cols-[1fr_15rem] gap-3">
          <div className="grid grid-cols-2 gap-x-2">
            {treatmentCategories.map((category) => {
              const items = treatments.filter(
                (treatment) => treatment.category === category.label,
              );
              if (items.length === 0) return null;
              return (
                <div key={category.label} className="px-3 py-2">
                  <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink/68">
                    {category.label}
                  </p>
                  <ul>
                    {items.map((treatment) => (
                      <li key={treatment.slug}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href={`/treatment/${treatment.slug}`}
                            className={cn(
                              "group flex items-center justify-between gap-2 rounded-lg py-1.5 text-[0.86rem] text-ink/70 transition-colors hover:text-clay",
                              pathname === `/treatment/${treatment.slug}` &&
                                "font-semibold text-clay",
                            )}
                          >
                            {treatment.shortTitle}
                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="grain relative flex flex-col justify-between overflow-hidden rounded-[1.25rem] bg-ink p-5 text-cream">
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sage">
                Not sure where to start?
              </p>
              <p className="mt-3 font-display text-[1.65rem] leading-[1.05] tracking-[-0.025em]">
                Start with a conversation.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-cream/60">
                We will listen first, explain clearly, and build a plan around
                what you actually need.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Button asChild size="sm" variant="light" className="w-full">
                <Link href="/contact-us/appointment-request">
                  Request a visit
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-1 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream/60 transition-colors hover:text-cream"
              >
                Browse all treatments
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavTrigger({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <NavigationMenu.Trigger
      className={cn(
        "group flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.82rem] font-semibold text-ink/68 transition-colors hover:bg-ink/5 hover:text-ink data-[state=open]:bg-ink/5 data-[state=open]:text-ink",
        active && "text-ink",
      )}
    >
      {children}
      <ChevronDown className="h-3 w-3 opacity-45 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </NavigationMenu.Trigger>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  const aboutActive = aboutLinks.some((link) => isActive(pathname, link.href));
  const patientActive = patientLinks.some((link) =>
    isActive(pathname, link.href),
  );
  const treatmentActive =
    pathname.startsWith("/treatment") || pathname === "/treatments";
  const resourceActive = resourceLinks.some((link) =>
    isActive(pathname, link.href),
  );
  const contactActive = contactLinks.some((link) =>
    isActive(pathname, link.href),
  );

  return (
    <header>
      <div className="hidden bg-ink text-cream/65 md:block">
        <div className="container-page flex h-10 items-center justify-between gap-6 text-[0.68rem] font-semibold tracking-[0.02em]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-sage" />
              {practice.address.full}
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <span className="h-1 w-1 rounded-full bg-clay" />
              {practice.shortHours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={practice.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              <Phone className="h-3 w-3 text-sage" />
              {practice.phone}
            </a>
            <span className="h-3 w-px bg-cream/15" />
            <a
              href={practice.payOnline}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-cream"
            >
              Pay online
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={practice.facebook}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl">
        <div className="container-page flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.25rem]">
          <Brand />

          <NavigationMenu.Root
            className="relative hidden lg:flex"
            delayDuration={80}
            skipDelayDuration={300}
          >
            <NavigationMenu.List className="flex items-center gap-0.5">
              <NavigationMenu.Item>
                <NavTrigger active={aboutActive}>The practice</NavTrigger>
                <NavigationMenu.Content>
                  <LinkPanel links={aboutLinks} pathname={pathname} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavTrigger active={patientActive}>Your visit</NavTrigger>
                <NavigationMenu.Content>
                  <LinkPanel links={patientLinks} pathname={pathname} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavTrigger active={treatmentActive}>Treatments</NavTrigger>
                <NavigationMenu.Content>
                  <TreatmentsPanel pathname={pathname} />
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavTrigger active={resourceActive}>Resources</NavTrigger>
                <NavigationMenu.Content>
                  <LinkPanel
                    links={resourceLinks}
                    pathname={pathname}
                    width="w-[620px]"
                  />
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavTrigger active={contactActive}>Contact</NavTrigger>
                <NavigationMenu.Content>
                  <LinkPanel
                    links={contactLinks}
                    pathname={pathname}
                    width="w-[420px]"
                  />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.Viewport className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2" />
          </NavigationMenu.Root>

          <div className="flex items-center gap-2.5">
            <a
              href={practice.payOnline}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-ink/68 transition-colors hover:text-ink xl:flex"
            >
              Pay online
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact-us/appointment-request">
                Request appointment
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <MobileNav
              aboutLinks={aboutLinks}
              patientLinks={patientLinks}
              resourceLinks={resourceLinks}
              contactLinks={contactLinks}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
