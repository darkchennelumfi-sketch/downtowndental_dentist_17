import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";
import { practice } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactDetailsProps = {
  className?: string;
  compact?: boolean;
  dark?: boolean;
};

export function ContactDetails({
  className,
  compact = false,
  dark = false,
}: ContactDetailsProps) {
  const label = dark ? "text-cream/45" : "text-ink/68";
  const value = dark ? "text-cream" : "text-ink";
  const icon = dark ? "text-sage" : "text-clay";

  return (
    <div className={cn("grid gap-6", className)}>
      <div className="flex items-start gap-4">
        <MapPin className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} />
        <div>
          <p className={cn("text-[0.65rem] font-bold uppercase tracking-[0.16em]", label)}>
            Visit
          </p>
          <p className={cn("mt-1.5 text-sm leading-relaxed", value)}>
            {practice.address.street}
            <br />
            {practice.address.city}, {practice.address.state}{" "}
            {practice.address.zip}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} />
        <div>
          <p className={cn("text-[0.65rem] font-bold uppercase tracking-[0.16em]", label)}>
            Call
          </p>
          <a
            href={practice.phoneHref}
            className={cn(
              "mt-1.5 block text-sm font-semibold transition-colors hover:text-clay",
              value,
            )}
          >
            {practice.phone}
          </a>
          <p className={cn("mt-1 text-xs", label)}>Fax {practice.fax}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} />
        <div>
          <p className={cn("text-[0.65rem] font-bold uppercase tracking-[0.16em]", label)}>
            Email
          </p>
          <a
            href={practice.emailHref}
            className={cn(
              "mt-1.5 block break-all text-sm font-semibold transition-colors hover:text-clay",
              value,
            )}
          >
            {practice.email}
          </a>
        </div>
      </div>

      {!compact ? (
        <div className="flex items-start gap-4">
          <Clock className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} />
          <div>
            <p className={cn("text-[0.65rem] font-bold uppercase tracking-[0.16em]", label)}>
              Office hours
            </p>
            <dl className={cn("mt-2 space-y-1.5 text-sm", value)}>
              {practice.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-wrap justify-between gap-x-6 gap-y-1"
                >
                  <dt className={dark ? "text-cream/70" : "text-ink/68"}>
                    {item.day}
                  </dt>
                  <dd className="font-semibold">{item.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-4">
          <Clock className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} />
          <div>
            <p className={cn("text-[0.65rem] font-bold uppercase tracking-[0.16em]", label)}>
              Hours
            </p>
            <p className={cn("mt-1.5 text-sm leading-relaxed", value)}>
              Mon–Thu 8–5 · Fri 8–2
            </p>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        <Printer className={cn("mt-0.5 h-5 w-5 shrink-0", icon)} />
        <div>
          <p className={cn("text-[0.65rem] font-bold uppercase tracking-[0.16em]", label)}>
            After hours
          </p>
          <p className={cn("mt-1.5 text-sm leading-relaxed", value)}>
            Contact us through our answering service.
          </p>
        </div>
      </div>
    </div>
  );
}
