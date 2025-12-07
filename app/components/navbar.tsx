"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full flex justify-center py-4"> 
      
      <div className="w-[90%] bg-[#0F1A47] text-white rounded-full py-4 px-8 shadow-[0_0_40px_rgba(0,0,0,0.35)] flex items-center justify-between">
        
        
        <h1 className="font-semibold tracking-wider">
          DEPARTEMEN <br /> INFORMATIKA
        </h1>

        <div className="flex gap-12 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/academic">Academics</Link>
          <Link href="/facility">Facility</Link>
        </div>

      </div>
    </nav>
  );
}