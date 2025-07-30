import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";


export const metadata: Metadata = {
  title: "Portfolio von Daria Schmidt",
  description: "Portfolio von Daria Schmidt, einer Fullstack-Webentwicklerin aus Bad Hersfeld. Entdecken Sie meine Projekte und Fähigkeiten in der Webentwicklung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
