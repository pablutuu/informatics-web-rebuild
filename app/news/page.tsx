"use client"

import React, { useEffect } from "react";
import Link from "next/link";   // Next.js Navigation
import { useRouter } from "next/navigation"; // Next.js Router
import { Menu, Search, Bell } from "lucide-react"; // Icon Lucide
import { FaFire } from "react-icons/fa"; // Icon React Icons (Contoh penggunaan)
import { motion } from "framer-motion"; // Framer Motion
import Lenis from "lenis"; // Smooth Scroll Core
import { BreakingNewsCard } from '../../component/news/BreakingNewsCard';
import { RecommendationCard } from '../../component/news/RecommendationCard';
import { BreakingNewsSlider } from '../../component/news/BreakingNewsSlider';
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

interface NewsItem {
  id: string;
  image: string;
  title: string;
  category: string;
  author: string;
  date: string;
}

const breakingNews: NewsItem[] = [
  {
    id: "1",
    image: "https://eng.unhas.ac.id/uploads_infor/Whats_App_Image_2025_04_30_at_11_36_33_AM_d84334fbc3.png",
    title: "RECURSION 1.0: National Innovation Forum",
    category: "Kegiatan",
    author: "Admin Departemen",
    date: "4 hours ago",
  },
  {
    id: "2",
    image: "https://eng.unhas.ac.id/uploads_infor/CFP_RITECH_July_4d2da1fdde.jpeg",
    title: "Research and Innovations in Information and Engineering Technology (RITECH 2025)",
    category: "Prestasi",
    author: "Admin Departemen",
    date: "4 hours ago",
  },  {
    id: "3",
    image: "https://eng.unhas.ac.id/uploads_infor/informatika_universitas_hasanuddin_54556df46a.jpg",
    title: "Selamat dan Sukses telah meraih Top 10 dalam kompetisi CTF (Capture The Flag)",
    category: "Workshop",
    author: "Admin Departemen",
    date: "4 hours ago",
  },
];

const recommendations: NewsItem[] = [
  {
    id: "4",
    image: "https://eng.unhas.ac.id/uploads_infor/small_31_3a122693b8.jpg",
    title: "RECURSION 1.0: National Innovation Forum & Tech Showcase",
    category: "Kegiatan",
    author: "Admin Departemen",
    date: "16 Agustus 2024",
  },
  {
    id: "5",
    image: "https://eng.unhas.ac.id/uploads_infor/CFP_RITECH_July_4d2da1fdde.jpeg",
    title: "Research and Innovations in Information and Engineering Technology (RITECH 2025)",
    category: "Kegiatan",
    author: "Admin Departemen",
    date: "16 Agustus 2024",
  },
  {
    id: "6",
    image: "https://eng.unhas.ac.id/uploads_infor/informatika_universitas_hasanuddin_54556df46a.jpg",
    title: "Selamat dan Sukses telah meraih Top 10 dalam kompetisi CTF (Capture The Flag)",
    category: "Kegiatan",
    author: "Admin Departemen",
    date: "16 Agustus 2024",
  },
];

export default function Home() {
  const router = useRouter();

  // Implementasi Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Variabel animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 ">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 pb-20 pt-25">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Breaking News
              <FaFire className="text-orange-500 w-5 h-5 animate-pulse" />
            </h2>
            {/* <Link href="/breaking" className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center gap-1 group">
              View all
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link> */}
          </div>

          <div className="breaking-news-slider">
            <BreakingNewsSlider>
              {breakingNews.map((news) => {
                const slug = news.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
                return(
                    <Link href={`./info/${slug}`} className="block">
                        <BreakingNewsCard
                          {...news}
                        />
                    </Link>
                )
            })}
            </BreakingNewsSlider>
          </div>
        </section>

        {/* Recommendation Section dengan Framer Motion */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recommendation</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {recommendations.map((news, index) => {
                const slug = news.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
                return(
                    <div
                        key={news.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <Link href={`./info/${slug}`} className="block">
                            <RecommendationCard
                                {...news}
                            />
                        </Link>
                    </div>
                );
            })}
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}