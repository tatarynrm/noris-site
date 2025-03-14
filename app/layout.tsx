import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700','800','900']
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noris Development | Розробка програмного забезпечення",
  description: "Noris Development - Світ сучасних технологій",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header/>
       <main className="relative flex min-h-screen flex-col">
       {children}
       </main>
       <Footer/>
      </body>
    </html>
  );
}
