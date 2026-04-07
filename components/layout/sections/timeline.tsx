"use client";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export const TimelineSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    { time: "10:30 AM", title: "Opening Ceremony", desc: "Kickoff and introductions.", duration: "30 min" },
    { time: "11:00 – 11:40", title: "Code Clash – Quiz", desc: "Test your fundamentals with a quiz.", duration: "40 min" },
    { time: "11:45 – 12:25", title: "Bug Hunting", desc: "Identify and fix bugs in given code.", duration: "40 min" },
    { time: "12:30 – 01:30", title: "Blind Code Arena", desc: "Code without running or testing.", duration: "60 min" },
    { time: "01:40 – 02:40", title: "Output Showdown", desc: "Reconstruct logic from given outputs.", duration: "60 min" },
  ];

  return (
    <SectionWrapper id="timeline" label="Logistics" title="Event Timeline">
      {/* Mobile & Tablet Vertical Timeline */}
      <div ref={ref} className="lg:hidden max-w-2xl mx-auto relative pl-8 space-y-8 py-2">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative group reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            {/* Dot */}
            <div className="absolute -left-[21px] top-1 h-3.5 w-3.5 rounded-full border-[2.5px] border-primary bg-background group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(255,122,0,0.6)] transition-all duration-300" />

            <div className="glass-card p-5 rounded-xl">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-primary text-[13px] font-mono font-medium">
                  {step.time}
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] h-5 bg-primary/10 text-primary border-primary/20 rounded-full px-2.5"
                >
                  {step.duration}
                </Badge>
              </div>
              <h3 className="text-lg text-foreground font-semibold mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Zig-Zag Timeline */}
      <div className="hidden lg:flex relative w-full justify-between items-center max-w-6xl mx-auto py-48">
        {/* Snake Line SVG */}
        <div className="absolute top-1/2 left-0 right-0 w-full h-[80px] -translate-y-1/2 z-0">
          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path
              d="M 0,10 L 10,10 C 15,10 15,2 20,2 C 25,2 25,10 30,10 C 35,10 35,18 40,18 C 45,18 45,10 50,10 C 55,10 55,2 60,2 C 65,2 65,10 70,10 C 75,10 75,18 80,18 C 85,18 85,10 90,10 L 100,10"
              fill="none"
              stroke="url(#snakeGradient)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,122,0,0)" />
                <stop offset="15%" stopColor="rgba(255,122,0,0.4)" />
                <stop offset="85%" stopColor="rgba(255,122,0,0.4)" />
                <stop offset="100%" stopColor="rgba(255,122,0,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {steps.map((step, idx) => {
          const timeUp = idx % 2 === 0;
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center group w-1/5">
              {/* Above Line */}
              <div className={`absolute bottom-[calc(100%+16px)] w-[180%] flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1 ${timeUp ? "" : "hidden"}`}>
                <span className="text-primary text-[14px] mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 whitespace-nowrap font-mono font-medium">
                  {step.time}
                </span>
                <h3 className="text-[17px] text-foreground font-semibold mb-1.5 leading-tight">{step.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-snug px-2 mb-2.5">{step.desc}</p>
                <Badge variant="outline" className="text-[10px] bg-background/50 border-primary/15 px-3 py-0.5 text-muted-foreground mb-2">
                  {step.duration}
                </Badge>
                <div className="w-[2px] h-5 bg-gradient-to-b from-primary/60 to-transparent rounded-full" />
              </div>

              {/* Center Dot */}
              <div className="h-5 w-5 rounded-full border-[3px] border-background bg-primary group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(255,122,0,0.7)] transition-all duration-300 z-20" />

              {/* Below Line */}
              <div className={`absolute top-[calc(100%+16px)] w-[180%] flex flex-col items-center text-center transition-all duration-300 group-hover:translate-y-1 ${!timeUp ? "" : "hidden"}`}>
                <div className="w-[2px] h-5 bg-gradient-to-t from-primary/60 to-transparent rounded-full mb-2" />
                <span className="text-primary text-[14px] mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 whitespace-nowrap font-mono font-medium">
                  {step.time}
                </span>
                <h3 className="text-[17px] text-foreground font-semibold mb-1.5 leading-tight">{step.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-snug px-2 mb-2.5">{step.desc}</p>
                <Badge variant="outline" className="text-[10px] bg-background/50 border-primary/15 px-3 py-0.5 text-muted-foreground">
                  {step.duration}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
