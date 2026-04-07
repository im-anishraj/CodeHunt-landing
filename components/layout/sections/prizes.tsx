"use client";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { Trophy, Medal, Award } from "lucide-react";

export const PrizesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const podium = [
    {
      place: "2nd Place",
      icon: Medal,
      color: "text-gray-300",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/20",
      size: "h-40",
      iconSize: "w-10 h-10",
      delay: "100ms",
    },
    {
      place: "1st Place",
      icon: Trophy,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
      size: "h-52",
      iconSize: "w-14 h-14",
      delay: "0ms",
    },
    {
      place: "3rd Place",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      borderColor: "border-orange-600/20",
      size: "h-32",
      iconSize: "w-9 h-9",
      delay: "200ms",
    },
  ];

  return (
    <SectionWrapper id="prizes" label="The Incentive" title="Prizes & Perks">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Podium */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 mb-12">
          {podium.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.place}
                className={`reveal ${isVisible ? "visible" : ""} flex flex-col items-center`}
                style={{ transitionDelay: item.delay }}
              >
                {/* Icon floating above */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center mb-4 animate-float`}
                  style={{ animationDelay: `${idx * 0.5}s` }}
                >
                  <IconComp className={`${item.iconSize} ${item.color}`} />
                </div>

                {/* Podium block */}
                <div className={`w-28 sm:w-36 md:w-44 ${item.size} glass-card rounded-t-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
                  <span className={`text-sm sm:text-base font-bold ${item.color} relative z-10`}>
                    {item.place}
                  </span>
                  <div className="mt-2 relative z-10">
                    <span
                      className="text-xs sm:text-sm font-medium text-muted-foreground bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer"
                    >
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info card */}
        <div className={`reveal ${isVisible ? "visible" : ""} glass-card p-8 sm:p-10 text-center max-w-2xl mx-auto`} style={{ transitionDelay: "300ms" }}>
          <p className="text-lg sm:text-xl text-foreground font-semibold mb-3">
            🏆 Exciting prizes await!
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We&apos;re finalizing incredible cash prizes, swag, and exclusive perks for the top performers.
            Prizes will be announced before the event. Stay tuned!
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
