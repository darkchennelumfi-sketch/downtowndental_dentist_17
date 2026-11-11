import Link from "next/link";
import { CalendarPlus, Phone } from "lucide-react";
import { practice } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 px-3 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href={practice.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 bg-transparent text-sm font-semibold text-ink transition-colors active:bg-ink/5"
        >
          <Phone className="h-4 w-4" />
          Call us
        </a>
        <Link
          href="/contact-us/appointment-request"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-cream shadow-[0_14px_34px_-18px_rgba(13,47,49,0.75)] transition-colors active:bg-pine"
        >
          <CalendarPlus className="h-4 w-4" />
          Request a visit
        </Link>
      </div>
    </div>
  );
}
