"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="container py-12 sm:py-16">
      <div className="section-divider mb-12" />

      <div className="glass-card p-8 sm:p-10 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Brand */}
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex items-center mb-3 group">
              <span className="text-xl font-heading font-bold tracking-tight">
                <span className="text-primary">&lt;</span>
                Code Hunt
                <span className="text-primary">/&gt;</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The ultimate programming challenge. 4 rounds. One champion.
              <br />
              <span className="text-primary/60 font-mono text-xs">
                April 11, 2026
              </span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/80 mb-1">
              Socials
            </h3>
            <Link
              href="https://chat.whatsapp.com/DkimJc5mRUhBi6vqv5aysD?mode=gi_t"
              target="_blank"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="mailto:[EMAIL_ADDRESS]"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Email
            </Link>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/80 mb-1">
              Help
            </h3>
            <Link
              href="#contact"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/80 mb-1">
              Quick Links
            </h3>
            <Link
              href="#quizzes"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Rounds
            </Link>
            <Link
              href="#timeline"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Timeline
            </Link>
            <Link
              href="#rules"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Rules
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-white/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 Designed and developed by{" "}
            <span className="text-primary font-medium">Team Code Hunt</span>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors group"
          >
            Back to top
            <div className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
