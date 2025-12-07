'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const facilities = [
  {
    title: "Tur Virtual Kampus",
    desc: "Jelajahi setiap sudut kampus, gedung, dan laboratorium secara 360° dari mana saja. Rasakan pengalaman berada di kampus tanpa harus keluar rumah.",
    image: "/unhas.jpg", 
    link: "https://unhas.ac.id/petakampus/virtualtour/index.php?scene=mainbridge"
  },
  {
    title: "Fasilitas Pembelajaran",
    desc: "Ruang kelas pintar dan laboratorium canggih yang dilengkapi dengan teknologi mutakhir untuk mendukung pengalaman akademik terbaik.",
    image: "/fasilitas/learning/1.jpg",
    link: "/fasilitas/learning"
  },
  {
    title: "Perpustakaan",
    desc: "Akses ke jutaan koleksi digital dan fisik. Ruang baca yang tenang, ruang diskusi kolaboratif, dan akses internet berkecepatan tinggi.",
    image: "/fasilitas/library/1.jpg",
    link: "/fasilitas/library"
  },
  {
    title: "Dukungan Mahasiswa",
    desc: "Layanan bimbingan akademik, konseling karir, dan pusat bantuan teknis untuk memastikan kesejahteraan mahasiswa.",
    image: "/fasilitas/dukungan-mahasiswa/cot.jpg",
    link: "/fasilitas/dukungan-mahasiswa"
  },
  {
    title: "Fasilitas Penunjang Lainnya",
    desc: "Menyeimbangkan kehidupan akademik dengan fasilitas olahraga, asrama mahasiswa, kantin, dan ruang terbuka hijau.",
    image: "/fasilitas/fasilitas-penunjang/1.jpg",
    link: "/fasilitas/fasilitas-penunjang"
  },
];

const STICKY_TOP_POSITION = 140;

export default function FasilitasPage() {
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
        {/* Background Image */}
        <img 
          src="/fasilitas/hero2.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0C1B43]/70 to-[#1e3a8a]/60" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Fasilitas & Sarana
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Infrastruktur modern yang dirancang untuk mendukung inovasi dan kenyamanan akademik.
          </p>
          
          {/* Scroll Indicator */}
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
                
                {/* KOLOM KIRI - STICKY */}
                <div className="lg:sticky lg:top-[120px] lg:self-start mb-12 lg:mb-0">
                    <div className="relative z-10">
                         <h2 className="text-5xl lg:text-6xl font-bold text-[#0C1B43] mb-8 tracking-tight">
                            Jelajahi Fasilitas
                         </h2>
                         <motion.div 
                             className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                         >
                             <div className="absolute top-0 left-0 w-3 h-full bg-[#0C1B43]" />
                             <p className="text-xl lg:text-xl leading-relaxed text-gray-700 font-normal relative z-10">
                                Temukan berbagai fasilitas unggulan yang kami sediakan untuk mendukung perjalanan akademik dan pengembangan diri Anda. Dari ruang kelas modern hingga perpustakaan digital yang lengkap.
                             </p>
                             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />
                         </motion.div>
                    </div>
                </div>

                {/* KOLOM KANAN - SCROLLABLE dengan Progress Bar */}
                <div ref={rightColumnRef} className="relative flex flex-col gap-0 lg:pt-0 min-h-[150vh] lg:min-h-0 pl-8 lg:pl-12">
                    
                    {/* PROGRESS BAR - Posisi dan logika SAMA dengan VisiMisi */}
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

                    {/* Cards */}
                    {facilities.map((item, index) => (
                       <FacilityCard key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </div>
      </section>
    </main>
  );
}

function FacilityCard({ item, index }: { item: any, index: number }) {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress: stickyProgress } = useScroll({
        target: cardContainerRef,
        offset: ['start start', 'end start'] 
    });
    
    const scale = useSpring(
      useScroll({
        target: cardContainerRef,
        offset: ['start center', 'end center']
      }).scrollYProgress,
      { stiffness: 100, damping: 30 }
    );

    // Handler untuk navigasi
    const handleClick = () => {
        if (item.link.startsWith('http')) {
            // Jika link external (seperti virtual tour)
            window.open(item.link, '_blank');
        } else {
            // Jika link internal
            window.location.href = item.link;
        }
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
                <div 
                    onClick={handleClick}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                >
                    
                    {/* Gambar */}
                    <div className="relative h-64 w-full overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#0C1B43]/90 via-[#0C1B43]/20 to-transparent opacity-80" />

                        {/* Judul */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                {item.title}
                            </h3>
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <div className="p-8">
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {item.desc}
                        </p>
                        <div className="flex items-center text-[#0C1B43] font-bold text-base group-hover:gap-3 transition-all">
                            Lihat Detail <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}