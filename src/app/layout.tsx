import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Podkova } from "next/font/google";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Papas Orchard",
  description: "Old Fashioned Local Orchard Run by Papas",
};

const podkova = Podkova({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={"min-h-screen flex flex-col relative " + podkova.className}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
