import { Badge } from "@/components/ui/badge";

export const TimelineSection = () => {
  const steps = [
    {
      time: "10:30 AM",
      title: "Opening Ceremony",
      desc: "Kickoff and introductions.",
      duration: "30 min"
    },
    {
      time: "11:00 AM - 11:40 AM",
      title: "Code Clash - Quiz",
      desc: "Test your fundamentals with a quiz.",
      duration: "40 min"
    },
    {
      time: "11:45 AM - 12:25 PM",
      title: "Bug Hunting",
      desc: "Identify and fix bugs in given code.",
      duration: "40 min"
    },
    {
      time: "12:30 PM - 01:30 PM",
      title: "Blind Code Arena",
      desc: "Code without running or testing.",
      duration: "60 min"
    },
    {
      time: "01:40 PM - 02:40 PM",
      title: "Output Showdown",
      desc: "Reconstruct logic from given outputs.",
      duration: "60 min"
    },
  ];

  return (
    <section id="timeline" className="container py-12 sm:py-16 overflow-hidden">
      <div className="text-center mb-16 lg:mb-24">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary text-center mb-2 ">
          Logistics
        </h2>
        <h2 className="text-[42px] font-heading font-semibold text-center">
          Event Timeline
        </h2>
      </div>

      {/* Mobile & Tablet Vertical Timeline */}
      <div className="lg:hidden max-w-3xl mx-auto border-l-[3px] border-[#FF7A00]/20 pl-8 space-y-10 py-2 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Orange Dots at Stops */}
            <div className="absolute -left-[40.5px] top-1.5 h-4 w-4 rounded-full border-2 border-[#FF7A00] bg-background group-hover:bg-[#FF7A00] transition-colors duration-300 shadow-[0_0_8px_rgba(255,122,0,0.6)]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
              <span 
                className="text-muted-foreground text-[14px] min-w-[155px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {step.time}
              </span>
              
              <div className="flex flex-wrap items-center gap-3">
                <h3 
                  className="text-xl text-foreground font-medium"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                
                {/* Duration Chip per round */}
                <Badge 
                  variant="outline" 
                  className="text-[11px] h-6 bg-[#FF7A00]/10 text-[#FF7A00] border-[#FF7A00]/30 hover:bg-[#FF7A00]/20 rounded-full px-3"
                >
                  {step.duration}
                </Badge>
              </div>
            </div>
            
            {/* Description properly aligned below title on desktop */}
            <p className="text-muted-foreground sm:ml-[171px] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Zig-Zag Timeline */}
      <div className="hidden lg:flex relative w-full justify-between items-center max-w-6xl mx-auto py-48">
        {/* Continuous Horizontal Snake Line */}
        <div className="absolute top-1/2 left-0 right-0 w-full h-[80px] -translate-y-1/2 z-0">
          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path 
              d="M 0,10 
                 L 10,10 
                 C 15,10 15,2 20,2 
                 C 25,2 25,10 30,10 
                 C 35,10 35,18 40,18 
                 C 45,18 45,10 50,10 
                 C 55,10 55,2 60,2 
                 C 65,2 65,10 70,10 
                 C 75,10 75,18 80,18 
                 C 85,18 85,10 90,10 
                 L 100,10"
              fill="none" 
              stroke="url(#snakeGradient)" 
              strokeWidth="3" 
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,122,0,0)" />
                <stop offset="15%" stopColor="rgba(255,122,0,0.5)" />
                <stop offset="85%" stopColor="rgba(255,122,0,0.5)" />
                <stop offset="100%" stopColor="rgba(255,122,0,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {steps.map((step, idx) => {
          // Time zig-zag logic: 'isUp' means Time is UP, Title is DOWN.
          // User requested "write time in zig zag from like one up then down"
          // Even indices (0, 2, 4) -> Time Up
          // Odd indices (1, 3) -> Time Down
          const timeUp = idx % 2 === 0;

          return (
            <div key={idx} className="relative z-10 flex flex-col items-center group w-1/5">
              
              {/* Above Line Container */}
              <div className={`absolute bottom-[calc(100%+16px)] w-[180%] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 ${timeUp ? '' : 'hidden'}`}>
                <span 
                  className="text-[#FF7A00] text-[15px] xl:text-[16px] mb-3 bg-[#FF7A00]/10 px-4 py-1.5 rounded-full border border-[#FF7A00]/30 shadow-[0_0_15px_rgba(255,122,0,0.15)] whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {step.time}
                </span>
                <h3 className="text-[17px] xl:text-[19px] text-foreground font-semibold mb-2 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[13px] leading-snug px-2 mb-3">
                  {step.desc}
                </p>
                <Badge variant="outline" className="text-[11px] bg-background border-[#FF7A00]/20 px-3 py-0.5 text-muted-foreground shadow-sm mb-2">
                  {step.duration}
                </Badge>
                {/* Fading connecting stem */}
                <div className="w-[2px] h-6 bg-gradient-to-b from-[#FF7A00]/80 to-transparent rounded-full shadow-[0_0_8px_rgba(255,122,0,0.5)]" />
              </div>

              {/* Center Dot on Line */}
              <div className="h-6 w-6 rounded-full border-4 border-background bg-[#FF7A00] group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(255,122,0,0.8)] transition-all duration-300 z-20" />

              {/* Below Line Container */}
              <div className={`absolute top-[calc(100%+16px)] w-[180%] flex flex-col items-center text-center transition-all duration-300 hover:translate-y-2 ${!timeUp ? '' : 'hidden'}`}>
                {/* Fading connecting stem */}
                <div className="w-[2px] h-6 bg-gradient-to-t from-[#FF7A00]/80 to-transparent rounded-full shadow-[0_0_8px_rgba(255,122,0,0.5)] mb-2" />
                <span 
                  className="text-[#FF7A00] text-[15px] xl:text-[16px] mb-3 bg-[#FF7A00]/10 px-4 py-1.5 rounded-full border border-[#FF7A00]/30 shadow-[0_0_15px_rgba(255,122,0,0.15)] whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {step.time}
                </span>
                <h3 className="text-[17px] xl:text-[19px] text-foreground font-semibold mb-2 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[13px] leading-snug px-2 mb-3">
                  {step.desc}
                </p>
                <Badge variant="outline" className="text-[11px] bg-background border-[#FF7A00]/20 px-3 py-0.5 text-muted-foreground shadow-sm">
                  {step.duration}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
