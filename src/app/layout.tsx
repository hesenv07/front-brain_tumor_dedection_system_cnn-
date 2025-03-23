import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CNN ilə Beyin Şişi Aşkarlama və Vizuallaşdırma Sistemi",
  description: "CNN ilə Beyin Şişi Aşkarlama və Vizuallaşdırma Sistemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
