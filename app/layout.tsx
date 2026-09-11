import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Why You Matter | You Are Irreplaceable",
  description: "A global sanctuary for moments of crisis, doubt, and mental exhaustion. 250+ countries & territories crisis directory (ISO 3166-1), grounding tools, and the reasons why your existence matters.",
  keywords: ["mental health", "why you matter", "crisis support 250 countries", "global crisis lines", "panic button", "grounding", "breathing exercise", "thoughts are not facts", "sublimation", "ISO 3166-1"],
  openGraph: {
    title: "Why You Matter | A Sanctuary in the Dark",
    description: "Your thoughts are not facts. Your existence changes everything. Global crisis directory across 250+ countries & territories.",
    type: "website",
    url: "https://why-you-matter.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#070b14] text-slate-100 min-h-screen flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
