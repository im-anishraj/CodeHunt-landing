import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export const PrizesSection = () => {
  return (
    <section id="prizes" className="container py-12 sm:py-16 bg-muted/20">
      <div className="text-center mb-8">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-primary text-center mb-2 ">
          The Incentive
        </h2>
        <h2 className="text-[42px] font-heading font-semibold text-center">
          Prizes & Perks
        </h2>
      </div>

      <div className="flex justify-center max-w-3xl mx-auto mt-12">
        <Card className="bg-gradient-to-b border-primary/50 from-primary/20 to-card shadow-2xl w-full text-center py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
          <CardHeader className="relative z-10">
            <div className="mx-auto bg-primary/20 p-6 rounded-full mb-6">
              <Trophy className="w-16 h-16 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-4xl md:text-5xl font-extrabold tracking-tight">Revealing Soon</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10 mt-4">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Stay tuned! We are finalizing some incredible cash prizes, swag, and exclusive perks for the top performers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
