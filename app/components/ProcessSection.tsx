"use client";

import React, { useRef } from "react";
import { Section } from "./Section";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "Seed Selection",
        description: "Only the finest, high-grade mustard seeds are chosen, sourced directly from local farmers in Rajasthan.",
    },
    {
        step: "02",
        title: "Sun Drying",
        description: "Seeds are naturally sun-dried to optimal moisture levels to ensure the best aroma and nutrient retention.",
    },
    {
        step: "03",
        title: "Wooden Ghani Extraction",
        description: "The core of our process. Seeds are crushed slowly in a traditional wooden press without generating heat.",
    },
    {
        step: "04",
        title: "Natural Filtration",
        description: "Our oil is left to settle naturally for 48 hours. No chemical filters are ever used.",
    },
    {
        step: "05",
        title: "Fresh Packaging",
        description: "Pure oil is bottled in premium glass or high-quality containers to preserve its natural goodness.",
    },
];

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Section id="process">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Craftsmanship</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                    The Art of <span className="text-primary italic">Slow Extraction</span>
                </h2>
                <p className="text-lg text-foreground/60 font-light">
                    Tradition takes time. We don't rush. We don't heat. We just let nature take its course.
                </p>
            </div>

            <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
                {/* Progress Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2" />
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 origin-top z-10 shadow-[0_0_15px_rgba(255,191,0,0.5)]"
                />

                <div className="space-y-24">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-20`}
                        >
                            {/* Dot mapping */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-20" />

                            {/* Content */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                <div className="mb-4">
                                    <span className="text-6xl font-black text-foreground/5 select-none">{step.step}</span>
                                    <h3 className="text-2xl font-bold -mt-8">{step.title}</h3>
                                </div>
                                <p className="text-foreground/60 leading-relaxed font-light max-w-sm mx-auto md:mx-0">
                                    {step.description}
                                </p>
                            </div>

                            {/* Spacer for MD screens */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
