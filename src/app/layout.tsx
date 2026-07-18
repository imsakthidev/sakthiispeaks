import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "Sakthi | Sakthi Speaks - Digital Experiences & Web Development",
  description: "Portfolio of Sakthi, Founder of Sakthi Speaks. Specializing in Web Development, Content Creation, Video Editing, AI Solutions, and Personal Branding.",
  keywords: ["Sakthi Speaks", "Web Developer", "Software Engineer", "Content Creator", "Video Editor", "AI Developer", "Next.js", "React", "Personal Branding", "Digital Agency"],
  authors: [{ name: "Sakthi" }],
  openGraph: {
    title: "Sakthi Speaks | Digital Experiences",
    description: "Building Digital Experiences That Help Brands Grow. Explore my portfolio of Web Development, Video Editing, and AI Solutions.",
    url: "https://sakthiispeaks.vercel.app",
    siteName: "Sakthi Speaks",
    images: [
      {
        url: "/profile.PNG", // You should replace this with a larger OpenGraph image (1200x630) later
        width: 800,
        height: 600,
        alt: "Sakthi Speaks Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakthi Speaks",
    description: "Building Digital Experiences That Help Brands Grow.",
    images: ["/profile.PNG"],
  },
  icons: {
    icon: "/profile.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
