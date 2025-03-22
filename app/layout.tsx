import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import { AuthProvider } from "@/lib/SessionProvider";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import authConfig from "@/configs/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noris Development | Розробка програмного забезпечення",
  description: "Noris Development - Світ сучасних технологій",
  openGraph: {
    title: "Noris Development | Розробка програмного забезпечення",
    description: "Noris Development - Світ сучасних технологій",
    url: "https://noris-dev.site",
    images: [
      {
        url: "https://noris-dev.site/images/jpeg/noris.jpg", // URL вашої Open Graph картинки
        width: 1200,
        height: 630,
        alt: "Noris Development Image",
      },
    ],
  },
};

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await  getServerSession(authConfig)
  console.log('LayoutTsx',session);
  
  return (
  


    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header session={session} />



        <main className="relative flex min-h-screen flex-col">{children}</main>
     
        <Footer />
      </body>
    </html>

  );
}
