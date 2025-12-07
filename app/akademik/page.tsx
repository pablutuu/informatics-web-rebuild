

"use client";

import AcademicHero from "@/component/academic/AcademicHero";
import AcademicSection from "@/component/academic/AcademicSection";
import ProgramCard from "@/component/academic/ProgramCard";
import { BookOpen, FileText, Map, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function AcademicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brochureImage, setBrochureImage] = useState("");

  const handleBrochureClick = (imageUrl: string) => {
    setBrochureImage(imageUrl);
    setIsModalOpen(true);
  };

  const s1Cards = [
    {
      title: "Program Information",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/bachelor/information", // Placeholder link
    },
    {
      title: "PMB Brochure",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      onClick: () => handleBrochureClick("/images/brochure-bachelor.png"),
    },
  ];

  const s2Cards = [
    {
      title: "Program Information",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/information",
    },
    {
      title: "PMB Brochure",
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
      title: "Program Information",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/information",
    },
    {
      title: "PMB Brochure",
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

      
      <main className="flex flex-col">
        <AcademicHero />

        {/* Bachelor (S1) Section - Text Left, Cards Right */}
        <AcademicSection title="Bachelor (S1) Program Academic Information">
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
          title="Master (S2) Program Academic Information" 
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
        <AcademicSection title="Informatics Doctoral (S3) Study Program Academic Information">
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
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button - Fixed top right */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-[2010] bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors backdrop-blur-md"
          >
            <X size={32} />
          </button>

          <div 
            className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            {brochureImage && (
              <div className="relative w-full h-full"> 
                <Image 
                  src={brochureImage} 
                  alt="PMB Brochure" 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  quality={100}
                />
              </div>
            )}
          </div>
        </div>
      )}


    </div>
  );
}
