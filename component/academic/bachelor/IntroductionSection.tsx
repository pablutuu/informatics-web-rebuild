"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, Cpu, GraduationCap, CheckCircle2 } from "lucide-react";

export default function IntroductionSection() {
    const researchFields = [
        { name: "Komputasi Awan & Big Data", icon: Cloud, color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Kecerdasan Buatan & Robotika", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
        { name: "Internet of Things (IoT)", icon: Cpu, color: "text-emerald-500", bg: "bg-emerald-50" },
    ];

    return (
        <section className="w-full flex justify-center px-4 md:px-[73px] py-16 md:py-24">
            <div className="w-full max-w-[1320px] bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-[40px] p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                
                {/* Subtle Grid Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
                    
                    {/* Intro Text - Left Side */}
                    <div className="w-full md:w-3/5 space-y-8">
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <div className="h-1 w-12 bg-indigo-600 rounded-full" />
                                <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">About Program</span>
                            </motion.div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-4xl font-bold text-slate-900"
                            >
                                INTRODUCTION
                            </motion.h2>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg"
                        >
                            <p>
                                Program Studi Sarjana Informatika berada di bawah naungan Departemen Teknik Informatika, Fakultas Teknik, Universitas Hasanuddin, dan telah meraih akreditasi <span className="font-semibold text-slate-900">"Unggul"</span> dari LAM INFOKOM.
                            </p>
                            <p>
                                Dirancang untuk menghasilkan lulusan dengan kapasitas penelitian yang unggul dan etika profesional, kurikulum kami didasarkan pada standar nasional (KKNI) dan panduan internasional (ACM & IEEE). Kami mencakup mata kuliah inti seperti AI, Data Science, Rekayasa Perangkat Lunak, dan Jaringan Komputer.
                            </p>
                        </motion.div>
                    </div>

                    {/* Research Fields & Info - Right Side */}
                    <div className="w-full md:w-2/5 flex flex-col gap-8">
                        {/* Research Fields Card */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                Bidang Penelitian
                            </h3>
                            <div className="space-y-4">
                                {researchFields.map((item, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                                    >
                                        <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-slate-700 group-hover:text-slate-900">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Credits / Info */}
                         <motion.div
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.4 }}
                         >
                            <div className="bg-[#0C1B43] text-white p-6 rounded-3xl flex items-center gap-5 shadow-lg shadow-indigo-900/20">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide">Total Beban Studi</p>
                                    <p className="text-2xl font-bold">145 SKS</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
