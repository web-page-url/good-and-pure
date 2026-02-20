"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Info, Check } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Pure Mustard Oil (1L)",
        price: "₹249",
        image: "/img/oil-bottle-1l.png",
        rating: 4.9,
        reviews: 128,
        badge: "Cold Pressed",
        features: ["Wooden Ghani", "Glass Bottle", "Heart Healthy"],
    },
    {
        id: 2,
        name: "Pure Mustard Oil (5L)",
        price: "₹1,199",
        image: "/img/oil-can-5l.png",
        rating: 4.8,
        reviews: 85,
        badge: "Family Pack",
        features: ["Value Pack", "Eco Container", "100% Pure"],
    },
];

export function ProductSection() {
    return (
        <Section id="shop">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Store</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                    Bring Home the <span className="text-primary italic">Heritage</span>
                </h2>
                <p className="text-lg text-foreground/60 font-light">
                    Available in 1L and 5L packs. Every drop is a promise of health and purity for your kitchen.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ y: -15 }}
                        className="glass-card overflow-hidden group border border-primary/10 flex flex-col"
                    >
                        {/* Image Wrapper with 3D Effect */}
                        <div className="relative h-[400px] w-full bg-foreground/[0.02] flex items-center justify-center p-12 overflow-hidden">
                            {/* Badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    {product.badge}
                                </span>
                            </div>

                            <motion.div
                                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative h-full w-full"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Overlay with details */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl rounded-full scale-50" />
                        </div>

                        {/* Content Entry */}
                        <div className="p-8 space-y-6 flex-grow flex flex-col">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight mb-2">{product.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-primary">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary" : ""}`} />
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium opacity-50">({product.reviews} Reviews)</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-black text-primary tracking-tighter">{product.price}</p>
                                    <p className="text-xs font-bold opacity-30 uppercase">Incl. Taxes</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/5 text-xs font-semibold">
                                        <Check className="w-3 h-3 text-primary" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 flex gap-4 mt-auto">
                                <button className="flex-grow bg-primary text-primary-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all">
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <button className="w-14 h-14 rounded-2xl border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                                    <Info className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
