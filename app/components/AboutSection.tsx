"use client";

import React from "react";
import Image from "next/image";
import { Section } from "./Section";
import { CheckCircle, Leaf, Sun, HeartPulse, Shield } from "lucide-react";

const features = [
    { icon: CheckCircle, text: "100% Cold Pressed" },
    { icon: Leaf, text: "Wooden Kachi Ghani Extraction" },
    { icon: Sun, text: "No Heat Process" },
    { icon: Shield, text: "No Chemicals" },
    { icon: HeartPulse, text: "Farm Direct Mustard Seeds" },
];

export function AboutSection() {
    return (
        <Section id="our-oil" containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl">
                    <Image
                        src="/img/wooden-ghani.png"
                        alt="Traditional wooden ghani process"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                {/* Floating Accent */}
                <div className="absolute -bottom-10 -right-10 bg-card p-8 rounded-3xl shadow-2xl glass border border-white/10 hidden md:block">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                            <Sun className="w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                            <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Tradition</p>
                            <p className="text-xl font-bold">100% Natural</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                <div>
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Legacy</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
                        What Makes Good & Pure <span className="text-primary italic">Different?</span>
                    </h2>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                    Good & Pure was born from the belief that purity is not a luxury — it is a right.
                    Our mustard seeds are sourced directly from trusted farmers and extracted using
                    traditional wooden ghani without heat.
                    <br /><br />
                    Experience the heritage in every drop. Preserving nutrients. Preserving aroma. Preserving tradition.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-foreground/5 hover:bg-primary/10 transition-colors group">
                            <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>

                <button className="text-primary font-bold flex items-center gap-2 group">
                    Explore the Full Story
                    <span className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all" />
                </button>
            </div>
        </Section>
    );
}
