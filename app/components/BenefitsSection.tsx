"use client";

import React from "react";
import { Section } from "./Section";
import { Heart, Shield, Brain, Flame, Apple } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: Heart,
        title: "Heart Friendly",
        description: "Rich in Omega-3 fatty acids that help maintain healthy cholesterol levels and support cardiac function.",
        color: "from-rose-500/20 to-rose-500/5",
    },
    {
        icon: Shield,
        title: "Immunity Booster",
        description: "Natural antibacterial and antifungal properties that strengthen your body's daily defense system.",
        color: "from-blue-500/20 to-blue-500/5",
    },
    {
        icon: Apple,
        title: "Improves Digestion",
        description: "Stimulates digestive enzymes, improving gut health and ensuring better nutrient absorption.",
        color: "from-green-500/20 to-green-500/5",
    },
    {
        icon: Brain,
        title: "Brain Support",
        description: "Healthy fats and antioxidants that support cognitive health and maintain focus throughout the day.",
        color: "from-purple-500/20 to-purple-500/5",
    },
    {
        icon: Flame,
        title: "Natural Body Warmth",
        description: "Highly recommended in traditional Ayurveda for providing natural warmth during winters.",
        color: "from-orange-500/20 to-orange-500/5",
    },
];

export function BenefitsSection() {
    return (
        <Section id="benefits" className="bg-foreground/[0.02]">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Wellness</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                    Why Your Kitchen <span className="text-primary">Needs This</span>
                </h2>
                <p className="text-lg text-foreground/60 font-light">
                    More than just oil. It's a traditional superfood that has powered healthy Indian kitchens for centuries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="glass-card p-10 group relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                {benefit.description}
                            </p>
                        </div>

                        {/* Subtle Border Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
