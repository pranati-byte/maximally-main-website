
import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelCardVariants = cva(
  "bg-white border-2 border-black transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-[12px_12px_0_0_#1A1A1A] hover:-translate-y-2",
        flat: "shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[6px_6px_0_0_#1A1A1A] hover:-translate-y-1",
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
