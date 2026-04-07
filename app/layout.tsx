import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Code Hunt - Ultimate Programming Challenge",
  description:
    "Test your logic, speed, and coding skills in 4 intense rounds. Compete with the best and prove your ultimate skills at Code Hunt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans",
          inter.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* Ambient Background */}
          <div className="fixed inset-0 z-[-1] bg-background overflow-hidden">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,122,0,0.06)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-30" />

            {/* Primary glow — top left */}
            <div className="absolute -top-[25%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(255,122,0,0.1)_0%,_transparent_70%)] blur-[100px] animate-[orbFloat_18s_ease-in-out_infinite]" />

            {/* Secondary glow — bottom right */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle,_rgba(255,80,0,0.08)_0%,_transparent_70%)] blur-[120px] animate-[orbFloat_22s_ease-in-out_infinite_reverse]" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
          </div>

          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
