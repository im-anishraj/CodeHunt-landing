"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#quizzes", label: "Quizzes" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#team", label: "Team" },
];

const groupedRoutes: RouteProps[] = [
  { href: "#rules", label: "Rules" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-full flex justify-between items-center p-2 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/60 backdrop-blur-[20px] shadow-lg border-b border-border/50" 
          : "bg-transparent border-transparent"
      }`}
    >
      <Link href="/" className="font-bold text-lg flex items-center ml-2">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 text-white" />
        Code Hunt
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden gap-2">
        <Button variant="default" className="rounded-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-semibold px-4 h-9 border-0">
          Register Now
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 text-white" />
                    Code Hunt
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                
                <Separator className="my-2" />
                <div className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">More</div>
                
                {groupedRoutes.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="gap-2">
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink href={href} className="text-[15px] font-medium px-4 py-2 hover:bg-muted/50 rounded-full transition-colors text-foreground/80 hover:text-foreground">
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[15px] font-medium bg-transparent hover:bg-muted/50 rounded-full transition-colors text-foreground/80 hover:text-foreground">
              More
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-xl">
                {groupedRoutes.map(({ href, label }) => (
                  <li key={href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-[15px] font-medium leading-none">{label}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex mr-2">
        <Button className="rounded-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-semibold px-6 shadow-lg shadow-[#FF7A00]/20 border-0">
          Register Now
        </Button>
      </div>
    </header>
  );
};
