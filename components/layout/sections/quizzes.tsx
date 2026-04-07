"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LayoutGrid, Crosshair, TerminalSquare, TrendingUp, ArrowRight } from "lucide-react";

const quizzes = [
  {
    title: "Round 1: Code Clash (Quiz)",
    description: "MCQs focusing on speed and fundamental programming concepts.",
    badge: "KNOWLEDGE",
    time: "11:00 - 11:40",
    icon: LayoutGrid,
    color: "text-[#F97316]", // Orange
    bgIcon: "bg-[#F97316]/10",
    eliminationInfo: "⚠️ Elimination Alert: The bottom 25% of participants will be eliminated after this round. Only the top 75% proceed.",
  },
  {
    title: "Round 2: Bug Hunting",
    description: "Identify and fix stubborn bugs in given code snippets under pressure.",
    badge: "PRECISION",
    time: "11:45 - 12:25",
    icon: Crosshair,
    color: "text-[#EAB308]", // Yellow/Amber
    bgIcon: "bg-[#EAB308]/10",
    eliminationInfo: "⚠️ Elimination Alert: The bottom 30% of participants will be eliminated after this round.",
  },
  {
    title: "Round 3: Blind Code Arena",
    description: "Write code with limited or no execution feedback. Pure problem-solving.",
    badge: "ACCURACY",
    time: "12:30 - 01:30",
    icon: TerminalSquare,
    color: "text-[#E11D48]", // Rose/Pink
    bgIcon: "bg-[#E11D48]/10",
    eliminationInfo: "⚠️ Elimination Alert: The competition gets fierce! 50% of the remaining participants will be eliminated here.",
  },
  {
    title: "Final Round: Output Showdown",
    description: "Analyze complex code and predict results to showcase deep understanding.",
    badge: "DEEP ANALYSIS",
    time: "01:40 - 02:40",
    icon: TrendingUp, // Teal
    color: "text-[#10B981]", // Emerald
    bgIcon: "bg-[#10B981]/10",
    eliminationInfo: "🏆 The Ultimate Finale: No more eliminations. Only the top 3 developers will emerge as the ultimate champions and claim the grand prizes!",
  },
];

export const QuizzesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="quizzes" className="container py-12 sm:py-16">
      <div className="text-center mb-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary text-center mb-2 ">
          Core Content
        </h2>
        <h2 className="text-[42px] font-heading font-semibold text-center">
          The 4 Epic Rounds
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {quizzes.map((quiz, idx) => {
          const IconStyle = quiz.icon;
          return (
            <Card 
              key={quiz.title} 
              className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform bg-[#0C0D10] border-white/5 rounded-3xl hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:border-white/10 ${expandedIndex === idx ? 'border-primary/30 ring-1 ring-primary/20' : ''}`}
              onClick={() => toggleExpand(idx)}
            >
              {/* Massive background number */}
              <div className="absolute right-0 -bottom-6 text-[180px] font-black text-white/[0.02] select-none pointer-events-none z-0 leading-none tracking-tighter">
                0{idx + 1}
              </div>

              <div className="p-7 flex flex-col h-full z-10 relative">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 ${quiz.bgIcon}`}>
                  <IconStyle className={`w-6 h-6 ${quiz.color}`} />
                </div>

                {/* Badge */}
                <div className="mb-5">
                  <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] border border-white/5 uppercase ${quiz.color} ${quiz.bgIcon}`}>
                    {quiz.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-white mb-4 leading-tight tracking-tight pr-4">
                  {quiz.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] font-medium text-muted-foreground/70 leading-relaxed mb-10 pr-2">
                  {quiz.description}
                </p>

                {/* Bottom spacer to push time & expansion block down */}
                <div className="flex-grow"></div>

                {/* Bottom Time Row */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
                  <span className="text-[12px] font-mono text-muted-foreground/60 tracking-wider">
                    {quiz.time}
                  </span>
                  <ArrowRight 
                    className={`w-[18px] h-[18px] text-muted-foreground/50 transition-transform duration-300 ${expandedIndex === idx ? 'rotate-90 text-primary' : ''}`} 
                  />
                </div>

                {/* Expansion Info (Elimination Alert) */}
                <div className={`grid transition-all duration-300 ease-in-out ${expandedIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm font-medium text-muted-foreground/80 leading-relaxed">
                      {quiz.eliminationInfo}
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
