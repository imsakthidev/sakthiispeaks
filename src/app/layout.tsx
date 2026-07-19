export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import ChatAssistant from "@/components/ChatAssistant/ChatAssistant";
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
  title: "Sakthi Speaks | Web Developer, AI Solutions, Video Editor & Digital Creator",
  description: "Sakthi Speaks provides professional website development, AI solutions, video editing, storytelling, content writing, branding and social media management for businesses, startups and creators.",
  keywords: [
    "Sakthi Speaks", "Web Developer", "Full Stack Developer", "Frontend Developer", 
    "Portfolio Website Developer", "Business Website Developer", "Website Designer", 
    "Freelance Web Developer", "Website Development Services", "Custom Website Development", 
    "Responsive Website Design", "Landing Page Development", "React Developer", 
    "Next.js Developer", "JavaScript Developer", "TypeScript Developer", "Vite Developer",
    "Content Creator", "Content Writing Services", "Professional Content Writer", 
    "Storytelling Expert", "Script Writer", "Video Script Writing", "Creative Storytelling", 
    "Social Media Content Creator", "AI Content Creator", "Brand Storytelling",
    "Video Editor", "Professional Video Editing", "Shorts Video Editing", 
    "YouTube Video Editing", "Instagram Reel Editing", "Corporate Video Editing", 
    "Motion Graphics", "Color Grading", "Video Production", "Content Editing",
    "Social Media Manager", "Instagram Growth", "YouTube Growth", "Personal Branding", 
    "Brand Management", "Social Media Marketing", "Digital Branding", "Content Marketing", 
    "Social Media Strategy", "AI Solutions", "AI Automation", "ChatGPT Expert", 
    "AI Workflow", "Artificial Intelligence Services", "AI Consulting", "Business Automation",
    "Web Developer India", "Web Developer Tamil Nadu", "Web Developer Theni", 
    "Freelance Web Developer India", "Digital Marketing India"
  ],
  authors: [{ name: "Sakthi" }],
  openGraph: {
    title: "Sakthi Speaks | Building Digital Experiences That Drive Growth",
    description: "Web Developer, AI Solutions Expert & Digital Content Strategist helping businesses, startups and creators build powerful websites, engaging content and strong digital brands.",
    url: "https://sakthiispeaks.vercel.app",
    siteName: "Sakthi Speaks",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakthi Speaks | Web Developer, AI Solutions & Digital Creator",
    description: "Professional Website Development, Video Editing, AI Solutions, Storytelling, Content Writing & Social Media Management.",
  },
  icons: {
    icon: "/profile.PNG",
  },
  verification: {
    google: "Al0th2ZA8M6PKZHrUDc8cDJFbbR6lrI0wxS3iy0DP4c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-2ESGNN9035" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2ESGNN9035');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <ChatAssistant />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
