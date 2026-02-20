"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    containerClassName?: string;
}

export function Section({ children, className, id, containerClassName }: SectionProps) {
    return (
        <section id={id} className={cn("py-24 px-6 overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn("max-w-7xl mx-auto", containerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
}
