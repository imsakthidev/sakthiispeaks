import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
  title: "Sakthi | Sakthi Speaks",
  description: "Portfolio of Sakthivelpandian P, a Software Engineer, AI Developer, Content Creator, and Central Armed Police Force personnel.",
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
      </body>
    </html>
  );
}
