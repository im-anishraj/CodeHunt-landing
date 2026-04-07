"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LayoutGrid, Crosshair, TerminalSquare, TrendingUp, ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const quizzes = [
  {
    title: "Round 1: Code Clash",
    subtitle: "Quiz",
    description: "MCQs focusing on speed and fundamental programming concepts.",
    badge: "KNOWLEDGE",
    time: "11:00 – 11:40",
    icon: LayoutGrid,
    color: "text-orange-400",
    bgIcon: "bg-orange-400/10",
    borderGlow: "hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.15)]",
    eliminationInfo: "⚠️ Bottom 25% eliminated. Only the top 75% proceed to Round 2.",
  },
  {
    title: "Round 2: Bug Hunting",
    subtitle: "Debug",
    description: "Identify and fix stubborn bugs in given code snippets under pressure.",
    badge: "PRECISION",
    time: "11:45 – 12:25",
    icon: Crosshair,
    color: "text-amber-400",
    bgIcon: "bg-amber-400/10",
    borderGlow: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.15)]",
    eliminationInfo: "⚠️ Bottom 30% eliminated after this round.",
  },
  {
    title: "Round 3: Blind Code",
    subtitle: "Arena",
    description: "Write code with no execution feedback. Pure problem-solving ability.",
    badge: "ACCURACY",
    time: "12:30 – 01:30",
    icon: TerminalSquare,
    color: "text-rose-400",
    bgIcon: "bg-rose-400/10",
    borderGlow: "hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.15)]",
    eliminationInfo: "⚠️ 50% of remaining participants eliminated here.",
  },
  {
    title: "Final: Output Showdown",
    subtitle: "",
    description: "Analyze complex code and predict results to showcase deep understanding.",
    badge: "DEEP ANALYSIS",
    time: "01:40 – 02:40",
    icon: TrendingUp,
    color: "text-emerald-400",
    bgIcon: "bg-emerald-400/10",
    borderGlow: "hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)]",
    eliminationInfo: "🏆 The Ultimate Finale — Top 3 developers claim the grand prizes!",
  },
];

export const QuizzesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <SectionWrapper
      id="quizzes"
      label="Core Content"
      title="The 4 Epic Rounds"
      subtitle="From quick-fire quizzes to blind coding — each round tests a different dimension of your programming mastery."
    >
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto stagger-children`}
      >
        {quizzes.map((quiz, idx) => {
          const IconComp = quiz.icon;
          return (
            <Card
              key={quiz.title}
              className={`reveal ${isVisible ? 'visible' : ''} relative overflow-hidden cursor-pointer transition-all duration-500 glass-card rounded-2xl hover:-translate-y-2 ${quiz.borderGlow} ${
                expandedIndex === idx ? "border-primary/30 ring-1 ring-primary/20" : ""
              }`}
              onClick={() => toggleExpand(idx)}
            >
              {/* Background round number */}
              <div className="absolute right-2 -bottom-4 text-[140px] font-black text-white/[0.02] select-none pointer-events-none z-0 leading-none tracking-tighter font-heading">
                0{idx + 1}
              </div>

              <div className="p-6 flex flex-col h-full z-10 relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/[0.06] ${quiz.bgIcon}`}>
                  <IconComp className={`w-5 h-5 ${quiz.color}`} />
                </div>

                {/* Badge */}
                <div className="mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-[0.15em] border border-white/[0.06] uppercase ${quiz.color} ${quiz.bgIcon}`}>
                    {quiz.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight tracking-tight pr-4">
                  {quiz.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-8 pr-2">
                  {quiz.description}
                </p>

                <div className="flex-grow" />

                {/* Bottom: Time + Expand */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-mono text-muted-foreground/60 tracking-wider">
                    {quiz.time}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground/40 transition-transform duration-300 ${
                      expandedIndex === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>

                {/* Expansion */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    expandedIndex === idx
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.06] text-[13px] text-muted-foreground leading-relaxed">
                      {quiz.eliminationInfo}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
