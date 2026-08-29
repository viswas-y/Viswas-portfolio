import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viswas Y | Full-Stack Developer & Next.js Architect",
  description: "Hey, I'm Viswas Y, a Full-Stack Developer based in Kerala, India. Specializing in Next.js, TypeScript, Node.js, and Python. Turning complex ideas into production-ready web platforms.",
  keywords: [
    "Viswas Y",
    "Full-Stack Developer",
    "Kerala Developer",
    "Next.js Architect",
    "Next.js Portfolio",
    "TypeScript Developer",
  ],
  authors: [{ name: "Viswas Y" }],
  openGraph: {
    title: "Viswas Y | Full-Stack Developer & Next.js Architect",
    description: "Hey, I'm Viswas Y, a Full-Stack Developer based in Kerala, India. Specializing in Next.js, TypeScript, Node.js, and Python.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
