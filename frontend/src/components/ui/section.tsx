import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    padded?: boolean;
    fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, container = true, padded = true, fullWidth = false, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "relative w-full overflow-hidden",
                    padded && "py-16 md:py-24",
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className={cn("mx-auto w-full px-4 md:px-8", fullWidth ? "max-w-none" : "max-w-7xl")}>
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
