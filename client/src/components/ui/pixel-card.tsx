
import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelCardVariants = cva(
  "bg-white/80 backdrop-blur-md border-2 border-white/40 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-[8px_8px_0_0_rgba(26,26,26,0.3)] hover:shadow-[12px_12px_0_0_rgba(26,26,26,0.4)] hover:-translate-y-2 hover:bg-white/90",
        flat: "shadow-[4px_4px_0_0_rgba(26,26,26,0.3)] hover:shadow-[6px_6px_0_0_rgba(26,26,26,0.4)] hover:-translate-y-1 hover:bg-white/90",
        glass: "bg-white/25 backdrop-blur-lg border-white/50 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-2 hover:bg-white/35",
      },
      padding: {
        none: "",
        default: "p-6",
        large: "p-8",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
);

interface PixelCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelCardVariants> {}

const PixelCard = forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelCardVariants({ variant, padding, className }))}
        {...props}
      />
    );
  }
);
PixelCard.displayName = "PixelCard";

export { PixelCard, pixelCardVariants };
