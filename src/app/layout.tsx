import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Otto - Abhin Rustagi",
  description: "Otto manages and displays my social media posts in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} antialiased`}>
        <main className="px-3 mx-auto max-w-3xl my-6">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
