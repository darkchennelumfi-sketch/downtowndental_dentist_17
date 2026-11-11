import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-cream shadow-[0_14px_34px_-18px_rgba(13,47,49,0.75)] hover:bg-pine hover:shadow-[0_18px_40px_-16px_rgba(13,47,49,0.6)] active:scale-[0.985]",
        clay: "bg-clay-deep text-cream shadow-[0_14px_34px_-18px_rgba(169,82,54,0.85)] hover:bg-clay-ink active:scale-[0.985]",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink/45 hover:bg-ink/5 active:scale-[0.985]",
        light:
          "bg-cream text-ink hover:bg-white active:scale-[0.985] shadow-[0_14px_34px_-20px_rgba(0,0,0,0.45)]",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        "ghost-light": "bg-transparent text-cream hover:bg-white/10",
        link: "rounded-none p-0 text-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-[0.8rem]",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[0.95rem]",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
