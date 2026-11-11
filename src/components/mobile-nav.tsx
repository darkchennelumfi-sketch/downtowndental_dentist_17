"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { practice, type NavLink } from "@/data/site";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";

type MobileNavProps = {
  aboutLinks: NavLink[];
  patientLinks: NavLink[];
  resourceLinks: NavLink[];
  contactLinks: NavLink[];
};

function NavLinkList({
  links,
  onNavigate,
}: {
  links: NavLink[];
  onNavigate: () => void;
}) {
  return (
    <ul className="mb-3 space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[0.95rem] text-ink/75 transition-colors hover:bg-pine/5 hover:text-pine"
          >
            {link.label}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-30" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MobileNav({
  aboutLinks,
  patientLinks,
  resourceLinks,
  contactLinks,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-ink/5 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-overlay fixed inset-0 z-[80] bg-ink/45 backdrop-blur-sm" />
        <Dialog.Content className="mobile-panel fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col overflow-y-auto bg-cream shadow-2xl">
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <Dialog.Description className="sr-only">
            Browse pages, treatments, and contact information for Downtown
            Dental.
          </Dialog.Description>

          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-cream/95 px-5 py-4 backdrop-blur-xl">
            <Brand />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-1 px-5 pb-8 pt-6">
            <div className="mb-7 rounded-2xl bg-ink p-5 text-cream">
              <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-sage">
                New patients welcome
              </p>
              <p className="font-display text-2xl leading-tight">
                Ready for a calmer visit?
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="light" size="sm">
                  <Link
                    href="/contact-us/appointment-request"
                    onClick={() => setOpen(false)}
                  >
                    Request an appointment
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost-light"
                  size="sm"
                  className="border border-cream/20"
                >
                  <a href={practice.phoneHref} onClick={() => setOpen(false)}>
                    <Phone className="h-3.5 w-3.5" />
                    {practice.phone}
                  </a>
                </Button>
              </div>
            </div>

            <Accordion type="multiple" className="border-t border-ink/10">
              <AccordionItem value="about">
                <AccordionTrigger className="py-4 text-base font-semibold">
                  About the practice
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-0">
                  <NavLinkList links={aboutLinks} onNavigate={() => setOpen(false)} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="patients">
                <AccordionTrigger className="py-4 text-base font-semibold">
                  Patient information
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-0">
                  <NavLinkList
                    links={patientLinks}
                    onNavigate={() => setOpen(false)}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="treatments">
                <AccordionTrigger className="py-4 text-base font-semibold">
                  Treatments
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-0">
                  <ul className="mb-3 space-y-1">
                    {treatments.map((treatment) => (
                      <li key={treatment.slug}>
                        <Link
                          href={`/treatment/${treatment.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[0.95rem] text-ink/75 transition-colors hover:bg-pine/5 hover:text-pine"
                        >
                          {treatment.title}
                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink/68">
                            {treatment.category}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/treatments"
                    onClick={() => setOpen(false)}
                    className="ml-3 inline-flex items-center gap-1 text-sm font-semibold text-clay"
                  >
                    View all treatments
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="resources">
                <AccordionTrigger className="py-4 text-base font-semibold">
                  Resources
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-0">
                  <NavLinkList
                    links={resourceLinks}
                    onNavigate={() => setOpen(false)}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact">
                <AccordionTrigger className="py-4 text-base font-semibold">
                  Contact & directions
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-0">
                  <NavLinkList
                    links={contactLinks}
                    onNavigate={() => setOpen(false)}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 space-y-4 rounded-2xl border border-ink/10 bg-cream-2/60 p-5 text-sm text-ink/70">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-3 font-semibold text-ink"
              >
                <Phone className="h-4 w-4 text-clay" />
                {practice.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                {practice.address.full}
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                {practice.shortHours}
              </p>
              <a
                href={practice.payOnline}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-pine",
                )}
              >
                Pay online
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
