import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/page";
import BlurBubbles from "@/components/decorations/blur_bubbles/page";
import { CustomCursor } from "@/components/decorations/cursor/page";



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
      <body className="min-h-screen bg-gray-900"> 
        <CustomCursor />
        <BlurBubbles />
        <Header />
        {children}
      </body>
    </html>
  );
}
