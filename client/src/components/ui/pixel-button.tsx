
import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelButtonVariants = cva(
  "relative inline-flex items-center justify-center font-press-start border-2 border-black transition-all duration-200 ease-in-out active:translate-y-1 active:shadow-none group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-maximally-red/90 to-maximally-red backdrop-blur-sm border-maximally-red/50 text-white hover:from-maximally-yellow/90 hover:to-maximally-yellow hover:text-black hover:shadow-[3px_3px_8px_rgba(255,215,0,0.4)] hover:border-maximally-yellow/60",
        secondary: "bg-gradient-to-br from-maximally-blue/90 to-maximally-blue backdrop-blur-sm border-maximally-blue/50 text-white hover:from-maximally-blue/80 hover:to-maximally-blue/70 hover:shadow-[3px_3px_8px_rgba(60,158,231,0.4)]",
        outline: "bg-white/80 backdrop-blur-md border-white/60 text-maximally-black hover:bg-white/90 hover:shadow-[3px_3px_8px_rgba(0,0,0,0.2)]",
        yellow: "bg-gradient-to-br from-maximally-yellow/90 to-maximally-yellow backdrop-blur-sm border-maximally-yellow/50 text-black hover:from-maximally-red/90 hover:to-maximally-red hover:text-white hover:shadow-[3px_3px_8px_rgba(229,9,20,0.4)] hover:border-maximally-red/60",
        glass: "bg-white/20 backdrop-blur-lg border-white/30 text-maximally-black hover:bg-white/30 hover:shadow-[3px_3px_12px_rgba(255,255,255,0.3)]",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm shadow-[3px_3px_0_0_#000000] gap-2",
        lg: "h-14 px-8 py-4 text-base shadow-[4px_4px_0_0_#000000] gap-3",
        xl: "h-16 px-10 py-5 text-lg shadow-[5px_5px_0_0_#000000] gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PixelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(pixelButtonVariants({ variant, size, className }), "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:group-hover:scale-110")}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton, pixelButtonVariants };
