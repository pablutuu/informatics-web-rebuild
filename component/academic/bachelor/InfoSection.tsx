"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// @ts-ignore
import Lightbox from "react-modal-image";

interface InfoSectionProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
    details?: ReactNode;
    showLearnMore?: boolean;
    learnMoreLink?: string;
    onLearnMoreClick?: () => void;
    brochureUrl?: string; // New prop for lightbox
}

export default function InfoSection({
    title,
    description,
    imageSrc = "/images/placeholder-card-bachelor.png",
    imageAlt = "Information Image",
    imagePosition = "right",
    details,
    showLearnMore = true,
    learnMoreLink = "#",
    onLearnMoreClick,
    brochureUrl,
}: InfoSectionProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleButtonClick = () => {
        if (brochureUrl) {
            setIsLightboxOpen(true);
        } else if (onLearnMoreClick) {
            onLearnMoreClick();
        }
    };

    return (
        <section className="w-full flex justify-center px-4 md:px-[73px] py-12 md:py-16">
            {isLightboxOpen && brochureUrl && (
                <Lightbox
                    medium={brochureUrl}
                    large={brochureUrl}
                    alt="Brochure"
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
            <div className="w-full max-w-[1320px] bg-white border border-slate-200 rounded-[30px] p-6 md:p-12 shadow-sm">
                <div className={`flex flex-col gap-8 md:gap-16 items-center ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
                        <motion.h2 
                            initial={{ opacity: 0, x: imagePosition === "left" ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold text-slate-900 uppercase"
                        >
                            {title}
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-base text-slate-600 leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        {details && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                {details}
                            </motion.div>
                        )}

                        {showLearnMore && (
                            (onLearnMoreClick || brochureUrl) ? (
                                <motion.button
                                    onClick={handleButtonClick}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="inline-flex items-center gap-2 text-indigo-900 font-semibold hover:gap-3 transition-all duration-300 w-fit"
                                >
                                    Pelajari Lebih Lanjut <ArrowRight className="w-5 h-5 bg-indigo-900 text-white rounded-full p-1" />
                                </motion.button>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    <Link 
                                        href={learnMoreLink}
                                        className="inline-flex items-center gap-2 text-indigo-900 font-semibold hover:gap-3 transition-all duration-300 w-fit cursor-pointer"
                                    >
                                        Pelajari Lebih Lanjut <ArrowRight className="w-5 h-5 bg-indigo-900 text-white rounded-full p-1" />
                                    </Link>
                                </motion.div>
                            )
                        )}
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[300px] md:h-[400px] w-full"
                        >
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover rounded-[20px]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
