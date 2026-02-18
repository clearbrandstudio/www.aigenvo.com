import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest font-display",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)]",
                secondary:
                    "bg-secondary text-black hover:bg-secondary/80",
                outline:
                    "border border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm",
                ghost: "hover:bg-white/5 hover:text-primary",
                link: "text-primary underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg hover:shadow-xl hover:scale-[1.02]",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-md px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<"button">, "ref">, // Framer Motion props
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // We utilize framer-motion's motion.button for built-in animations
        // Note: asChild is not fully supported with motion.button directly in this simple implementation 
        // without more complex setup (Slot component), so we omit it for now or implement differently if needed.
        // For this project, let's keep it simple with motion.button.

        return (
            <motion.button
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
