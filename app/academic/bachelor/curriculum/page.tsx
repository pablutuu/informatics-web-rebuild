"use client";

// @ts-ignore
import ModalImage from "react-modal-image";
import { ZoomIn } from 'lucide-react';
import CurriculumTable from '@/component/academic/bachelor/CurriculumTable';
import BachelorHero from '@/component/academic/bachelor/BachelorHero';
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';

export default function CurriculumPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <BachelorHero 
                title={
                    <>
                        STRUKTUR
                        <br />
                        KURIKULUM
                    </>
                }
            />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl mt-12">
                
                {/* Header Section */}
                <div className="mb-12">
                    <div className="w-20 h-1.5 bg-[#F2C94C] rounded-full mb-6" />
                    <p className="text-gray-600 max-w-3xl text-lg">
                        Program Sarjana Teknik Informatika dirancang untuk memberikan pengetahuan dan keterampilan yang komprehensif. 
                        Berikut adalah struktur kurikulum dan buku panduan modul untuk tahun akademik 2023.
                    </p>
                </div>

                {/* Image Section */}
                <section className="mb-16 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                        <h2 className="text-2xl font-bold text-[#0C1B43]">
                            Diagram Kurikulum
                        </h2>
                        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                            <ZoomIn size={18} />
                            Klik gambar untuk memperbesar
                        </div>
                    </div>

                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 curriculum-lightbox">
                        <ModalImage
                            small={"/images/curriculum-2023.png"}
                            large={"/images/curriculum-2023.png"}
                            alt="Curriculum Structure 2023"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </section>

                {/* Table Section */}
                <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-[#0C1B43] mb-2">Daftar Mata Kuliah</h2>
                        <p className="text-gray-500">Daftar lengkap mata kuliah per semester.</p>
                    </div>
                    
                    <CurriculumTable />
                </section>
            </div>
        </main>
        <Footer />
        </>
    );
}
