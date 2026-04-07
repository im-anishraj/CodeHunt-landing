import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { User, Phone } from "lucide-react";

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
    socialNetworks: [
      { name: "Phone", url: "tel:+917610915647" }
    ],
  },
  {
    imageUrl: null,
    firstName: "Ajay",
    lastName: "Swarnkar",
    positions: ["Faculty Coordinator"],
    socialNetworks: [
      { name: "Phone", url: "tel:+919929880347" }
    ],
  },
];

const studentCoordinators: TeamProps[] = [
  {
    imageUrl: null,
    firstName: "Mohit",
    lastName: "Kumhar",
    positions: ["Organiser"],
    socialNetworks: [
      { name: "Phone", url: "tel:+917976127452" }
    ],
  },
  {
    imageUrl: null,
    firstName: "Anish",
    lastName: "Raj",
    positions: ["Organiser"],
    socialNetworks: [
      { name: "Phone", url: "tel:+919060872477" }
    ],
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
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return <LinkedInIcon />;
    case "X":
      return <XIcon />;
    case "Phone":
      return <Phone className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />;
  }
};

const TeamGrid = ({
  title,
  members,
  columns = "lg:grid-cols-3",
}: {
  title: string;
  members: TeamProps[];
  columns?: string;
}) => (
  <div className="mb-20">
    <h3 className="text-3xl font-semibold text-center mb-10 text-primary border-b border-primary/20 pb-4 max-w-xl mx-auto">
      {title}
    </h3>
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6 max-w-4xl mx-auto`}
    >
      {members.map(
        (
          { imageUrl, firstName, lastName, positions, socialNetworks },
          index,
        ) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card flex flex-col items-center text-center h-full overflow-hidden group/hoverimg border-secondary pt-8 px-4 pb-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
          >
            {/* Circular Image Container */}
            <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 relative bg-secondary/20 flex flex-col items-center justify-center overflow-hidden rounded-full shadow-[0_4px_12px_rgba(255,122,0,0.1)] border border-primary/20 mb-5 group-hover/hoverimg:scale-105 transition-transform duration-500">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`${firstName} ${lastName}`}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <User
                  className="w-14 h-14 text-muted-foreground/30"
                  strokeWidth={1.5}
                />
              )}
            </div>

            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-[19px] tracking-tight">
                {firstName}
                <span className="text-primary ml-1.5">{lastName}</span>
              </CardTitle>
            </CardHeader>
            <div className="flex-1 space-y-1 mb-2">
              {positions.map((position, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-[13px] font-medium"
                >
                  {position}
                </p>
              ))}
            </div>

            {socialNetworks.length > 0 && (
              <CardFooter className="p-0 mt-3 flex flex-wrap justify-center gap-4">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all flex items-center gap-2 group/social"
                  >
                    {socialIcon(name)}
                    {name === "Phone" && (
                      <span className="text-[14px] font-medium text-muted-foreground group-hover/social:text-primary transition-colors whitespace-nowrap">
                        +91 {url.replace("tel:+91", "")}
                      </span>
                    )}
                  </Link>
                ))}
              </CardFooter>
            )}
          </Card>
        ),
      )}
    </div>
  </div>
);

export const TeamSection = () => {
  return (
    <section id="team" className="container lg:w-[85%] py-12 sm:py-16">
      <div className="text-center mb-16">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary text-center mb-2  uppercase font-semibold">
          Organizers
        </h2>
        <h2 className="text-[42px] font-heading font-semibold text-center tracking-tight">
          Meet The Team
        </h2>
      </div>

      <TeamGrid title="Special Guests" members={guests} />
      <TeamGrid
        title="Faculty Coordinators"
        members={facultyCoordinators}
        columns="lg:grid-cols-2 max-w-2xl"
      />
      <TeamGrid
        title="Organiser and coordinators"
        members={studentCoordinators}
        columns="lg:grid-cols-5"
      />
    </section>
  );
};
