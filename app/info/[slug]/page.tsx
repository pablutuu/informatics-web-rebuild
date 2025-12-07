'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
    Calendar, User, ArrowLeft, Share2, 
    Facebook, Twitter, Linkedin, Link as LinkIcon, Check, Clock 
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const getDetailData = (slug: string) => {
  return {
    title: "RECURSION 1.0: National Innovation Forum & Tech Showcase",
    category: "Kegiatan",
    date: "16 Agustus 2024",
    readTime: "5 menit",
    author: "Admin Departemen",
    imageUrl: "https://eng.unhas.ac.id/uploads_infor/small_31_3a122693b8.jpg",
    content: `
      <h2>Pendahuluan</h2>
        <p>
            Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin (OKIF-FT UH) akan menyelenggarakan Lomba Red Campus Futurist Informatics Competition (RECURSION) 1.0. <br />
            <br />
            Kompetisi berskala nasional bertajuk “Transforming Tomorrow: Innovative Digital Solutions for a Smart, Sustainable, and Secure World” ini merupakan wadah bagi mahasiswa dari seluruh Indonesia untuk menunjukkan kemampuan mereka dalam berbagai bidang informatika. <br />
            <br />
            Pendaftaran RECURSION 1.0 gelombang pertama dimulai sejak 25 Januari – 23 Februari 2025, dan gelombang kedua mulai 27 Februari – 18 Maret 2025.
            Terdapat empat cabang lomba, yaitu Competitive Programming, ICT Business Plan, UI/UX Design, dan Capture the Flag di bidang keamanan siber yang berfokus pada jaringan dan keamanan informasi.

            Dalam wawancaranya Ketua Panitia, Jek menyebut bahwa kegiatan berskala nasional sudah pernah diadakan sebelumnya oleh Departemen Teknik Informatika, seperti seminar nasional. Namun, untuk kompetisi berskala nasional dengan format seperti ini baru dilaksanakan pertama kalinya oleh Departemen Teknik Informatika Unhas. <br />
            <br />
            “Kompetisi ini merupakan momen penting sebagai ‘pecah telur’ yang disusun oleh mahasiswa Teknik Informatika Universitas Hasanuddin” ujarnya, saat diwawancarai Minggu (26/01).

            Lebih lanjut ia menjelaskan kriteria untuk penilaian lomba. Ia menyebut terdapat beberapa kategori yang memiliki metode penilaian masing-masing. <br />
            <br />
            Penilaiannya Competitive Programming didasarkan pada jumlah soal yang diselesaikan, sementara Capture the Flag dinilai berdasarkan poin peserta. Untuk lomba UI/UX Design dan ICT Business Plan, panitia telah menyiapkan matriks penilaian yang akan memandu juri dalam memberikan penilaian objektif terhadap setiap peserta.

            Mahasiswa Teknik Informatika itu berharap agar RECURSION 1.0 ini bisa terlaksana dengan sukses. 

            “Saya optimis bahwa lomba ini dapat menarik banyak peserta. Kegiatan ini diharapkan tidak hanya menjadi ajang kompetisi, tetapi juga kesempatan berharga untuk belajar, berbagi ilmu, serta memperluas networking antar sesama peserta dan penyelenggara,” tutupnya.
        </p>
      
      <h2>Sorotan Utama</h2>
      <ul>
        <li><strong>Keynote oleh Pemimpin Teknologi:</strong> Para veteran industri berbagi wawasan tentang AI dan Machine Learning.</li>
        <li><strong>Pameran Karya Mahasiswa:</strong> Lebih dari 50 proyek inovatif dipamerkan, mulai dari IoT hingga Blockchain.</li>
        <li><strong>Sesi Jejaring:</strong> Mahasiswa terhubung dengan perekrut potensial dari perusahaan teknologi terkemuka.</li>
      </ul>

      <blockquote>
        "RECURSION 1.0 menetapkan standar baru bagi inisiatif yang dipimpin mahasiswa. Energi dan kreativitas yang ditampilkan sungguh menginspirasi."
      </blockquote>
      
      <h2>Harapan Kedepan</h2>
      <p>Dengan kesuksesan edisi pertama ini, kami sudah merencanakan RECURSION 2.0 tahun depan dengan cakupan yang lebih besar dan partisipasi internasional. Kami mengundang seluruh mahasiswa untuk mempersiapkan ide-ide mereka dari sekarang.</p>
    `
  };
};

