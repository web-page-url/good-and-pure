"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet } from "lucide-react";

export function PageLoader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6"
                >
                    <div className="relative w-32 h-32 mb-8">
                        <Droplet className="w-full h-full text-foreground/5 fill-foreground/5" />
                        <motion.div
                            className="absolute inset-0 overflow-hidden"
                            initial={{ height: "0%" }}
                            animate={{ height: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                            style={{ bottom: 0, top: "auto" }}
                        >
                            <Droplet className="w-32 h-32 text-primary fill-primary" />
                        </motion.div>
                    </div>

                    <div className="text-center space-y-4">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xl font-bold tracking-widest uppercase"
                        >
                            Extracting Purity
                        </motion.h2>
                        <div className="w-48 h-[2px] bg-foreground/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
