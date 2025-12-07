import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OrganizationCard({
    number,
    title,
    description,
    activities,
}: {
    number: number;
    title: string;
    description: string;
    activities: string[];
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Animation Logic
    // Odd (e.g., 1): Center -> Right -> Center
    // Even (e.g., 2): Center -> Left -> Center
    const isOdd = number % 2 !== 0;

    // Map scroll progress to `left` percentage of the container.
    // We use a 4-point interpolation to create a "freeze" or hold effect in the middle.
    // Start (0%) -> Move to Edge + Offset (30%) -> Hold (80%) -> Return to Center (100%)
    // Center is 50% (handled by x: "-50%")
    // Offset is 10% from the edge (90% for Right, 10% for Left)
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

    return (
        <div ref={containerRef}>
            {/* Organization List Section */}
            <section className="w-full py-24 px-4 md:px-[73px] flex justify-center relative z-10 text-[#0C1B43]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[1320px] relative"
                >
                    {/* Decorative Square - Rolling Animation */}
                    <motion.div
                        style={{
                            left: leftPos,
                            x: "-50%", // Center the element on its left position
                            rotate: rotate,
                            opacity: opacity,
                            top: -40, // Keep original top position
                        }}
                        className="absolute w-40 h-40 md:w-64 md:h-64 bg-blue-500/20 rounded-[40px] z-0 backdrop-blur-md border border-white/10"
                    />

                    {/* Card Container */}
                    <div
                        className={`relative z-10 w-full bg-transparent border-2 border-white/50 rounded-[40px] p-8 md:p-16 overflow-hidden backdrop-blur-[2px] flex flex-col ${number % 2 === 0 ? "items-end text-right" : "items-start text-left"
                            }`}
                    >

                        <div className={`flex flex-col gap-8 ${number % 2 === 0 ? "items-end text-right" : "items-start text-left"}`}>
                            {/* Number */}
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

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-3xl md:text-5xl font-bold max-w-3xl drop-shadow-md"
                            >
                                {title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-lg md:text-xl leading-relaxed max-w-4xl font-light"
                            >
                                {description}
                            </motion.p>

                            {/* Activities */}
                            <div className="space-y-4 mt-4">
                                <motion.h4
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-2xl font-bold"
                                >
                                    Aktivitas Utama
                                </motion.h4>

                                <div className="flex flex-wrap gap-4">
                                    {activities.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 + (index * 0.1) }}
                                            className="px-6 py-3 bg-blue-900/5 border border-white/20 font-medium rounded-full text-sm md:text-base hover:bg-white/20 transition-colors cursor-default backdrop-blur-sm"
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