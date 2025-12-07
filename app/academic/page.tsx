// Ganti dengan nama file Anda, misalnya: app/academic/page.jsx
"use client"; // Diperlukan jika Anda menggunakan state/hooks di sini atau jika Navbar adalah Client Component

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

// --- Konstanta Warna & Lebar ---
const CUSTOM_NAVY = '#1A2140'; 
const DETAIL_BLUE = '#0F1649';  
const CARD_BG_COLOR = '#E1E4F8'; 
// Menetapkan lebar yang konsisten untuk konten (diambil dari w-[90%] di Navbar)
const CONTENT_WIDTH_CLASS = "w-[90%] mx-auto"; 


// --- Interface (Untuk TypeScript, dipertahankan di sini) ---
interface Program {
    title: string;
    icon: string;
    href: string;
}

interface AcademicSectionProps {
    title: string;
    programs: Program[];
    isReversed: boolean;
}

// --- Data Dokumen ---
const bachelorPrograms: Program[] = [
    { title: "Program Information", icon: "📄", href: "/academic/bachelor/program_information" },
    { title: "PMB Brochure", icon: "📘", href: "/academic/bachelor/brochure" },
    { title: "Leaflet", icon: "📰", href: "/academic/bachelor/leaflet" },
];

const masterPrograms: Program[] = [
    { title: "Program Information", icon: "📄", href: "/academic/master/program_information" },
    { title: "PMB Brochure", icon: "📘", href: "/academic/master/brochure" },
    { title: "Leaflet", icon: "📰", href: "/academic/master/leaflet" },
];

const doctoralPrograms: Program[] = [
    { title: "Program Information", icon: "📄", href: "/academic/doctoral/program_information" },
    { title: "PMB Brochure", icon: "📘", href: "/academic/doctoral/brochure" },
    { title: "Leaflet", icon: "📰", href: "/academic/doctoral/leaflet" },
];


// --- Komponen Halaman Utama ---
export default function AcademicPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
        
            {/* Hero Section */}
            {/* PERUBAHAN: Hapus px-4/md:px-8. Tambahkan pt-28 (padding untuk Navbar). Gunakan flex justify-center. */}
            <section className="relative w-full pt-28 flex justify-center">
                {/* PERUBAHAN: Menggunakan CONTENT_WIDTH_CLASS untuk menyamakan lebar dengan Navbar */}
                <div className={`${CONTENT_WIDTH_CLASS} relative`}> 
                    <img
                        src="/image4.png" 
                        alt="Academic Banner"
                        className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-3xl flex flex-col items-center justify-center">
                        <h1 className="text-white text-5xl font-bold tracking-wide">ACADEMIC</h1>
                        <p className="text-white mt-3 tracking-wide text-lg text-center px-4">
                            BACHELOR PROGRAM | MASTER PROGRAM | DOCTORAL PROGRAM
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Content Container */}
            {/* PERUBAHAN: Menggunakan CONTENT_WIDTH_CLASS untuk menyamakan lebar */}
            <main className={`${CONTENT_WIDTH_CLASS} mt-14 space-y-12 pb-20`}>

                {/* Bachelor (Normal Layout) */}
                <AcademicSection 
                    title="Bachelor (S1) Program Academic Information" 
                    programs={bachelorPrograms} 
                    isReversed={false} 
                />

                {/* Master (Reversed Layout) */}
                <AcademicSection 
                    title="Master (S2) Program Academic Information" 
                    programs={masterPrograms} 
                    isReversed={true} 
                />

                {/* Doctoral (Normal Layout) */}
                <AcademicSection 
                    title="Informatics Doctoral (S3) Study Program Academic Information" 
                    programs={doctoralPrograms} 
                    isReversed={false} 
                />
            </main>

            <Footer />
        </div>
    );
}

// --- Komponen AcademicSection Reusable ---
function AcademicSection({title, programs, isReversed}: AcademicSectionProps) {
    
    // Perataan Kolom dan Urutan Tata Letak
    const titleOrder = isReversed ? 'md:order-last' : 'md:order-first';
    const cardsOrder = isReversed ? 'md:order-first' : 'md:order-last';

    // Perataan Konten di Dalam Kolom
    const justifyTitle = isReversed ? 'justify-end' : 'justify-start';
    const justifyCards = isReversed ? 'md:justify-start' : 'md:justify-end';

    return (
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Judul */}
                <div className={`flex items-center ${titleOrder} ${justifyTitle} mb-4 md:mb-0`}>
                    <h2 
                        style={{ color: CUSTOM_NAVY }} 
                        className="text-2xl md:text-3xl font-extrabold tracking-wide max-w-[200px]"
                    >
                        {title}
                    </h2>
                </div>
                
                {/* Kartu Dokumen */}
                <div className={`${cardsOrder} flex flex-wrap ${justifyCards} gap-4 md:gap-6`}>
                    {programs.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            // Ukuran: w-44 h-44 | Warna BG: bg-[#E1E4F8]
                            className={`w-full md:w-44 h-44 p-4 rounded-xl hover:shadow-xl transition flex flex-col justify-between bg-[#E1E4F8] border border-gray-200`}
                        >
                            <div className="text-4xl mb-2" style={{ color: DETAIL_BLUE }}>{item.icon}</div>
                            <h3 className="text-base font-semibold leading-tight" style={{ color: DETAIL_BLUE }}>{item.title}</h3>
                            <p className="text-right text-xs mt-2 font-semibold flex items-center justify-end group" style={{ color: DETAIL_BLUE }}>
                                see details <span className="ml-1 text-base group-hover:translate-x-0.5 transition duration-150">→</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}