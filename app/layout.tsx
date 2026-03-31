import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Swinton Pet Supplies",
  description: "Premium Care for Your Best Friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-inter"
    >
      <body className="min-h-full flex flex-col bg-[#F5F7FA]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
