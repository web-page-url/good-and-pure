"use client";

import React, { useState, useEffect } from "react";
import { Section } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";

const galleryImages = [
    { id: 1, src: "/img/carsol-img/good-and-pure-img-1.0.jpg", alt: "Good & Pure Heritage 1" },
    { id: 2, src: "/img/carsol-img/good-and-pure-img-2.0.jpg", alt: "Good & Pure Heritage 2" },
    { id: 3, src: "/img/carsol-img/good-and-pure-img-3.0.jpg", alt: "Good & Pure Heritage 3" },
    { id: 4, src: "/img/carsol-img/good-and-pure-img-4.0.jpg", alt: "Good & Pure Heritage 4" },
    { id: 5, src: "/img/carsol-img/good-and-pure-img-5.0.jpg", alt: "Good & Pure Heritage 5" },
    { id: 6, src: "/img/carsol-img/good-and-pure-img-6.0.jpg", alt: "Good & Pure Heritage 6" },
    { id: 7, src: "/img/carsol-img/good-and-pure-img-7.0.jpg", alt: "Good & Pure Heritage 7" },
    { id: 8, src: "/img/carsol-img/good-and-pure-img-8.0.jpg", alt: "Good & Pure Heritage 8" },
    { id: 9, src: "/img/carsol-img/good-and-pure-img-9.0.jpg", alt: "Good & Pure Heritage 9" },
];

export function GallerySection() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % galleryImages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const next = () => {
        setIsAutoPlaying(false);
        setCurrent((prev) => (prev + 1) % galleryImages.length);
    };

    const prev = () => {
        setIsAutoPlaying(false);
        setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <Section id="gallery" className="bg-background relative py-24 pb-32">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/2 opacity-5 pointer-events-none skew-x-12 transform origin-top" />

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Visual Heritage</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        The <span className="text-primary italic">Good & Pure</span> Story
                    </h2>
                    <div className="w-24 h-1 bg-primary/20 rounded-full" />
                </div>

                <div className="relative max-w-lg md:max-w-xl mx-auto">
                    {/* Main Stage */}
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-4 border-background glass-card">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                            >
                                {/* Blurred Background to fill gaps */}
                                <div className="absolute inset-0 opacity-20 blur-3xl scale-150">
                                    <Image
                                        src={galleryImages[current].src}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <motion.div
                                    className="relative w-full h-full z-10 p-2"
                                >
                                    <Image
                                        src={galleryImages[current].src}
                                        alt={galleryImages[current].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>

                                {/* Subtle indicator of current slide */}
                                <div className="absolute top-6 right-8 text-foreground/20 text-xs font-mono tabular-nums">
                                    {current + 1} / {galleryImages.length}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons Overlay */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 flex justify-between pointer-events-none z-50">
                            <button
                                onClick={prev}
                                className="w-14 h-14 rounded-full bg-primary text-white border-2 border-background flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto shadow-[0_8px_32px_rgba(242,105,7,0.3)] group"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-7 h-7 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={next}
                                className="w-14 h-14 rounded-full bg-primary text-white border-2 border-background flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto shadow-[0_8px_32px_rgba(242,105,7,0.3)] group"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-7 h-7 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Progress Bar & Indicators Outside */}
                    <div className="mt-12 flex flex-col items-center">
                        <div className="flex gap-2">
                            {galleryImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrent(i);
                                    }}
                                    className="group relative py-4 px-2"
                                >
                                    <div className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? "w-12 bg-primary" : "w-3 bg-primary/10 group-hover:bg-primary/30"
                                        }`} />
                                    {current === i && (
                                        <motion.div
                                            layoutId="activeDot"
                                            className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
}
