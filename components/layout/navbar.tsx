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
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#quizzes", label: "Rounds" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#team", label: "Team" },
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
      className={`w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-black/20 border border-white/[0.06]"
          : "bg-transparent border border-transparent"
      }`}
    >
      <Link href="/" className="font-bold text-lg flex items-center ml-2 group">
        <span className="text-[22px] font-heading font-bold tracking-tight">
          <span className="text-primary">&lt;</span>
          Code Hunt
          <span className="text-primary">/&gt;</span>
        </span>
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden gap-2">
        <Button
          asChild
          className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-4 h-9 border-0 glow-btn text-sm"
        >
          <a href="#contact">Register</a>
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden w-6 h-6"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between bg-background/95 backdrop-blur-2xl border-white/[0.06]"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link
                    href="/"
                    className="flex items-center font-heading font-bold text-lg"
                  >
                    <span className="text-primary">&lt;</span>
                    Code Hunt
                    <span className="text-primary">/&gt;</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base h-11 hover:bg-primary/10 hover:text-primary"
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

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="gap-1">
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                href={href}
                className="text-[14px] font-medium px-4 py-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex mr-2">
        <Button
          asChild
          className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 glow-btn border-0"
        >
          <a href="https://forms.gle/kecBhr7TM8Z6s2ie8">Register Now</a>
        </Button>
      </div>
    </header>
  );
};
