import { Building2, Clock, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-12 sm:py-24">
      <section className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="mb-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
            Contact
          </h2>
          <h2 className="text-[42px] font-heading font-semibold tracking-tight">Connect With Us</h2>
        </div>
        <p className="mb-16 text-muted-foreground text-lg">
          Have questions about the rounds, rules, or registration? Reach out to our organizing team and we&apos;ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full relative z-10">
          <div className="flex flex-col items-center gap-2 p-6 bg-card/50 rounded-2xl border border-secondary/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Building2 className="text-primary w-6 h-6" />
            </div>
            <div className="font-bold text-lg">Event HQ</div>
            <div className="text-muted-foreground text-sm">Tech Campus Auditorium, Main Wing</div>
          </div>

          <div className="flex flex-col items-center gap-2 p-6 bg-card/50 rounded-2xl border border-secondary/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Mail className="text-primary w-6 h-6" />
            </div>
            <div className="font-bold text-lg">Email Us</div>
            <div className="text-muted-foreground text-sm">contact@codehunt.com</div>
          </div>

          <div className="flex flex-col items-center gap-2 p-6 bg-card/50 rounded-2xl border border-secondary/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="font-bold text-lg">Support Hours</div>
            <div className="text-muted-foreground text-sm text-center leading-relaxed">
              Monday - Saturday<br />9AM - 6PM
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
