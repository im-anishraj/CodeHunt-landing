"use client";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

interface TeamProps {
  imageUrl: string | null;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const guests: TeamProps[] = [
  {
    imageUrl: "/images/Puja agarwal.png",
    firstName: "Dr. Pooja",
    lastName: "Agarwal",
    positions: ["Guest"],
    socialNetworks: [],
  },
  {
    imageUrl: "/images/Dr. Himanshu Arora.png",
    firstName: "Dr. Himanshu",
    lastName: "Arora",
    positions: ["Guest"],
    socialNetworks: [],
  },
  {
    imageUrl: "/images/Mr. Pawan Sen.png",
    firstName: "Mr. Pawan",
    lastName: "Sen",
    positions: ["Guest"],
    socialNetworks: [],
  },
  {
    imageUrl: "/images/Ajay-saini.png",
    firstName: "Dr. Ajay",
    lastName: "Saini",
    positions: ["Guest"],
    socialNetworks: [],
  },
  {
    imageUrl: "/images/Dr. Chayan.png",
    firstName: "Dr. Chayan",
    lastName: "Bhatt",
    positions: ["Guest"],
    socialNetworks: [],
  },
  {
    imageUrl: null,
    firstName: "Dr. Shilpi",
    lastName: "Mishra",
    positions: ["Guest"],
    socialNetworks: [],
  },
];

const facultyCoordinators: TeamProps[] = [
  {
    imageUrl: "/images/Mr. Sagar Pradhan.png",
    firstName: "Sagar",
    lastName: "Pradhan",
    positions: ["Faculty Coordinator"],
    socialNetworks: [{ name: "Phone", url: "tel:+917610915647" }],
  },
  {
    imageUrl: null,
    firstName: "Ajay",
    lastName: "Swarnkar",
    positions: ["Faculty Coordinator"],
    socialNetworks: [{ name: "Phone", url: "tel:+919929880347" }],
  },
];

const studentCoordinators: TeamProps[] = [
  {
    imageUrl: null,
    firstName: "Mohit",
    lastName: "Kumhar",
    positions: ["Organiser"],
    socialNetworks: [{ name: "Phone", url: "tel:+917976127452" }],
  },
  {
    imageUrl: null,
    firstName: "Anish",
    lastName: "Raj",
    positions: ["Organiser"],
    socialNetworks: [{ name: "Phone", url: "tel:+919060872477" }],
  },
  {
    imageUrl: null,
    firstName: "Dilansh",
    lastName: "Jain",
    positions: ["Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: null,
    firstName: "Madhav",
    lastName: "Tiwari",
    positions: ["Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: null,
    firstName: "Dishant",
    lastName: "Panchal",
    positions: ["Coordinator"],
    socialNetworks: [],
  },
  {
    imageUrl: null,
    firstName: "Kartik",
    lastName: "Rathore",
    positions: ["Coordinator"],
    socialNetworks: [],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return <LinkedInIcon />;
    case "X":
      return <XIcon />;
    case "Phone":
      return (
        <Phone className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors" />
      );
  }
};

function getInitials(first: string, last: string) {
  return (first[0] + last[0]).toUpperCase();
}

const TeamGrid = ({
  title,
  members,
  columns = "lg:grid-cols-3",
  compact = false,
}: {
  title: string;
  members: TeamProps[];
  columns?: string;
  compact?: boolean;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div className="mb-16" ref={ref}>
      <h3 className="text-lg sm:text-xl font-semibold text-center mb-8 text-primary/80 tracking-wide uppercase text-[12px]">
        — {title} —
      </h3>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 ${columns} gap-4 max-w-5xl mx-auto stagger-children`}
      >
        {members.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index,
          ) => (
            <div
              key={index}
              className={`reveal ${isVisible ? "visible" : ""} glass-card flex flex-col items-center text-center overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${compact ? "p-4" : "p-5 sm:p-6"}`}
            >
              {/* Avatar */}
              <div
                className={`${compact ? "w-16 h-16" : "w-20 h-20 sm:w-24 sm:h-24"} shrink-0 relative rounded-full overflow-hidden mb-4 border border-white/[0.08] group-hover:border-primary/30 transition-all duration-500`}
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    fill
                    sizes="96px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span
                      className={`font-heading font-bold text-primary/60 ${compact ? "text-base" : "text-lg sm:text-xl"}`}
                    >
                      {getInitials(firstName, lastName)}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h4
                className={`font-semibold tracking-tight ${compact ? "text-sm" : "text-base"}`}
              >
                {firstName}
                <span className="text-primary ml-1">{lastName}</span>
              </h4>

              {/* Position */}
              <div className="mt-1 mb-2">
                {positions.map((position, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-muted-foreground text-[12px] font-medium"
                  >
                    {position}
                  </p>
                ))}
              </div>

              {/* Social */}
              {socialNetworks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 mt-auto pt-2">
                  {socialNetworks.map(({ name, url }, sIdx) => (
                    <Link
                      key={sIdx}
                      href={url}
                      target="_blank"
                      className="hover:opacity-80 transition-all flex items-center gap-1.5 group/social"
                    >
                      {socialIcon(name)}
                      {name === "Phone" && (
                        <span className="text-[12px] font-medium text-muted-foreground group-hover/social:text-primary transition-colors whitespace-nowrap">
                          +91 {url.replace("tel:+91", "")}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <SectionWrapper id="team" label="Organizers" title="Meet The Team">
      <TeamGrid title="Special Guests" members={guests} />
      <TeamGrid
        title="Faculty Coordinators"
        members={facultyCoordinators}
        columns="lg:grid-cols-2 max-w-lg"
      />
      <TeamGrid
        title="Organisers & Coordinators"
        members={studentCoordinators}
        columns="lg:grid-cols-3"
        compact
      />
    </SectionWrapper>
  );
};
