"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sunita Verma",
        role: "Home Chef",
        image: "/img/user-sunita.png",
        content: "The aroma reminds me of my grandmother's kitchen. It's rare to find such authentic wooden-pressed oil these days. Completely changed the taste of my curries.",
        rating: 5,
    },
    {
        name: "Dr. Rajesh Khanna",
        role: "Nutritionist",
        image: "/img/user-rajesh.png",
        content: "Feels lighter and more authentic. I recommend Good & Pure to all my clients who are looking for chemical-free, nutrient-dense cooking options.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Fitness Enthusiast",
        image: "/img/user-priya.png",
        content: "We switched completely to Good & Pure. The clarity and purity are visible from the first drop. Plus, the glass packaging is a great touch for the environment.",
        rating: 5,
    },
];

export function TestimonialSection() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % testimonials.length);
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

    return (
        <Section id="testimonials" className="bg-primary/5">
            <div className="max-w-4xl mx-auto text-center relative">
                <Quote className="w-20 h-20 text-primary/10 absolute -top-10 -left-10" />

                <div className="mb-12">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Loved by <span className="text-primary italic">Families</span>
                    </h2>
                </div>

                <div className="relative glass-card p-12 md:p-20 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                                    <Image
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center text-primary mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-primary" />
                                ))}
                            </div>
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic">
                                "{testimonials[current].content}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                                <p className="text-sm opacity-50 uppercase tracking-widest">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
