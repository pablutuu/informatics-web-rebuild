"use client";

import { useRef } from "react";
import Image from "next/image"; 
import { gsap, useGSAP } from "@/lib/gsap"; 

export default function OrganizationStructure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // --- 1. ENTRY & EXIT ANIMATION (Reversible) ---
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", 
            end: "bottom top", 
            toggleActions: "play none none reverse", 
        }
    });

    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(".title-line", {
        width: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.5");

    tl.from(imageWrapperRef.current, {
      scale: 0.85,
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    }, "-=0.8"); 

    // --- 2. PARALLAX EFFECT ---
    gsap.to(imageWrapperRef.current, {
        yPercent: -10, 
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5, 
        }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#020410] to-[#0F1649] text-white flex flex-col items-center justify-center pb-20"
    >
      
      {/* === HEADER (Judul Naik Ke Atas) === */}
      <div 
        ref={titleRef} 
        // [PERBAIKAN]: Mengubah 'top-8/12' menjadi 'top-4 md:top-8' agar lebih mepet atas
        className="absolute top-4 left-6 md:top-8 md:left-16 z-20"
      >
        <div className="flex items-center gap-3 mb-2">
            <div className="title-line h-[2px] w-12 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
                Departemen
            </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Organization<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Structure
          </span>
        </h1>
      </div>

      {/* === IMAGE CONTAINER (Gambar Turun Ke Bawah) === */}
      <div 
        ref={imageWrapperRef}
        // [PERBAIKAN]: 
        // 1. Menambahkan 'mt-32' (Mobile) dan 'md:mt-24' (Desktop) agar gambar turun menjauh dari judul
        // 2. Mengurangi sedikit tinggi 'h-[60vh]' agar fit di layar setelah didorong ke bawah
        className="relative z-10 w-[95%] md:w-[85%] h-[55vh] md:h-[65vh] mt-32 md:mt-24 p-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center will-change-transform"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

        <div className="relative w-full h-full">
            <Image
                src="/images/profile/informatika-slide.png" 
                alt="Struktur Organisasi"
                fill
                className="object-contain"
                priority
            />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

    </section>
  );
}