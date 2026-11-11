import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-10", className)}
    >
      <path
        d="M6 42V26C6 14.954 14.954 6 26 6s20 8.954 20 20v16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18.7 20.9c0-2.7 2.2-4.4 4.9-4.4h.8c2.7 0 4.9 1.7 4.9 4.4 0 2.1-1.1 3.4-1.7 5.5l-1 3.8c-.4 1.7-1.8 2.6-2.9 1.2l-1.1-1.9c-.6-1-1.6-1-2.2 0l-1.1 1.9c-1.1 1.4-2.5.5-2.9-1.2l-1-3.8c-.6-2.1-1.7-3.4-1.7-5.5Z"
        fill="currentColor"
      />
      <path
        d="M33.5 13.2v4.6M31.2 15.5h4.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Brand({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3",
        dark ? "text-cream" : "text-ink",
        className,
      )}
    >
      <span className="transition-transform duration-500 group-hover:-translate-y-0.5">
        <BrandMark className="h-9 w-9 text-clay md:h-10 md:w-10" />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[1.4rem] leading-none tracking-[-0.04em]">
          Downtown
        </span>
        <span className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.36em] opacity-70">
          Dental
        </span>
      </span>
    </Link>
  );
}
