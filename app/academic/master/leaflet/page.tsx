import Image from "next/image";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-between"> 
            <div>
                <Navbar />
                <main className="w-full flex flex-col items-center pt-32 pb-20 px-4">   
                    {/* Title */}
                    <h1 className="text-2xl font-semibold mb-6 mt-6 text-center text-black max-w-4xl">
                        Leaflet for the Informatics Doctoral Study Program at Hasanuddin University
                    </h1>
                    {/* Gambar 1 */}
                    <div className="relative w-[650px] h-[500px]">
                        <Image
                        src="/leaflet.png"   
                        alt="Leaflet"
                        fill
                        className="object-cover shadow-lg"/>
                    </div>
                        {/* Gambar 2 */}
                        <div className="relative w-[650px] h-[500px] mt-6">
                        <Image
                            src="/leaflet2.png"   
                            alt="Leaflet 2"
                            fill
                            className="object shadow-lg bg-white"/>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}
