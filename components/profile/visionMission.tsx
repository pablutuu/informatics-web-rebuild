"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const visions = [
  { id: 1, title: "Global Standard", desc: "Menjadi program studi informatika berstandar internasional pada tahun 2030." },
  { id: 2, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
  { id: 3, title: "Smart Ecosystem", desc: "Menciptakan ekosistem digital yang mendukung produktivitas akademik." },
  { id: 4, title: "Tech Leadership", desc: "Melahirkan pemimpin teknologi masa depan yang berintegritas." },
  { id: 5, title: "Social Impact", desc: "Memberikan solusi teknologi tepat guna bagi permasalahan masyarakat." },
];

const missions = [
  { id: 1, text: "Menyelenggarakan pendidikan berkualitas tinggi berbasis riset terkini." },
  { id: 2, text: "Membangun kemitraan strategis dengan industri teknologi global." },
  { id: 3, text: "Mengembangkan inovasi berkelanjutan di bidang kecerdasan buatan." },
  { id: 4, text: "Meningkatkan kontribusi pengabdian masyarakat berbasis teknologi." },
  { id: 5, text: "Mewujudkan tata kelola program studi yang transparan dan akuntabel." },
];

export default function VisionMissionSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const visiWrapperRef = useRef<HTMLDivElement>(null);
  const visiFullContentRef = useRef<HTMLDivElement>(null); 
  const visiListRef = useRef<HTMLDivElement>(null);
  const visiLabelRef = useRef<HTMLDivElement>(null); 
  
  const misiWrapperRef = useRef<HTMLDivElement>(null);
  const misiListRef = useRef<HTMLDivElement>(null);
  const finalLayoutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }

    const getScrollDistance = (element: HTMLElement | null) => {
        if (!element) return 0;
        const distance = element.scrollWidth - window.innerWidth;
        return distance > 0 ? -distance : 0;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        end: "+=7000", 
        pin: true,        
        scrub: 1, 
      },
    });

    // --- SETUP AWAL ---
    tl.set(visiWrapperRef.current, { 
        width: "100%", height: "100%", borderRadius: "0px", y: 0 
    });

    // --- STEP 1: SCROLL VISI ---
    tl.to(visiListRef.current, {
        x: () => getScrollDistance(visiListRef.current), 
        ease: "none",
        duration: 10, 
    });

    // --- STEP 2: WRAP UP VISI (PERBAIKAN POSISI) ---
    tl.to(visiFullContentRef.current, {
        autoAlpha: 0,
        scale: 0.8, 
        duration: 1.5, 
        ease: "power2.inOut" 
    });

    
    tl.to(visiWrapperRef.current, {
        width: "240px",      
        height: "50px",      
        y: "-35vh",          
        borderRadius: "99px",
        backgroundColor: "rgba(15, 23, 73, 0.6)", 
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(96, 165, 250, 0.3)", 
        boxShadow: "0 0 0 0 rgba(0,0,0,0)",
        
        duration: 5, 
        ease: "power3.inOut" 
    }, "<"); 

    // C. Munculkan Label Kecil
    tl.to(visiLabelRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5, 
        ease: "back.out(1.5)"
    }, "-=0.5"); 

    // --- STEP 3: MISI MUNCUL ---
    tl.to(misiWrapperRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
    });

    tl.to(misiListRef.current, {
        x: () => getScrollDistance(misiListRef.current), 
        duration: 10, 
        ease: "none"
    });

    // --- STEP 4: FINAL TRANSITION ---
    tl.to([visiWrapperRef.current, misiWrapperRef.current], {
        autoAlpha: 0,
        y: "-50vh", 
        duration: 2, 
        ease: "power2.inOut"
    });

    tl.to(finalLayoutRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 2, 
        ease: "power2.out"
    }, "<");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 -mt-[2px] h-screen w-full overflow-hidden bg-gradient-to-b from-[#0F1649] to-[#020410] text-white"
    >
        {/* --- LAYER 1: VISI WRAPPER --- */}
        <div 
            ref={visiWrapperRef}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center m-auto origin-center bg-transparent overflow-hidden" 
        >
            {/* Full Content Container */}
            <div 
                ref={visiFullContentRef} 
                className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
            >
                <h2 className="mb-12 text-center text-4xl font-bold text-blue-400 md:text-6xl drop-shadow-lg">
                    VISI KAMI
                </h2>
                <div className="flex w-full overflow-hidden"> 
                    <div ref={visiListRef} className="flex w-max gap-8 pl-[5vw] pr-[5vw]"> 
                        {visions.map((vision) => (
                            <div 
                            key={vision.id} 
                            className="visi-card flex h-[350px] w-[85vw] flex-shrink-0 flex-col justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md p-10 shadow-xl md:w-[500px]"
                            >
                                <h3 className="mb-4 text-3xl font-bold text-white">{vision.title}</h3>
                                <p className="text-xl font-light leading-relaxed text-gray-300">{vision.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div ref={visiLabelRef} className="absolute flex items-center gap-3 opacity-0 scale-50">
                <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-widest text-blue-100 uppercase">Visi</span>
            </div>
        </div>

        {/* --- LAYER 2: MISI WRAPPER --- */}
        <div 
            ref={misiWrapperRef}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center invisible opacity-0 pt-[10vh]" // Tambah padding top agar tidak nabrak badge Visi
        >
             <h2 className="mb-12 text-center text-4xl font-bold text-emerald-400 md:text-6xl drop-shadow-lg">
                MISI KAMI
            </h2>
            <div className="flex w-full overflow-hidden">
                <div ref={misiListRef} className="flex w-max gap-8 pl-[5vw] pr-[5vw]">
                    {missions.map((misi) => (
                    <div 
                        key={misi.id} 
                        className="misi-card flex h-[350px] w-[85vw] flex-shrink-0 flex-col justify-center rounded-3xl bg-gradient-to-br from-emerald-900/40 to-emerald-900/20 border border-emerald-500/20 backdrop-blur-md p-10 shadow-xl md:w-[500px]"
                    >
                        <div className="mb-4 text-6xl font-bold text-emerald-500/40">0{misi.id}</div>
                        <p className="text-2xl font-medium text-gray-200 leading-relaxed">{misi.text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* --- LAYER 3: FINAL LAYOUT --- */}
        <div 
            ref={finalLayoutRef}
            className="absolute inset-0 z-40 flex h-full w-full flex-col items-center justify-center p-6 invisible opacity-0"
        >
             <div className="text-center mb-10 shrink-0 mt-10"> {/* Margin top extra untuk safety navbar */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Visi & Misi</h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {/* Visi Final Card */}
                <div className="group w-full rounded-3xl bg-blue-950/40 border border-blue-500/30 p-8 shadow-2xl backdrop-blur-sm hover:bg-blue-900/40 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
                        <h3 className="text-3xl font-bold text-blue-400">Visi</h3>
                    </div>
                    <p className="text-lg md:text-2xl font-light text-blue-100 leading-relaxed">
                    "Menjadi program studi informatika berstandar internasional pada tahun 2030."
                    </p>
                </div>

                {/* Misi Final Card */}
                <div className="group w-full rounded-3xl bg-emerald-950/40 border border-emerald-500/30 p-8 shadow-2xl backdrop-blur-sm hover:bg-emerald-900/40 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
                        <h3 className="text-3xl font-bold text-emerald-400">Misi</h3>
                    </div>
                    <ul className="space-y-3">
                        {missions.slice(0, 3).map((m, i) => (
                             <li key={i} className="flex items-start gap-3 text-base md:text-lg text-emerald-100/80">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                                {m.text}
                             </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}