// ABOUTME: Root layout for VaniBlu Quiz
// ABOUTME: Sets up RTL, Rubik font, and metadata

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quiz-swart-two-18.vercel.app'),
  title: "VaniBlu | מבחן סקינקייר לעור צעיר",
  description: "גלי אם מוצרי הטיפוח שלך באמת מתאימים לעור שלך",
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'VaniBlu | מבחן סקינקייר לעור צעיר',
    description: 'גלי אם מוצרי הטיפוח שלך באמת מתאימים לעור שלך',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
