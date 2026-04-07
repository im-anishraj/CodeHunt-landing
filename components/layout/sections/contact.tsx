"use client";
import { Building2, Clock, Mail } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const cards = [
    {
      icon: Building2,
      title: "Event Venue",
      content: "Arya College of Engineering",
      delay: "0ms",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "anishrajyadav97@gmail.com",
      delay: "80ms",
    },
    {
      icon: Clock,
      title: "Event Date",
      content: "11 April 2026",
      delay: "160ms",
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Connect With Us"
      subtitle="Have questions about the rounds, rules, or registration? Reach out and we'll get back to you."
    >
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto"
      >
        {cards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div
              key={idx}
              className={`reveal ${isVisible ? "visible" : ""} glass-card p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1 group`}
              style={{ transitionDelay: card.delay }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <IconComp className="text-primary w-5 h-5" />
              </div>
              <div className="font-semibold text-base mb-1">{card.title}</div>
              <div className="text-muted-foreground text-sm">
                {card.content}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
