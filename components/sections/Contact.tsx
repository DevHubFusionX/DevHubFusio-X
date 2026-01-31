"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Copy } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [ctaRevealed, setCTARevealed] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  // Scroll-based opacity for exit animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0.85]);

  const copyEmail = () => {
    navigator.clipboard.writeText("DevHubFusionX@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Track when CTA is fully revealed for scroll lock effect
  useEffect(() => {
    if (ctaInView && !ctaRevealed) {
      // Subtle scroll slowdown effect (micro-pause)
      const timer = setTimeout(() => {
        setCTARevealed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [ctaInView, ctaRevealed]);

  // Body copy lines for staggered reveal
  const bodyLines = [
    "You've seen the work and the criteria.",
    "If your product is built to become an asset—not an experiment—we should talk.",
    "",
    "If not, no pressure.",
    "I keep my circle intentionally small."
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: hasScrolledPast ? 0.85 : 1 }}
      className="py-32 md:py-40 bg-background relative overflow-hidden"
      id="contact"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Availability Anchor - Appears First */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-16"
          >
            <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground/80">
              Q2 — 1 Partnership Slot
            </span>
          </motion.div>

          {/* Headline - Hard Cut, No Animation */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-14"
          >
            Ready to stop playing fair?
          </motion.h2>

          {/* Body Copy - Line by Line Opacity Reveal */}
          <div className="mb-16 space-y-0">
            {bodyLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: line === "" ? 0 : 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + (index * 0.12),
                  ease: "easeOut"
                }}
                className={`text-lg md:text-xl leading-relaxed ${line === "" ? "h-6" :
                  index >= 3 ? "text-muted-foreground/60 text-base" : "text-muted-foreground"
                  }`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Primary CTA Button - Appears Last with Scale */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.18,
              delay: 1.3,
              ease: "easeOut"
            }}
            className="mb-8"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              className="group relative h-14 px-10 text-base font-medium rounded-full bg-foreground text-background overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10"
            >
              {/* Button content with text morph */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <AnimatePresence mode="wait">
                  {buttonHovered ? (
                    <motion.span
                      key="hover"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center"
                    >
                      Submitting for Review
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                    >
                      Apply for Partnership
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>

              {/* Growing underline on hover */}
              <motion.div
                className="absolute bottom-3 left-1/2 h-[1px] bg-background/40"
                initial={{ width: 0, x: "-50%" }}
                animate={{
                  width: buttonHovered ? "60%" : 0,
                  x: "-50%"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </button>
          </motion.div>

          {/* Secondary Email - Appears After CTA, De-emphasized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.5,
              ease: "easeOut"
            }}
            className="flex justify-center"
          >
            <button
              onClick={copyEmail}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-muted-foreground/70 bg-muted/50 border border-border/50 hover:bg-muted hover:text-muted-foreground hover:border-border transition-all duration-200"
            >
              <span className="font-mono tracking-tight">DevHubFusionX@gmail.com</span>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="text-success text-xs"
                  >
                    ✓
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Copy size={12} className="opacity-40 group-hover:opacity-60 transition-opacity" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Modal Integration */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.section>
  );
};
