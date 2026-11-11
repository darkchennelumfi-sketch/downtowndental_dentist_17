import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  contentClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
  contentClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-5 text-[0.7rem] font-bold uppercase tracking-[0.2em]",
            dark ? "text-sage" : "text-pine",
          )}
        >
          <span className="mr-2 inline-block h-px w-6 translate-y-[-4px] bg-current opacity-60" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display text-balance text-[clamp(2.4rem,4.4vw,4.25rem)]",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "mt-6 max-w-2xl text-pretty text-[1.02rem] leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-cream/65" : "text-ink/68",
            contentClassName,
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
