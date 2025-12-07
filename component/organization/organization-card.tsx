import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function OrganizationCard({
    number,
    title,
    description,
    activities,
    image,
}: {
    number: number;
    title: string;
    description: string;
    activities: string[];
    image: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // --- LOGIKA ANIMASI SCROLL ---
    const isOdd = number % 2 !== 0;

    const leftPos = useTransform(
        scrollYProgress,
        [0, 0.3, 0.8, 1],
        isOdd
            ? ["50%", "95%", "95%", "50%"]
            : ["50%", "5%", "5%", "50%"]
    );

    const rotate = useTransform(
        scrollYProgress,
        [0, 0.3, 0.8, 1],
        isOdd ? [0, 180, 180, 360] : [0, -180, -180, -360]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.8, 1],
        [0, 1, 1, 0]
    );

    // --- DEFINISI VARIANTS ---
    const imageVariants: Variants = {
        hidden: { 
            opacity: 0, 
            x: isOdd ? 100 : -100, 
            scale: 0.8 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 0.8 
            }
        }
    };

    return (
        <div ref={containerRef}>
            <section className="w-full py-24 px-4 md:px-[73px] flex justify-center relative z-10 text-[#0C1B43]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[1320px] relative"
                >
                    {/* Background Square */}
                    <motion.div
                        style={{
                            left: leftPos,
                            x: "-50%",
                            rotate: rotate,
                            opacity: opacity,
                            top: -40,
                        }}
                        className="absolute w-40 h-40 md:w-64 md:h-64 bg-blue-500/20 rounded-[40px] z-0 backdrop-blur-md border border-white/10"
                    />

                    {/* --- CARD CONTAINER --- */}
                    <div
                        className={`relative z-10 w-full bg-transparent border-2 border-white/50 rounded-[40px] p-8 md:p-12 overflow-hidden backdrop-blur-[2px] flex flex-col md:items-center gap-8 md:gap-12
                        ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} 
                        `}
                    >
                        
                        {/* --- BAGIAN GAMBAR --- */}
                        <motion.div 
                            className="w-full md:w-5/12 h-[300px] md:h-[400px] relative shrink-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={imageVariants} 
                        >
                            {/* PERUBAHAN DI SINI: Menggunakan Hex #171717 (Neutral Dark) */}
                            {/* Ini menghilangkan tint biru dari 'slate' dan memberikan abu-abu murni yang hampir hitam */}
                            <div className={`relative w-full h-full rounded-[30px] overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-500 ${number === 2 ? "bg-[#171717]" : "bg-white"}`}>
                                <Image 
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-contain p-6" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B43]/10 to-transparent pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* --- BAGIAN TEKS --- */}
                        <div className={`w-full md:w-7/12 flex flex-col gap-6 ${isOdd ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-8xl md:text-9xl font-bold text-transparent"
                                style={{ WebkitTextStroke: "2px #0C1B43" }}
                            >
                                0{number}
                            </motion.h2>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold drop-shadow-md leading-tight"
                            >
                                {title}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-lg md:text-xl leading-relaxed font-light text-slate-700"
                            >
                                {description}
                            </motion.p>

                            <div className="space-y-4 mt-2">
                                <motion.h4
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-2xl font-bold text-[#0C1B43]"
                                >
                                    Aktivitas Utama
                                </motion.h4>

                                <div className={`flex flex-wrap gap-4 ${isOdd ? "justify-start" : "md:justify-end"}`}>
                                    {activities.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 + (index * 0.1) }}
                                            className="px-6 py-3 bg-blue-900/5 border border-[#0C1B43]/10 font-medium rounded-full text-sm md:text-base hover:bg-[#0C1B43] hover:text-white transition-colors cursor-default backdrop-blur-sm text-[#0C1B43]"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </section>
        </div >
    );
}