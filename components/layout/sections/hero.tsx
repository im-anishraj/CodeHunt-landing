"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-3 sm:gap-6 justify-center mt-8 p-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center bg-card/60 backdrop-blur-md border border-white/5 p-3 sm:p-4 rounded-2xl min-w-[70px] sm:min-w-[100px] shadow-2xl">
          <span className="font-heading text-3xl sm:text-5xl font-bold text-foreground leading-none">{value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground mt-2">{label}</span>
        </div>
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="container w-full min-h-[85vh] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full lg:max-w-screen-xl mx-auto py-12 md:py-16">
        <div className="text-center flex flex-col items-center space-y-6 relative z-10 w-full max-w-5xl px-2">
          
          <Badge variant="outline" className="text-xs sm:text-sm py-1.5 px-4 rounded-full bg-background/50 backdrop-blur-md border border-primary/20 mb-2">
            <span className="mr-2 text-primary flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> New
            </span>
            <span className="truncate">Registrations Open!</span>
          </Badge>

          <h1 className="font-heading text-[38px] min-[400px]:text-[46px] sm:text-[64px] md:text-[76px] lg:text-[84px] font-bold tracking-[-2px] leading-[1.05] text-center w-full mx-auto">
            Experience the Ultimate <br />
            <span className="text-[#FF7A00]">Code Hunt</span> Challenge
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-[800px] w-full leading-relaxed text-center mt-4 sm:mt-6 mx-auto px-4">
            Master 4 intense tech rounds: from bug hunting to blind coding.<br />
            Compete with the best and prove your ultimate skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8 sm:mt-10">
            <Button className="h-[48px] sm:h-[52px] rounded-full px-8 bg-[#FF7A00] hover:bg-[#E66E00] text-white font-semibold text-base sm:text-lg group w-full sm:w-auto shadow-[0_0_20px_rgba(255,122,0,0.3)] border-0">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            

          </div>
        </div>

        <div className="relative z-10 w-full mt-12 sm:mt-16 md:mt-20">
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 to-[#FF7A00]/5 blur-[120px] -z-10" />
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};
