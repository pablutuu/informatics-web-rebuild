"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { ReactNode } from "react";

interface BachelorHeroProps {
    title?: ReactNode;
    backgroundImage?: string;
}

export default function BachelorHero({ 
    title, 
    backgroundImage = "/images/bachelor-hero.png" 
}: BachelorHeroProps) {
    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Bachelor Program Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-[#0C1B43]/60" />

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-4"
                >
                    {title || (
                        <>
                            BACHELOR
                            <br />
                            PROGRAM (S1)
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
