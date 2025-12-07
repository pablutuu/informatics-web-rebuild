import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Departemen Informatika",
  description: "Website Departemen Informatika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        
        {/* HAPUS 'pt-24' DISINI. Cukup min-h-screen saja. */}
        <main className="min-h-screen bg-[#020410]"> 
          {children}
        </main>
      </body>
    </html>
  );
}