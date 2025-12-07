import { Metadata } from "next";
import BachelorPageContent from "@/component/academic/bachelor/BachelorPageContent";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";


export const metadata: Metadata = {
  title: "Bachelor Program (S1) - Informatics Engineering Unhas",
  description: "Information about the Bachelor Program (S1) in Informatics Engineering at Hasanuddin University.",
};

export default function BachelorInformationPage() {
  return (
    <>
      <Navbar />
      <BachelorPageContent />
      <Footer />
    </>
  );
}
