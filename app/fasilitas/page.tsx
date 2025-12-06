import FadeIn from '@/components/fasilitas/FadeIn';
import HeroSection from '@/components/fasilitas/HeroSection';
import Link from 'next/link';
import { BookOpen, Monitor, Users, Building, MousePointer2, ArrowRight } from 'lucide-react';

export default function FasilitasPage() {
  const facilities = [
    {
      title: "Campus Virtual Tour",
      desc: "Jelajahi kampus indah kami secara 360° dari kenyamanan rumah Anda. Jelajahi setiap gedung dan ruang hijau.",
      icon: <MousePointer2 className="w-8 h-8 text-red-700" />,
      link: "/virtual-tour", 
    },
    {
      title: "Learning Facilities",
      desc: "Laboratorium canggih dan ruang kelas pintar kami dilengkapi dengan teknologi mutakhir untuk meningkatkan pengalaman belajar.",
      icon: <Monitor className="w-8 h-8 text-red-700" />,
      link: "/fasilitas/learning",
    },
    {
      title: "Library",
      desc: "Akses jutaan sumber daya digital serta koleksi fisik yang luas. Ruang belajar dirancang untuk kolaborasi.",
      icon: <BookOpen className="w-8 h-8 text-red-700" />,
      link: "/fasilitas/library",
    },
    {
      title: "Student Support",
      desc: "Kami berkomitmen untuk kesuksesan akademik Anda melalui sistem pendukung yang terstruktur.",
      icon: <Users className="w-8 h-8 text-red-700" />,
      link: "/fasilitas/student-support",
    },
    {
      title: "Other Supporting Facilities",
      desc: "Nikmati kehidupan kampus yang hidup didukung oleh fasilitas kelas dunia, dari perumahan hingga pusat olahraga.",
      icon: <Building className="w-8 h-8 text-red-700" />,
      link: "/fasilitas/other",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* 1. Hero Section dengan Tombol CTA */}
      <HeroSection 
        title="World-Class Facilities for Future Leaders" 
        subtitle="Experience a supportive environment designed for academic excellence."
        imageSrc="/gedung-unhas.png" 
        cta={
          <Link 
            href="/virtual-tour" 
            className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group"
          >
            Take Virtual Tour 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        }
      />

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 relative z-20">
        
        {/* PERUBAHAN DISINI: 
            Ganti -mt-32 menjadi -mt-16 (atau -mt-12) 
            Supaya naiknya tidak terlalu tinggi dan tidak menabrak atap gedung */}
        <div className="-mt-16 bg-white rounded-xl shadow-2xl p-8 md:p-16">
          
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Explore Our Facilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Discover the comprehensive range of facilities designed to support your academic journey and personal growth.
            </p>
          </FadeIn>

          {/* Grid Layout tetap sama */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="h-full flex flex-col">
                  <div className="bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-start text-left">
                    <div className="bg-red-50 p-4 rounded-lg mb-6 group-hover:bg-red-600 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex items-center text-red-700 font-bold text-sm mt-auto group hover:underline underline-offset-4">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}