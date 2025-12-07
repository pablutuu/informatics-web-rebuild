"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function HeroProfile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLDivElement>(null); 
  const textLoadRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // --- 1. ANIMASI OPENING (Zoom Out Awal) ---
    const entryTl = gsap.timeline();
    
    entryTl.fromTo(imageContainerRef.current, 
      { scale: 1.6 }, 
      { scale: 1, duration: 2.5, ease: "power2.out" }
    )

    // Animasi FADE IN TEXT
    .from(textLoadRef.current, {
      opacity: 0,      
      duration: 1,    
      ease: "power1.inOut",
    }, "-=1.0"); 


    // --- 2. ANIMASI SCROLL (Timeline Utama) ---
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500", // 
        pin: true,     
        scrub: 1,      
      },
    });

    // A. Gambar Background (Zoom In Kembali)
    scrollTl.to(imageContainerRef.current, {
      scale: 3.5, 
      y: "20%",   
      ease: "none",
    }, 0) 

    // B. Text Fade Out 
    
    .to(textScrollRef.current, {
        opacity: 0,   
        y: -100,     
        ease: "power1.out",
        duration: 0.35, 
    }, 0) 

    // C. Overlay Gelap
    .to(overlayRef.current, {
      backgroundColor: "#0F1649", 
      opacity: 0.8, 
      ease: "none", 
    }, 0);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div ref={imageContainerRef} className="relative h-full w-full">
          <Image
            src="/images/profile/hero-pf-bg.png" 
            alt="Background Kampus"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* --- OVERLAY UTAMA --- */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 z-0 bg-black/30" 
      />

      {/* --- BOTTOM FADE LAYER --- */}
      <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-gradient-to-t from-[#0F1649] via-[#0F1649]/80 to-transparent" />

      {/* --- KONTEN TEKS --- */}
      <div ref={textScrollRef} className="relative z-30 text-center text-white px-4">
        <h1 ref={textLoadRef} className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase">
          Profile Informatika
        </h1>
      </div>

      {/* Indikator Scroll */}
      <div className="absolute bottom-10 z-30 animate-bounce text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" /><path d="M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}