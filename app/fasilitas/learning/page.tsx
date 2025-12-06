'use client';

import FadeIn from '@/components/fasilitas/FadeIn';
import HeroSection from '@/components/fasilitas/HeroSection';
import Image from 'next/image';
import { Monitor } from 'lucide-react'; // Ikon untuk hero section

export default function LearningFacilitiesPage() {
  // Data Fasilitas (Bisa ditambah/dikurangi dengan mudah disini)
  const facilities = [
    {
      title: "Classroom",
      description: "Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience.",
      // Ganti src ini dengan gambar aslimu nanti
      images: [
        "/tes.jpg", 
        "/tes.jpg", 
        "/tes.jpg"
      ]
    },
    {
      title: "Lecture Theater",
      description: "Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience.",
      images: [
        "/tes.jpg", 
        "/tes.jpg", 
        "/tes.jpg"
      ]
    },
    {
      title: "Computer Lab",
      description: "Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience.",
      images: [
        "/tes.jpg", 
        "/tes.jpg", 
        "/tes.jpg"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Hero Section (Variant Subpage) */}
      <HeroSection
        title="Learning Facilities"
        subtitle="State-of-the-art laboratories and smart classrooms designed to enhance your learning experience."
        imageSrc="/hero-section-2.png" // Pakai gambar header yang sama atau beda
        variant="subpage"
        backLink="/fasilitas"
        icon={<Monitor />}
      />

      {/* 2. Main Content */}
      <div className="container mx-auto px-6 mt-12 md:mt-16 relative z-20">
        
        {/* Overview Section */}
        <FadeIn className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-red-900 mb-6">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience.
          </p>
        </FadeIn>

        {/* Features Header */}
        <FadeIn className="mb-12">
           <h2 className="text-3xl font-bold text-red-900 mb-2">Features & Amenities</h2>
           <div className="w-20 h-1 bg-gray-300"></div>
        </FadeIn>

        {/* 3. Looping List Fasilitas */}
        <div className="space-y-20">
          {facilities.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                
                {/* Title & Desc */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image Grid (3 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {item.images.map((imgSrc, imgIndex) => (
                    <div key={imgIndex} className="relative h-64 md:h-56 rounded-xl overflow-hidden group">
                      <Image
                        src={imgSrc} // Pastikan file gambar ada di folder public!
                        alt={`${item.title} ${imgIndex + 1}`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay tipis saat hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </main>
  );
}