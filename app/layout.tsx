import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DramaDojo",
  description: "A minimalistic Anime and East Asian Dramas tracker website for avid watchers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gradient-to-br from-[#fbfbfb] via-[#fdeff4] to-[#ffe6e6]`}
      >
        <Header />
        <div className="flex flex-1 w-full">
          <Sidebar />
          <div className="flex flex-1 flex-col items-center justify-between max-h-screen">
            {/* Main Content */}
            <main className="w-full max-w-3xl flex-grow px-4 py-8">
              {children}
            </main>
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
