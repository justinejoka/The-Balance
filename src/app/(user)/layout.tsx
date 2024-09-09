import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react';
import { ThemeProvider } from "@/components/ThemeContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import ThemeScript from "@/components/ThemeScript";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Balance | Your work-life harmony",
  description: "This is the Bloggers app boundary!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeWrapper>
          <Analytics />
            <Navbar />
            {children}
            <Footer />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
