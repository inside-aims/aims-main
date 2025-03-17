import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import ThemeProvider from "@/context/Theme";

import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Atlas Innovations & Meta Solutions",
  description:
    "Meta Solutions is a leading provider of digital solutions and services that help businesses thrive in a rapidly changing world. Our comprehensive portfolio includes custom software development, data analytics, cybersecurity, and IT consulting. With a customer-centric approach and a passion for innovation, we deliver tailored solutions that enhance business performance, drive revenue growth, and foster sustainable competitiveness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
