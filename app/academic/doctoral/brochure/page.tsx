import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-between"> 
            <div>
                <Navbar />
                <main className="w-full flex flex-col items-center pt-32 pb-20 px-4">   
                    {/* Title */}
                    <h1 className="text-2xl font-semibold mb-6 mt-6 text-center text-black max-w-4xl">
                        PMB Brochure for the Informatics Doctoral Study Program at Hasanuddin University
                    </h1>
                    {/* Medium Image Container */}
                    <div className="relative w-[700px] h-[1000px] shadow-xl rounded-lg">
                        <Image
                            src="/brosur.png" 
                            alt="Brochure"
                            fill
                            className="object-cover rounded-lg shadow-lg"/>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}
