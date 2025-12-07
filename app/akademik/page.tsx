

"use client";

import AcademicHero from "@/component/academic/AcademicHero";
import AcademicSection from "@/component/academic/AcademicSection";
import ProgramCard from "@/component/academic/ProgramCard";
import { BookOpen, FileText, Map, X } from "lucide-react";
import { useState } from "react";
// @ts-ignore
import Lightbox from "react-modal-image";
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
      link: "/akademik/bachelor", // Placeholder link
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
      {isModalOpen && brochureImage && (
        <Lightbox
          medium={brochureImage}
          large={brochureImage}
          alt="PMB Brochure"
          onClose={() => setIsModalOpen(false)}
        />
      )}


    </div>
  );
}
