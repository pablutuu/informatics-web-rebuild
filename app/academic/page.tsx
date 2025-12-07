"use client";

import AcademicHero from "@/component/academic/AcademicHero";
import AcademicSection from "@/component/academic/AcademicSection";
import ProgramCard from "@/component/academic/ProgramCard";
import { BookOpen, FileText, Map, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function AcademicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brochureImage, setBrochureImage] = useState("");

  const handleBrochureClick = (imageUrl: string) => {
    setBrochureImage(imageUrl);
    setIsModalOpen(true);
  };

  const s1Cards = [
    {
      title: "Informasi Program",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/bachelor", // Points to the main Bachelor page
    },
    {
      title: "Brosur PMB",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      // onclick lightbox
      onClick: () => handleBrochureClick("/images/brochure-bachelor.png"),
      
    },
  ];

  const s2Cards = [
    {
      title: "Informasi Program",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/program_information",
    },
    {
      title: "Brosur PMB",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/brochure",
    },
    {
      title: "Leaflet",
      icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/leaflet",
    },
  ];

  const s3Cards = [
    {
      title: "Informasi Program",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/program_information",
    },
    {
      title: "Brosur PMB",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/brochure",
    },
    {
      title: "Leaflet",
      icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/leaflet",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="flex flex-col">
        <AcademicHero />

        {/* Bachelor (S1) Section - Text Left, Cards Right */}
        <AcademicSection title="Informasi Akademik Program Sarjana (S1)">
          {/* Spacer to align 2 cards to the right on desktop */}
          <div className="hidden md:block" aria-hidden="true" />
          {s1Cards.map((card, index) => (
             <ProgramCard
               key={index}
               title={card.title}
               icon={card.icon}
               link={(card as any).link}
               onClick={(card as any).onClick}
             />
           ))}
        </AcademicSection>

        {/* Master (S2) Section - Cards Left, Text Right */}
        <AcademicSection 
          title="Informasi Akademik Program Magister (S2)" 
          reversed={true}
        >
          {s2Cards.map((card, index) => (
            <ProgramCard
              key={index}
              title={card.title}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </AcademicSection>

        {/* Doctoral (S3) Section - Text Left, Cards Right */}
        <AcademicSection title="Informasi Akademik Program Doktor (S3) Informatika">
           {s3Cards.map((card, index) => (
            <ProgramCard
              key={index}
              title={card.title}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </AcademicSection>
      </main>

      {/* Image Modal */}
      {isModalOpen && brochureImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10000]"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={brochureImage}
              alt="PMB Brochure"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
