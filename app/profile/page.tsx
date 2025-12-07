"use client"; // Pastikan ini ada karena kita pakai useEffect

import { useEffect } from "react"; // Import useEffect
import HeroProfile from "@/component/profile/heroProfile";
import VisionMissionSequence from "@/component/profile/visionMission";
import OrganizationStructure from "@/component/profile/organizationStructure"; 
import AccreditationSection from "@/component/profile/accreditation"; 
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

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
      <Navbar />

      {/* Hero Section */}
      <HeroProfile />

      {/* Visi Misi */}
      <VisionMissionSequence />

      {/* Org Structure */}
      <OrganizationStructure />

      {/* Akreditasi */}
      <AccreditationSection />

      <Footer />
    </main>
  );
}