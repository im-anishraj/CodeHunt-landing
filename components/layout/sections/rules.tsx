import { Shield, Code2, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RulesSection = () => {
  const ruleCategories = [
    {
      title: "Conduct",
      icon: Shield,
      rules: [
        "Participants must compete individually.",
        "Ensure fair play and maintain proper conduct throughout the event.",
        "Any attempt to disrupt other participants or the event will lead to disqualification.",
        "Decisions made by the judges will be final and binding.",
      ],
      color: "text-orange-500",
      bgAlert: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      dotColor: "bg-orange-500"
    },
    {
      title: "Code",
      icon: Code2,
      rules: [
        "All code must be originally written during the event.",
        "Plagiarism or copying from others will result in immediate disqualification.",
        "Participants must follow the time limits strictly for each round.",
      ],
      color: "text-amber-500",
      bgAlert: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      dotColor: "bg-amber-500"
    },
    {
      title: "Technology",
      icon: Laptop,
      rules: [
        "No use of external AI coding assistants is allowed during live rounds.",
        "No other cheating materials (notes, books, internet help, or external devices) are permitted.",
        "Use of unauthorized software or tools is strictly prohibited.",
      ],
      color: "text-teal-400",
      bgAlert: "bg-teal-400/10",
      borderColor: "border-teal-400/20",
      dotColor: "bg-teal-400"
    },
  ];

  return (
    <section id="rules" className="container py-12 sm:py-16">
      <div className="text-center mb-12">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary text-center mb-2 ">
          The Fine Print
        </h2>
        <h2 className="text-[42px] font-heading font-semibold text-center">
          Competition Rules
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {ruleCategories.map((category, idx) => {
          const IconStyle = category.icon;
          return (
            <Card 
              key={idx} 
              className="bg-muted/30 border-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-white/10 flex flex-col"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-6 px-6">
                <div className={`p-3 rounded-xl ${category.bgAlert} ${category.borderColor} border`}>
                  <IconStyle className={`w-6 h-6 ${category.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 pb-8 px-6 border-t border-white/5 mt-2">
                <ul className="space-y-4">
                  {category.rules.map((rule, ruleIdx) => (
                    <li key={ruleIdx} className="flex gap-4 items-start">
                      <div className={`mt-2 h-2 w-2 rounded-full shrink-0 ${category.dotColor}`}></div>
                      <span className="text-muted-foreground text-[15.5px] leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
