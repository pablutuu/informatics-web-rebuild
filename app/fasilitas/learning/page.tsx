'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const learningFacilities = [
  {
    title: "Ruang Kelas",
    desc: "Rasakan pengalaman belajar yang berbeda dengan fasilitas kelas modern kami. Dilengkapi dengan teknologi presentasi terkini, pencahayaan yang optimal, dan tata ruang yang ergonomis untuk mendukung diskusi interaktif.",
    images: [
      "/fasilitas/learning/2.jpg",
      "/fasilitas/learning/3.jpg",
      "/fasilitas/learning/4.jpg",
      "/fasilitas/learning/5.jpg"
    ]
  },
  {
    title: "Aula Perkuliahan",
    desc: "Aula kuliah berkapasitas besar yang dirancang untuk kenyamanan akustik dan visual. Tempat yang sempurna untuk kuliah umum, seminar tamu, dan presentasi akademik skala besar dengan sistem audio-visual terintegrasi.",
    images: [
      "/fasilitas/learning/6.jpg",
      "/fasilitas/learning/8.jpg",
      "/fasilitas/learning/9.jpg"
    ]
  },
  {
    title: "Laboratorium Komputer",
    desc: "Pusat komputasi canggih dengan perangkat keras spesifikasi tinggi dan perangkat lunak industri terbaru. Mendukung praktikum pemrograman, desain grafis, simulasi teknik, dan riset data science.",
    images: [
      "/fasilitas/learning/10.jpg",
      "/fasilitas/learning/1.jpg",
      "/fasilitas/learning/11.jpg"
    ]
  }
];

const STICKY_TOP_POSITION = 140;

export default function LearningFacilitiesPage() {
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rightColumnRef,
    offset: ['start center', 'end center']
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section - Full Screen */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src="/fasilitas/learning/1.jpg"
          alt="Fasilitas Pembelajaran"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-linear-to-br from-[#0C1B43]/70 to-[#1e3a8a]/60" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-6">

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Fasilitas Pembelajaran
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Jelajahi ruang belajar canggih kami yang dirancang untuk mendorong inovasi dan keunggulan akademik.
            </p>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-sm">Gulir untuk menjelajah</span>
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-full bg-[#FAFAFA] relative py-20 lg:py-40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
                
                {/* KOLOM KIRI - STICKY dengan batas bawah */}
                <div className="lg:sticky lg:top-[120px] lg:self-start mb-12 lg:mb-0" style={{ maxHeight: 'fit-content' }}>
                    <div className="relative z-10">
                          <h2 className="text-5xl lg:text-6xl font-bold text-[#0C1B43] mb-8 tracking-tight">
                            Fitur & Fasilitas
                          </h2>
                          <motion.div 
                             className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                          >
                             <div className="absolute top-0 left-0 w-3 h-full bg-[#0C1B43]" />
                             <p className="text-xl leading-relaxed text-gray-700 font-normal relative z-10 mb-6">
                                Rasakan pengalaman kampus kami yang belum pernah ada sebelumnya dengan teknologi tur virtual mutakhir. Jelajahi gedung akademik, asrama, fasilitas rekreasi, dan ruang terbuka dengan pemandangan 360 derajat yang interaktif.
                             </p>
                             <p className="text-lg leading-relaxed text-gray-600 relative z-10">
                                Platform tur virtual kami memungkinkan calon mahasiswa dan keluarga untuk menjelajahi kampus sesuai kenyamanan mereka, memudahkan untuk membayangkan kehidupan mahasiswa di universitas kami.
                             </p>
                             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />
                          </motion.div>
                    </div>
                </div>

                {/* KOLOM KANAN - SCROLLABLE */}
                <div ref={rightColumnRef} className="relative flex flex-col gap-0 lg:pt-0 pl-8 lg:pl-12">
                    
                    {/* PROGRESS BAR */}
                    <div className="hidden lg:block absolute left-0 h-full w-1.5">
                         <div 
                            className="sticky w-1.5 bg-gray-200 rounded-full overflow-hidden"
                            style={{ 
                                top: STICKY_TOP_POSITION + 80, 
                                height: '500px' 
                            }}
                        >
                            <motion.div 
                                style={{ scaleY: smoothProgress, originY: 0 }}
                                className="w-full h-full bg-[#0C1B43] rounded-full"
                            />
                        </div>
                    </div>

                    {/* Cards with Image Carousel */}
                    {learningFacilities.map((item, index) => (
                       <FacilityCard key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </div>
      </section>
    </main>
  );
}

// Komponen Card dengan Image Carousel
function FacilityCard({ item, index }: { item: typeof learningFacilities[0], index: number }) {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const { scrollYProgress: stickyProgress } = useScroll({
        target: cardContainerRef,
        offset: ['start start', 'end start'] 
    });

    // Auto-rotate images setiap 5 detik
    useEffect(() => {
        if (item.images.length <= 1) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
        }, 5000); // 5 detik

        return () => clearInterval(interval);
    }, [item.images.length]);

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
    };

    return (
        <div 
            ref={cardContainerRef}
            className="mb-8 relative"
        >
            <motion.div 
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    
                    {/* Image Carousel */}
                    <div className="relative h-80 w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={currentImageIndex}
                                src={item.images[currentImageIndex]}
                                alt={`${item.title} - ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#0C1B43]/90 via-[#0C1B43]/20 to-transparent" />

                        {/* Navigation Buttons - hanya muncul jika ada multiple images */}
                        {item.images.length > 1 && (
                            <>
                                <button 
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </button>

                                {/* Image Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {item.images.map((_, imgIndex) => (
                                        <button
                                            key={imgIndex}
                                            onClick={() => setCurrentImageIndex(imgIndex)}
                                            className={`h-1.5 rounded-full transition-all ${
                                                imgIndex === currentImageIndex 
                                                    ? 'w-8 bg-white' 
                                                    : 'w-1.5 bg-white/50 hover:bg-white/70'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Title */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-3xl font-bold text-white">
                                {item.title}
                            </h3>
                        </div>

                        {/* Image Counter */}
                        {item.images.length > 1 && (
                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm font-medium">
                                {currentImageIndex + 1} / {item.images.length}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="p-8">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}