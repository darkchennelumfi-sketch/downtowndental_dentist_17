import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-13 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-base text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 placeholder:text-ink/68 focus:border-pine focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine/15 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
