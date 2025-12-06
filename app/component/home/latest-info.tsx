'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoMdArrowForward } from 'react-icons/io';

const infoItems = [
  {
    tag: "Kegiatan",
    title: "RECURSION 1.0: National Innovation Forum",
    category: "Kegiatan",
    desc: "Organisasi Kemahasiswaan Informatika Fakultas Teknik (OKIF-FT) sukses menyelenggarakan RECURSION 1.0, serangkaian acara berskala nasional yang terdiri dari seminar dan kompetisi.",
    image: "https://eng.unhas.ac.id/uploads_infor/small_31_3a122693b8.jpg" 
  },
  {
    tag: "Prestasi",
    title: "Student Achievement in National Coding Contest",
    category: "Prestasi",
    desc: "Mahasiswa kami meraih juara pertama dalam Kontes Coding Nasional baru-baru ini di Jakarta, menunjukkan kemampuan pemecahan masalah yang luar biasa.",
    image: "https://eng.unhas.ac.id/uploads_infor/small_31_3a122693b8.jpg"
  },
   {
    tag: "Seminar",
    title: "AI in Healthcare: Future Perspectives",
    category: "Seminar",
    desc: "Seminar komprehensif yang membahas peran transformatif Kecerdasan Buatan dalam sistem kesehatan modern.",
    image: "https://prodi.unhas.ac.id/storage/uploads/post/1756177729.jpg"
  },
   {
    tag: "Workshop",
    title: "Cloud Native Development Workshop",
    category: "Workshop",
    desc: "Workshop praktis tentang membangun aplikasi skalabel menggunakan Kubernetes dan Docker.",
    image: "https://prodi.unhas.ac.id/storage/uploads/post/1756177729.jpg"
  }
];

const InfoCard = ({ item }: { item: typeof infoItems[0] }) => {
    // Basic slug generation: Title to Lowercase, Spaces to Dashes
    const slug = item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

    return (
        <Link href={`/info/${slug}`} className="block">
            <motion.div 
                className="w-[400px] h-[500px] shrink-0 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, rotate: 2 }}
            >
                <div className="h-[250px] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col gap-4">
                    <span className="w-fit px-4 py-1.5 bg-[#E1E4F8] text-[#0C1B43] text-sm font-bold rounded-full">
                        {item.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#0C1B43] line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-500 line-clamp-3">
                        {item.desc}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}

export default function LatestInfo() {
  return (
    <section className="py-32 overflow-hidden bg-white">
        <style jsx>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
            .pause-on-hover:hover .animate-marquee {
                animation-play-state: paused;
            }
        `}</style>

        <div className="max-w-[1320px] mx-auto px-6 mb-16 flex justify-between items-end">
             <div>
                <h2 className="text-5xl font-bold text-[#0C1B43] mb-4">Info Terbaru</h2>
                <p className="text-gray-500 text-xl font-light">Dapatkan informasi terbaru seputar kegiatan dan prestasi kami.</p>
            </div>
            <div className="flex gap-2 items-center text-[#0C1B43] font-medium text-lg group cursor-pointer">
                <span>Lihat Semua</span>
                <IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </div>
        </div>

        <div className="relative w-full pause-on-hover">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-hidden">
                <div className="flex gap-8 pl-8 animate-marquee w-max">
                    {[...infoItems, ...infoItems, ...infoItems, ...infoItems].map((item, index) => (
                        <InfoCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}