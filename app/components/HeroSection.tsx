"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Play } from "lucide-react";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                <Image
                    src="/img/mustard-fields.png"
                    alt="Mustard Fields"
                    fill
                    className="object-cover brightness-[0.7] dark:brightness-[0.5]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
            </motion.div>

            {/* Floating Oil Droplets */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: Math.random() * 800, x: Math.random() * 1200, opacity: 0 }}
                        animate={{
                            y: [null, Math.random() * -200],
                            opacity: [0, 0.4, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2
                        }}
                        className="absolute"
                    >
                        <Image src="/img/oil-drop.png" width={40} height={40} alt="Oil Drop" className="blur-[1px]" />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ opacity }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
                        Golden Drops of Tradition
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
                        Pure Gold For <br className="hidden md:block" /> Your Family
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Traditionally extracted. Nutrient rich. Chemical free. Experience the authentic aroma of pure cold-pressed sarso oil.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl shadow-primary/40 transition-transform active:scale-95">
                            <span className="relative z-10 flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Order Pure Gold
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        <button className="flex items-center gap-3 text-white font-semibold hover:text-primary transition-colors group">
                            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                                <Play className="w-5 h-5 fill-current" />
                            </div>
                            Watch Process
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Hero Floating Bottle Mockup */}
            <motion.div
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -right-20 bottom-10 hidden lg:block z-30 pointer-events-none"
            >
                <div className="relative">
                    <Image
                        src="/img/oil-bottle-1l.png"
                        width={450}
                        height={800}
                        alt="Product Mockup"
                        className="animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
                </div>
            </motion.div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-40" />
        </section>
    );
}
