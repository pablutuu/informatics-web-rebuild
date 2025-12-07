"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const visions = [
  { id: 1, title: "Global Standard", desc: "Menjadi program studi informatika berstandar internasional pada tahun 2030." },
  { id: 2, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
  { id: 3, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
  { id: 4, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
  { id: 5, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
];

const missions = [
  { id: 1, text: "Menyelenggarakan pendidikan berkualitas tinggi berbasis riset terkini." },
  { id: 2, text: "Membangun kemitraan strategis dengan industri teknologi global." },
  { id: 3, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
  { id: 4, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
  { id: 5, title: "Innovation Hub", desc: "Pusat pengembangan teknologi AI dan Software Engineering terdepan." },
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
        end: "+=6000",
        pin: true,        
        scrub: 1, 
      },
    });

   
    
    tl.set(visiWrapperRef.current, { 
        width: "100%", height: "100%", borderRadius: "0px", y: 0 
    });

    
    tl.to(visiListRef.current, {
        x: () => getScrollDistance(visiListRef.current), 
        ease: "none",
        duration: 10, 
    });

    
   
    tl.to(visiFullContentRef.current, {
        autoAlpha: 0,
        scale: 0.95, 
        duration: 1.5, 
        ease: "power2.inOut" 
    });

    tl.to(visiWrapperRef.current, {
        width: "280px", 
        height: "60px", 
        y: "-42vh", 
        borderRadius: "99px",
        backgroundColor: "rgba(15, 23, 73, 0.9)", 
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(59, 130, 246, 0.4)", 
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.6)",
        
        duration: 1.5, 
        ease: "power3.inOut" 
    }, "<"); 

    
    tl.to(visiLabelRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5, 
        ease: "back.out(1.5)"
    }, "-=0.5"); 

  
    tl.to(misiWrapperRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
    });

    tl.to(misiListRef.current, {
        x: () => getScrollDistance(misiListRef.current), 
        duration: 10, 
    });

   
    
    tl.to([visiWrapperRef.current, misiWrapperRef.current], {
        autoAlpha: 0,
        y: "-60vh", 
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
            <div 
                ref={visiFullContentRef} 
                className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
            >
                <h2 className="mb-12 text-center text-4xl font-bold text-blue-400 md:text-6xl">
                    VISI KAMI
                </h2>
                <div className="flex w-full overflow-hidden"> 
                    <div ref={visiListRef} className="flex w-max gap-10 pl-[5vw] pr-[5vw]"> 
                        {visions.map((vision) => (
                            <div 
                            key={vision.id} 
                            className="visi-card flex h-[350px] w-[85vw] flex-shrink-0 flex-col justify-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-10 shadow-2xl md:w-[600px]"
                            >
                                <h3 className="mb-4 text-3xl font-bold text-white">{vision.title}</h3>
                                <p className="text-xl font-light leading-relaxed text-gray-300">{vision.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={visiLabelRef} className="absolute flex items-center gap-2 opacity-0 scale-50">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm font-bold tracking-widest text-blue-100 uppercase">Visi Kami</span>
            </div>
        </div>

        {/* --- LAYER 2: MISI WRAPPER --- */}
        <div 
            ref={misiWrapperRef}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center invisible opacity-0"
        >
             <h2 className="mb-12 text-center text-4xl font-bold text-emerald-400 md:text-6xl">
                MISI KAMI
            </h2>
            <div className="flex w-full overflow-hidden">
                <div ref={misiListRef} className="flex w-max gap-10 pl-[5vw] pr-[5vw]">
                    {missions.map((misi) => (
                    <div 
                        key={misi.id} 
                        className="misi-card flex h-[350px] w-[85vw] flex-shrink-0 flex-col justify-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-10 shadow-2xl md:w-[600px]"
                    >
                        <div className="mb-4 text-6xl font-bold text-emerald-500/30">0{misi.id}</div>
                        <p className="text-2xl font-medium text-gray-200">{misi.text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* --- LAYER 3: FINAL LAYOUT --- */}
        <div 
            ref={finalLayoutRef}
            className="absolute inset-0 z-40 flex h-full w-full flex-col items-center justify-center p-8 invisible opacity-0"
        >
             <div className="text-center mb-8 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Visi & Misi</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>
            <div className="flex w-full max-w-4xl flex-col gap-6">
                <div className="w-full rounded-3xl bg-blue-900/20 border border-blue-500/20 p-8 shadow-xl">
                    <h3 className="mb-2 text-2xl font-bold text-blue-400">Visi Utama</h3>
                    <p className="text-lg md:text-xl font-light text-gray-200">
                    "Menjadi program studi informatika berstandar internasional pada tahun 2030."
                    </p>
                </div>
                <div className="w-full rounded-3xl bg-emerald-900/20 border border-emerald-500/20 p-8 shadow-xl">
                    <h3 className="mb-4 text-2xl font-bold text-emerald-400">Misi Utama</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 text-base md:text-lg font-light text-gray-300 list-disc">
                        <li>Pendidikan berbasis riset.</li>
                        <li>Kemitraan global.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}