export default function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const data = getDetailData(slug);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 500], [0, 100]);

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!data) return notFound();

    return (
        <main className="min-h-screen bg-[#FAFAFA] relative">
            
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-[#0C1B43] origin-left z-50"
                style={{ scaleX }}
            />

            <div className="pt-12 pb-20 px-4">
                {/* Breadcrumb & Back */}
                <div className="max-w-[1320px] mx-auto px-6 mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0C1B43] transition-colors font-medium group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Kembali
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                        <Link href="/" className="hover:text-[#0C1B43] transition-colors">Beranda</Link>
                        <span>/</span>
                        <span className="text-[#0C1B43] font-medium truncate max-w-[200px] md:max-w-none">{data.title}</span>
                    </div>
                </div>

                <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* --- MAIN CONTENT --- */}
                    <article className="lg:col-span-8">
                        
                        {/* Hero Header */}
                        <motion.div 
                            className="mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-blue-100">
                                    {data.category}
                                </span>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <Calendar className="w-4 h-4" />
                                    {data.date}
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <Clock className="w-4 h-4" />
                                    {data.readTime}
                                </div>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C1B43] leading-[1.15] mb-8 tracking-tight">
                                {data.title}
                            </h1>

                            {/* Parallax Image Wrapper */}
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                                <motion.div 
                                    style={{ y: imageY }} 
                                    className="w-full h-[120%] relative -top-[10%]" 
                                >
                                    <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10" /> {/* Slight Overlay */}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Article Body - Enhanced Typography */}
                        <motion.div 
                            className="prose prose-lg prose-slate max-w-none 
                            prose-headings:text-[#0B0B0BFF] prose-headings:font-bold 
                            prose-p:text-gray-800 prose-p:leading-relaxed
                            prose-li:text-gray-800
                            prose-strong:text-[#0B0B0BFF] 
                            prose-blockquote:border-l-[6px] prose-blockquote:border-[#0B0B0BFF] 
                            prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 
                            prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-[#0B0B0BFF]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            dangerouslySetInnerHTML={{ __html: data.content }} 
                        />
                        
                        {/* Author Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#0C1B43] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                A
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Ditulis oleh</p>
                                <p className="font-bold text-[#0C1B43]">{data.author}</p>
                            </div>
                        </div>

                    </article>

                    {/* --- SIDEBAR --- */}
                    <aside className="lg:col-span-4 space-y-8 relative">
                        
                        {/* Share Widget */}
                        <motion.div 
                            className="bg-white p-6 rounded-3xl shadow-[0_8px_24px_rgb(0,0,0,0.04)] border border-gray-100"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-lg font-bold text-[#0C1B43] mb-4 flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Bagikan Artikel
                            </h3>
                            <div className="flex gap-3">
                                <SocialButton icon={<Facebook className="w-5 h-5" />} color="hover:text-blue-600 hover:bg-blue-50" />
                                <SocialButton icon={<Twitter className="w-5 h-5" />} color="hover:text-black hover:bg-gray-100" />
                                <SocialButton icon={<Linkedin className="w-5 h-5" />} color="hover:text-blue-700 hover:bg-blue-50" />
                                
                                {/* Copy Link Button */}
                                <button 
                                    onClick={handleCopy}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-xl text-gray-600 font-medium hover:bg-[#0C1B43] hover:text-white transition-all duration-300 relative group overflow-hidden"
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                                    <span className="text-sm">{copied ? "Disalin!" : "Salin Tautan"}</span>
                                </button>
                            </div>
                        </motion.div>

                        {/* Related News Sticky Widget */}
                        <motion.div 
                            className="sticky top-32"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <h3 className="text-lg font-bold text-[#0C1B43] mb-6 border-b border-gray-100 pb-4">
                                    Berita Terkait
                                </h3>
                                <div className="space-y-6">
                                    {[1, 2, 3].map((item) => (
                                        <Link key={item} href="#" className="group block">
                                            <div className="flex gap-4 items-start">
                                                <div className="w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden relative">
                                                    <div className="absolute inset-0" />
                                                        <img src="https://identitasunhas.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-28-at-02.18.00_43aaefb7-750x375.jpg" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="w-full h-full bg-linear-to-tr from-gray-300 to-gray-400 group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1 block">
                                                        Akademik
                                                    </span>
                                                    <h4 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                                                        Unhas juara umum pimnas yey, jaya selalu unhass, merah membara
                                                    </h4>
                                                    <span className="text-xs text-gray-400 mt-2 block flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> 12 Aug 2024
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

const SocialButton = ({ icon, color }: { icon: React.ReactNode, color: string }) => (
    <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className={`p-3 bg-gray-50 rounded-xl text-gray-500 transition-colors ${color}`}
    >
        {icon}
    </motion.button>
);