"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date('2026-04-10T10:00:00');

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

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 justify-center p-1">
        {["days", "hours", "minutes", "seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center glass-card p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-foreground leading-none">--</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 justify-center p-1">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center glass-card p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] animate-glow-pulse"
        >
          <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-none">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5 font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="container w-full min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative code brackets */}
      <div className="absolute top-[15%] left-[8%] text-primary/[0.06] text-[120px] font-mono font-bold select-none hidden lg:block animate-float">&lt;/&gt;</div>
      <div className="absolute bottom-[15%] right-[8%] text-primary/[0.06] text-[100px] font-mono font-bold select-none hidden lg:block animate-float" style={{ animationDelay: '2s' }}>&#123;&#125;</div>

      <div className="flex flex-col items-center w-full lg:max-w-screen-xl mx-auto py-12 md:py-16">
        <div className="text-center flex flex-col items-center space-y-8 relative z-10 w-full max-w-5xl px-4">
          {/* Countdown Timer */}
          <div className="relative z-10 w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CountdownTimer />
          </div>

          {/* Badge */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <Badge
              variant="outline"
              className="text-xs sm:text-sm py-2 px-5 rounded-full bg-primary/[0.06] backdrop-blur-md border border-primary/20"
            >
              <span className="mr-2 text-primary flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Live
              </span>
              <span>Registrations Open!</span>
            </Badge>
          </div>

          {/* Heading */}
          <h1
            className="font-heading text-[36px] min-[400px]:text-[44px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-bold tracking-[-0.03em] leading-[1.05] text-center w-full mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Experience the Ultimate{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF8C00] via-[#FF6B00] to-[#FF4500] bg-clip-text text-transparent">
              Code Hunt
            </span>{" "}
            Challenge
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[700px] w-full leading-relaxed text-center mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.55s' }}
          >
            Master 4 intense tech rounds: from bug hunting to blind coding.
            <br className="hidden sm:block" />
            Compete with the best and prove your ultimate skills.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 text-base glow-btn group"
            >
              <a href="#contact">
                <Sparkles className="w-4 h-4 mr-2" />
                Register Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-foreground font-medium px-8 h-12 text-base"
            >
              <a href="https://chat.whatsapp.com/DkimJc5mRUhBi6vqv5aysD?mode=gi_t" target="_blank">
                Join WhatsApp
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center justify-center mt-12 sm:mt-16 cursor-pointer animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            <a
              href="#quizzes"
              className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-3 group"
            >
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                Explore Rounds
              </span>
              <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-all animate-bounce">
                <ArrowDown className="w-4 h-4 text-primary" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
