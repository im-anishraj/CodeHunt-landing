"use client";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClass?: string;
  showDivider?: boolean;
}

export function SectionWrapper({
  children,
  id,
  label,
  title,
  subtitle,
  className,
  containerClass,
  showDivider = true,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id={id} className={cn("relative", className)}>
      {showDivider && <div className="section-divider" />}
      <div
        ref={ref}
        className={cn(
          "container py-16 sm:py-24",
          "reveal",
          isVisible && "visible",
          containerClass
        )}
      >
        {(label || title) && (
          <div className="text-center mb-14 sm:mb-16">
            {label && <p className="section-label">{label}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && (
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
