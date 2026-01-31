"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [phase, setPhase] = useState(0); // 0: initial, 1: brand reveal, 2: exit prep

    // Animation Constants
    const smoothEase = [0.25, 0.1, 0.25, 1] as const;
    const snappyEase = [0.16, 1, 0.3, 1] as const;
    const elasticEase = [0.68, -0.6, 0.32, 1.6] as const;

    const TOTAL_DURATION = 3500;

    // Phase progression
    useEffect(() => {
        const phase1 = setTimeout(() => setPhase(1), 400);
        const phase2 = setTimeout(() => setPhase(2), 2800);
        const exit = setTimeout(() => setLoading(false), TOTAL_DURATION);

        return () => {
            clearTimeout(phase1);
            clearTimeout(phase2);
            clearTimeout(exit);
        };
    }, []);

    // Letter arrays for staggered reveal
    const devhubLetters = "DEVHUB".split('');
    const fusionxLetters = "FUSIONX".split('');

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(30px)"
                    }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="fixed inset-0 bg-[#042f2e] overflow-hidden flex items-center justify-center z-[999999]"
                >
                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Static grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.08 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'linear-gradient(to right, rgba(5, 150, 105, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 1px, transparent 1px)',
                                backgroundSize: '80px 80px'
                            }}
                        />

                        {/* Horizontal scan line */}
                        <motion.div
                            initial={{ y: '-10%' }}
                            animate={{ y: '110%' }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
                        />

                        {/* Vertical scan line */}
                        <motion.div
                            initial={{ x: '-10%' }}
                            animate={{ x: '110%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                            className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"
                        />

                        {/* Corner accents */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5, ease: snappyEase }}
                            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-emerald-500/30"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, ease: snappyEase }}
                            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30"
                        />
                    </div>

                    <div className="relative flex flex-col items-center justify-center gap-4">

                        {/* System Status - Top */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: smoothEase }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <motion.div
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-emerald-400"
                            />
                            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500/70 uppercase">
                                System Initializing
                            </span>
                        </motion.div>

                        {/* Main Brand Container */}
                        <div className="relative">

                            {/* DEVHUB - Letter by letter */}
                            <div className="overflow-hidden mb-2">
                                <div className="flex justify-center">
                                    {devhubLetters.map((letter, index) => (
                                        <motion.span
                                            key={`devhub-${index}`}
                                            initial={{ y: '120%', rotateX: -90 }}
                                            animate={phase >= 1 ? { y: 0, rotateX: 0 } : { y: '120%', rotateX: -90 }}
                                            transition={{
                                                delay: index * 0.08,
                                                duration: 0.6,
                                                ease: snappyEase
                                            }}
                                            className="text-6xl md:text-9xl font-black text-white inline-block"
                                            style={{ fontStyle: 'italic', letterSpacing: '0.05em' }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Connecting Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={phase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: snappyEase }}
                                style={{ transformOrigin: 'left' }}
                                className="h-[2px] w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500/50 mb-3"
                            />

                            {/* FUSIONX - Letter by letter with offset */}
                            <div className="overflow-hidden flex justify-end pr-4">
                                <div className="flex">
                                    {fusionxLetters.map((letter, index) => (
                                        <motion.span
                                            key={`fusionx-${index}`}
                                            initial={{ y: '120%', opacity: 0 }}
                                            animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: '120%', opacity: 0 }}
                                            transition={{
                                                delay: 0.6 + (index * 0.06),
                                                duration: 0.5,
                                                ease: snappyEase
                                            }}
                                            className="text-4xl md:text-6xl font-black text-emerald-300 inline-block tracking-tight"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative bracket */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={phase >= 1 ? { opacity: 0.3, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ delay: 1.2, duration: 0.4 }}
                                className="absolute -right-8 top-1/2 -translate-y-1/2 text-emerald-500 font-mono text-4xl"
                            >
                                ]
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={phase >= 1 ? { opacity: 0.3, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 1.2, duration: 0.4 }}
                                className="absolute -left-8 top-1/2 -translate-y-1/2 text-emerald-500 font-mono text-4xl"
                            >
                                [
                            </motion.div>
                        </div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={phase >= 1 ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="font-mono text-xs tracking-[0.3em] text-emerald-400/60 uppercase mt-6"
                        >
                            Strategic Development Partner
                        </motion.p>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-12 w-48 relative"
                        >
                            <div className="h-[2px] w-full bg-emerald-900/50 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2.5, ease: smoothEase }}
                                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="font-mono text-[8px] text-emerald-600">0%</span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
                                    className="font-mono text-[8px] text-emerald-400"
                                >
                                    READY
                                </motion.span>
                                <span className="font-mono text-[8px] text-emerald-600">100%</span>
                            </div>
                        </motion.div>

                    </div>

                    {/* Version Badge - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="fixed bottom-8 left-8 font-mono text-[9px] text-emerald-500 flex items-center gap-2"
                    >
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        v2.0.26
                    </motion.div>

                    {/* Timestamp - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className="fixed bottom-8 right-8 font-mono text-[9px] text-emerald-500"
                    >
                        {new Date().toISOString().split('T')[0]}
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};
