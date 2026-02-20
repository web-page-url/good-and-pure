"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
                left: -100,
                top: -100,
            }}
            className="fixed z-[-1] pointer-events-none w-[200px] h-[200px] bg-primary/10 blur-[80px] rounded-full"
        />
    );
}
