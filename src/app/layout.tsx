import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/containers/footer";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/containers/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurora | IoT E-commerce",
  description: "Find reliable IoT solutions, industrial sensors, automation components, and smart technology for your enterprise and manufacturing needs. Fast, Dependable, and Ready for Implementation.",
  keywords: ["IoT E-commerce", "Industrial Automation", "Industrial Sensor", "Smart Factory", "Automation Components", "PLC Components", "Autonics alternative"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between`}>
        <Navbar />
        <Toaster position="top-center" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
