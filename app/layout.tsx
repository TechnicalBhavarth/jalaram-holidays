// app/layout.tsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400","600"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["700"] });

export const metadata = {
  title: "Jalaram Holidays — Trip Finder",
  description: "Find the right destination by month, mood, and budget.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
