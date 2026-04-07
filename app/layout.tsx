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
  title: "code Hunt - Landing template",
  description: "Landing template from code Hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
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
          {/* Background Video Wrapper */}
          <div className="fixed inset-0 z-[-1] bg-background">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/images/original.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.94)_0%,_rgba(0,0,0,1)_100%)]" />
          </div>

          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
