import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import { Grandstander } from "next/font/google";

const grandstander = Grandstander({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Orchard",
  description: "Always Fresh Fruits from Green Orchard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={
          "min-h-screen flex flex-col relative " + grandstander.className
        }
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
