"use client"; // Pastikan ini ada karena kita pakai useEffect

import { useEffect } from "react"; // Import useEffect
import HeroProfile from "@/components/profile/heroProfile";
import VisionMissionSequence from "@/components/profile/visionMission";
import OrganizationStructure from "@/components/profile/organizationStructure"; 
import AccreditationSection from "@/components/profile/accreditation"; 

export default function ProfilePage() {

  // [LOGIKA GLOBAL]: Force Scroll to Top saat Refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []); 

  return (
    <main className="min-h-screen w-full bg-[#020410]">
      
      {/* Hero Section */}
      <HeroProfile />

      {/* Visi Misi */}
      <VisionMissionSequence />

      {/* Org Structure */}
      <OrganizationStructure />

      {/* Akreditasi */}
      <AccreditationSection />

    </main>
  );
}