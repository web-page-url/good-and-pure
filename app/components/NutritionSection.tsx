"use client";

import React, { useEffect, useState } from "react";
import { Section } from "./Section";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" });
        return controls.stop;
    }, [value, count]);

    useEffect(() => {
        return rounded.onChange((v) => setDisplayValue(v));
    }, [rounded]);

    return <span>{displayValue}{suffix}</span>;
}

const stats = [
    { label: "Omega 3", value: 480, suffix: "mg", icon: "🧬" },
    { label: "Vitamin E", value: 15, suffix: "mg", icon: "💊" },
    { label: "Healthy Fats", value: 98, suffix: "%", icon: "🥑" },
    { label: "Cholesterol", value: 0, suffix: "%", icon: "🛡️" },
];

export function NutritionSection() {
    return (
        <Section className="bg-zinc-900 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Composition</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Modern Nutrition <br /> <span className="text-primary">Ancient Roots</span>
                    </h2>
                    <p className="text-lg text-white/50 font-light leading-relaxed mb-12">
                        Every tablespoon of Good & Pure Mustard Oil is packed with essential fatty acids and antioxidants.
                        Our no-heat extraction process ensures that none of these precious nutrients are lost.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                                <div className="text-3xl font-black text-primary tracking-tighter mb-1">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm font-bold opacity-40 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative aspect-square flex items-center justify-center">
                    {/* Animated Circles */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-white/5 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-20 border border-primary/20 rounded-full"
                    />

                    <div className="relative z-10 text-center">
                        <div className="w-64 h-64 bg-primary/20 blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                        <div className="glass-card p-10 rounded-full border-primary/30 relative">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2 opacity-50">Trans Fat</p>
                            <p className="text-6xl font-black text-primary tracking-tighter leading-none">ZERO</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
