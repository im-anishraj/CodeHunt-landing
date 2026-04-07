import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    answer:
      "The competition is open to all students, developers, and tech enthusiasts who want to prove their coding mettle and compete for top prizes.",
    value: "item-2",
  },
  {
    question:
      "Is there any registration fee?",
    answer:
      "Please refer to the registration details. Typically, we keep basic registration free to ensure everyone has a chance to show their talent.",
    value: "item-3",
  },
  {
    question: "What are the prizes for the winners?",
    answer: "We have exciting prizes for the top performers! Check the 'Prizes' section on the landing page specifically for the breakdown of perks and cash prizes.",
    value: "item-4",
  },
  {
    question:
      "What programming languages are supported?",
    answer: "Most rounds focus on language-agnostic logic, while coding-specific rounds typically support popular languages like Python, Java, C++, and JavaScript.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary text-center mb-2 ">
          FAQS
        </h2>

        <h2 className="text-[42px] font-heading font-semibold text-center">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
