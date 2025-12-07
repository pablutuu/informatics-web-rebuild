import { motion } from "framer-motion";
import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            {/* Main Content Area - Centered vertically */}
            <main className="flex-grow flex items-center justify-center px-4 md:px-[73px] py-24 relative z-10">

                {/* Card Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom ease for elegance
                    className="relative w-full max-w-[1320px] h-[75vh] rounded-[40px] overflow-hidden shadow-2xl"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/organization-illustration.png"
                            alt="Organization Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Navy Blue Overlay with 80% Transparency */}
                    <div className="absolute inset-0 z-10 bg-[#0C1B43]/80 backdrop-blur-[2px]" />

                    {/* Content Container */}
                    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6">

                        {/* Background Outlined Text (Stretched) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute select-none pointer-events-none"
                        >
                            <h1
                                className="text-6xl md:text-9xl font-bold tracking-widest text-transparent opacity-30"
                                style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)" }}
                            >
                                ORGANISASI
                            </h1>
                        </motion.div>

                        {/* Main Content Group */}
                        <div className="relative space-y-8">
                            {/* Main Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg"
                            >
                                Organisasi & Kegiatan
                            </motion.h1>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                className="h-[2px] w-24 bg-cyan-400 mx-auto rounded-full"
                            />

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                className="text-lg md:text-2xl text-gray-200 font-light italic max-w-2xl mx-auto leading-relaxed"
                            >
                                "Temukan ruang berkembang, berkolaborasi, dan bergerak bersama."
                            </motion.p>
                        </div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 w-32 h-32 border border-cyan-400/20 rounded-full bg-cyan-400/5 backdrop-blur-md"
                        />

                    </div>
                </motion.div>
            </main>

        </div>
    );
}