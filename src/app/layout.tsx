import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food & Travel Blogs",
  description: "An app for posting food and travel blogs and reviews by different users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
