"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What exactly is Code Hunt?",
    answer: "Code Hunt is a premier competitive programming event consisting of 4 intense rounds (Quiz, Bug Hunting, Blind Coding, and Output Prediction) designed to test your logic, speed, and deep understanding of programming.",
    value: "item-1",
  },
  {
    question: "Who can participate in this challenge?",
    answer: "The competition is open to all students, developers, and tech enthusiasts who want to prove their coding mettle and compete for top prizes.",
    value: "item-2",
  },
  {
    question: "Is there any registration fee?",
    answer: "Please refer to the registration details. Typically, we keep basic registration free to ensure everyone has a chance to show their talent.",
    value: "item-3",
  },
  {
    question: "What are the prizes for the winners?",
    answer: "We have exciting prizes for the top performers! Check the 'Prizes' section on the landing page for the breakdown of perks and cash prizes.",
    value: "item-4",
  },
  {
    question: "What programming languages are supported?",
    answer: "Most rounds focus on language-agnostic logic, while coding-specific rounds typically support popular languages like Python, Java, C++, and JavaScript.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionWrapper id="faq" label="FAQS" title="Common Questions" containerClass="max-w-2xl mx-auto">
      <div ref={ref}>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQList.map(({ question, answer, value }, idx) => (
            <AccordionItem
              key={value}
              value={value}
              className={`reveal ${isVisible ? "visible" : ""} glass-card rounded-xl px-5 border-none`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline py-5 text-foreground/90 hover:text-foreground">
                <span className="flex items-center gap-3">
                  <span className="text-primary/40 text-xs font-mono">{String(idx + 1).padStart(2, "0")}</span>
                  {question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[14px] leading-relaxed pb-5 pl-8">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};
