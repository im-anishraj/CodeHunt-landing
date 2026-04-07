import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { QuizzesSection } from "@/components/layout/sections/quizzes";
import { TimelineSection } from "@/components/layout/sections/timeline";
import { PrizesSection } from "@/components/layout/sections/prizes";
import { RulesSection } from "@/components/layout/sections/rules";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Code Hunt - Ultimate Programming Challenge",
  description:
    "Test your logic, speed, and coding skills in 4 intense rounds: Quiz, Bug Hunting, Blind Coding, and Output Prediction. Compete with the best!",
  openGraph: {
    type: "website",
    url: "https://codehunt.com",
    title: "Code Hunt - Ultimate Programming Challenge",
    description:
      "Join the most exciting tech competition of the year. 4 rounds of intense coding challenges.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Code Hunt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://codehunt.com",
    title: "Code Hunt - Ultimate Programming Challenge",
    description: "Are you the best coder? Prove it at Code Hunt.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuizzesSection />
      <TimelineSection />
      <RulesSection />
      <PrizesSection />
      <TeamSection />
      <FAQSection />
      <CommunitySection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
