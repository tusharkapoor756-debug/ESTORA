import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ESTORA — Spaces That Shape Tomorrow | Premium Real Estate Developer",
  description: "ESTORA is a fictional luxury property development brand concept by TUSHAR LABS, crafting architectural landmarks of enduring proportion, calm material palettes, and thoughtful living.",
  keywords: ["Luxury Real Estate", "ESTORA", "Architectural Developments", "Contemporary Living", "Tushar Labs"],
  authors: [{ name: "Tushar Labs" }],
  openGraph: {
    title: "ESTORA — Spaces That Shape Tomorrow",
    description: "Premium contemporary real estate developer website concept.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="bg-[#F3F0E9] text-[#202A27] min-h-screen flex flex-col font-sans selection:bg-[#A88B65] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
