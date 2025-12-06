'use client';

import FadeIn from '@/components/fasilitas/FadeIn';
import HeroSection from '@/components/fasilitas/HeroSection';
import Image from 'next/image';
import { Monitor } from 'lucide-react'; 

export default function LearningFacilitiesPage() {
  // Data Fasilitas (Semua gambar pakai tes.jpg sesuai request)
  const facilities = [
    {
      title: "Classroom",
      description: "Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience, making it easier to envision student life at our university.",
      images: ["/tes.jpg", "/tes.jpg", "/tes.jpg"]
    },
    {
      title: "Lecture Theater",
      description: "Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience, making it easier to envision student life at our university.",
      images: ["/tes.jpg", "/tes.jpg", "/tes.jpg"]
    },
    {
      title: "Computer Lab",
      description: "Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience, making it easier to envision student life at our university.",
      images: ["/tes.jpg", "/tes.jpg", "/tes.jpg"]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      
      {/* 1. Hero Section (Subpage Variant) */}
      <HeroSection
        title="Learning Facilities"
        subtitle="State-of-the-art laboratories and smart classrooms designed to enhance your learning experience."
        imageSrc="/tes.jpg" 
        variant="subpage"
        backLink="/fasilitas"
        icon={<Monitor />}
      />

      {/* 2. Main Content */}
      <div className="container mx-auto px-6 mt-12 md:mt-16 relative z-20">
        
        {/* Overview Section */}
        <FadeIn className="mb-16 max-w-5xl">
          <h2 className="text-3xl font-bold text-red-900 mb-6">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Experience our campus like never before with our cutting-edge virtual tour technology. Navigate through academic buildings, residence halls, recreational facilities, and outdoor spaces with interactive 360-degree views. Our virtual tour platform allows prospective students and families to explore the campus at their convenience, making it easier to envision student life at our university.
          </p>
        </FadeIn>

        {/* Features Header */}
        <FadeIn className="mb-8">
           <h2 className="text-3xl font-bold text-red-900 mb-2">Features & Amenities</h2>
        </FadeIn>

        {/* 3. Looping List Fasilitas (Card Putih per Item) */}
        <div className="space-y-12">
          {facilities.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                
                {/* Title & Desc */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>

                {/* Image Grid (3 Kolom) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {item.images.map((imgSrc, imgIndex) => (
                    <div key={imgIndex} className="relative h-64 md:h-64 rounded-lg overflow-hidden group shadow-md">
                      <Image
                        src={imgSrc} 
                        alt={`${item.title} ${imgIndex + 1}`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
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