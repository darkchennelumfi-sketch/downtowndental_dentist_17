import { ExternalLink, MapPin } from "lucide-react";
import { practice } from "@/data/site";

export function MapCard({ className }: { className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 shadow-soft ${className ?? ""}`}
    >
      <iframe
        title={`Map showing ${practice.name} at ${practice.address.full}`}
        src={practice.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[380px] w-full border-0 grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 sm:h-[440px]"
        allowFullScreen
      />
      <div className="glass absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-5 py-4 sm:right-auto sm:max-w-sm">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
          <p className="text-sm font-semibold leading-snug text-ink">
            {practice.address.street}
            <br />
            {practice.address.city}, {practice.address.state}{" "}
            {practice.address.zip}
          </p>
        </div>
        <a
          href={practice.directions}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:text-clay"
        >
          Directions
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
