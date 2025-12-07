"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const certificates = [
  { 
    id: 1, 
    title: "National Accreditation", 
    level: "Unggul",
    src: "/images/cert-1.png", 
    desc: "Badan Akreditasi Nasional Perguruan Tinggi"
  },
  { 
    id: 2, 
    title: "International Accreditation", 
    level: "IABEE",
    src: "/images/cert-2.png", 
    desc: "Indonesian Accreditation Board for Engineering Education"
  },
  { 
    id: 3, 
    title: "ISO Certification", 
    level: "9001:2015",
    src: "/images/cert-3.png", 
    desc: "Quality Management System"
  },
   { 
    id: 4, 
    title: "ISO Certification", 
    level: "9001:2015",
    src: "/images/cert-3.png", 
    desc: "Quality Management System"
  },
   { 
    id: 5, 
    title: "ISO Certification", 
    level: "9001:2015",
    src: "/images/cert-3.png", 
    desc: "Quality Management System"
  },
];

export default function AccreditationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {

    const totalWidth = wrapperRef.current ? wrapperRef.current.scrollWidth : 0;
    const viewportWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
    const scrollDistance = -(totalWidth - viewportWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000", 
        pin: true, 
        scrub: 1,
      }
    });

    // Animasi Horizontal Scroll
    tl.to(wrapperRef.current, {
        x: scrollDistance, 
        ease: "none",
        duration: 1, 
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0F1649] to-[#020410] text-white flex flex-col items-center justify-center"
    >
      
      {/* --- HEADER --- */}
      <div className="absolute top-4 md:top-8 left-0 w-full text-center z-30 px-4">
        <div className="inline-block mb-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                Quality Assurance
            </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Akreditasi &<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Sertifikasi
            </span>
        </h2>
      </div>

      {/* --- HORIZONTAL WRAPPER --- */}
      <div className="flex items-center w-full h-[60vh] mt-32 md:mt-40 overflow-hidden z-10">
        <div 
            ref={wrapperRef} 
            className="flex w-max gap-10 px-[10vw] md:px-[25vw]" 
        >
            {certificates.map((cert) => (
                <div 
                    key={cert.id}
                    className="cert-card relative flex-shrink-0 w-[85vw] md:w-[700px] h-[45vh] md:h-[450px] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl bg-[#0a0f2c]"
                >
                    {/* GAMBAR BANNER */}
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
                        
                        <Image 
                            src={cert.src}
                            alt={cert.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 text-left">
                             <div className="flex items-center gap-4 mb-2">
                                <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-none">
                                        {cert.title}
                                    </h3>
                                    <p className="text-emerald-400 font-mono text-base mt-1">
                                        {cert.level}
                                    </p>
                                </div>
                             </div>
                             <p className="text-gray-300 font-light text-sm border-t border-white/10 pt-3 mt-3">
                                {cert.desc}
                             </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      {/* Indikator Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50 text-sm animate-pulse z-20">
        <span>Scroll Down</span>
        <span>↓</span>
      </div>

    </section>
  );
}