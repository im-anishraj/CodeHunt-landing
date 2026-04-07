"use client";
import { Shield, Code2, Laptop, Check } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export const RulesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const ruleCategories = [
    {
      title: "Conduct",
      icon: Shield,
      rules: [
        "Participants must compete individually.",
        "Ensure fair play and maintain proper conduct throughout the event.",
        "Any attempt to disrupt other participants will lead to disqualification.",
        "Decisions made by the judges will be final and binding.",
      ],
      color: "text-orange-400",
      bgIcon: "bg-orange-400/10",
      borderColor: "border-orange-400/15",
      dotColor: "bg-orange-400",
    },
    {
      title: "Code",
      icon: Code2,
      rules: [
        "All code must be originally written during the event.",
        "Plagiarism or copying from others results in immediate disqualification.",
        "Participants must follow time limits strictly for each round.",
      ],
      color: "text-amber-400",
      bgIcon: "bg-amber-400/10",
      borderColor: "border-amber-400/15",
      dotColor: "bg-amber-400",
    },
    {
      title: "Technology",
      icon: Laptop,
      rules: [
        "No use of external AI coding assistants during live rounds.",
        "No cheating materials (notes, books, internet help, or external devices).",
        "Use of unauthorized software or tools is strictly prohibited.",
      ],
      color: "text-teal-400",
      bgIcon: "bg-teal-400/10",
      borderColor: "border-teal-400/15",
      dotColor: "bg-teal-400",
    },
  ];

  return (
    <SectionWrapper id="rules" label="The Fine Print" title="Competition Rules">
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto stagger-children"
      >
        {ruleCategories.map((category, idx) => {
          const IconComp = category.icon;
          return (
            <div
              key={idx}
              className={`reveal ${isVisible ? "visible" : ""} glass-card p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.bgIcon} border ${category.borderColor}`}>
                  <IconComp className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Rules list */}
              <ul className="space-y-4 flex-1">
                {category.rules.map((rule, ruleIdx) => (
                  <li key={ruleIdx} className="flex gap-3 items-start">
                    <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${category.bgIcon}`}>
                      <Check className={`w-3 h-3 ${category.color}`} />
                    </div>
                    <span className="text-muted-foreground text-[14px] leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
