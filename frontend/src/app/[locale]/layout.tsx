import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google"; // distinctive fonts
import "../globals.css"; // Adjusted path

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiGenvo | We Don't Sell Systems. We Sell Results.",
  description: "AiGenvo deploys AI agents trained to perform at the level of a top-performing human sales or support employee — available 24/7.",
};

import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
