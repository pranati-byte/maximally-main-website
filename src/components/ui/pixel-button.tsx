
import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelButtonVariants = cva(
  "relative inline-flex items-center justify-center font-press-start border-2 border-black transition-all active:translate-y-1 active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-maximally-red text-white hover:bg-maximally-red/90",
        secondary: "bg-maximally-blue text-white hover:bg-maximally-blue/90",
        outline: "bg-white text-maximally-black hover:bg-gray-50",
      },
      size: {
        default: "h-12 px-6 text-sm shadow-[4px_4px_0_0_#000000]",
        lg: "h-14 px-8 text-base shadow-[6px_6px_0_0_#000000]",
        xl: "h-16 px-10 text-lg shadow-[8px_8px_0_0_#000000]",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(pixelButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton, pixelButtonVariants };
