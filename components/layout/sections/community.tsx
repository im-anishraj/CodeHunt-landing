"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export const CommunitySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionWrapper id="community" showDivider={true}>
      <div
        ref={ref}
        className={`reveal ${isVisible ? "visible" : ""} max-w-3xl mx-auto text-center`}
      >
        <div className="glass-card p-10 sm:p-14 rounded-3xl relative overflow-hidden">
          {/* Decorative gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 blur-[80px] rounded-full" />

          {/* WhatsApp-style icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#25D366]" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>

          <h3 className="text-3xl sm:text-4xl font-heading font-bold mb-4 relative z-10">
            Ready to join this{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Community?
            </span>
          </h3>

          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
            Join our vibrant WhatsApp community! Connect, share, and grow with like-minded enthusiasts.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold px-8 h-12 text-base group relative z-10"
          >
            <a href="https://chat.whatsapp.com/DkimJc5mRUhBi6vqv5aysD?mode=gi_t" target="_blank">
              Join WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
