"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const Philosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const rejectRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const partnerInView = useInView(partnerRef, { once: true, margin: "-100px" });
  const rejectInView = useInView(rejectRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth easing
  const smoothEase = [0.25, 0.1, 0.25, 1] as const;
  const snappyEase = [0.16, 1, 0.3, 1] as const;

  // High-End Touch: Desaturate as we scroll past
  const saturation = useTransform(scrollYProgress, [0.6, 0.9], ["100%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

  const partnerCriteria = [
    {
      title: "Visionaries with Action.",
      body: "Founders who have a validated product and a clear roadmap, not just a \"cool idea\" on a napkin. You maintain a bias toward action."
    },
    {
      title: "Value over Cost.",
      body: "Leaders who understand that premium engineering is an investment with 10x returns, not a line item to be minimized."
    },
    {
      title: "Trust & Autonomy.",
      body: "You hire experts to tell you what to do, not the other way around. You value consultative partnership over order-taking."
    }
  ];

  const rejectionCriteria = [
    {
      title: "Micromanagers.",
      body: "If you need to approve every pixel and line of code, we aren't a fit. My process requires trust to function at speed."
    },
    {
      title: "Feature Bloaters.",
      body: "Project scopes that change daily kills momentum. I build focused, scalable systems, not endless feature wishlists."
    },
    {
      title: "\"Just need a dev.\"",
      body: "I am a strategic partner, not a commodity resource. If you just need hands on a keyboard, there are cheaper options."
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ filter: useTransform(saturation, (s) => `saturate(${s})`), opacity }}
      className="py-32 bg-background relative overflow-hidden transition-colors duration-700"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div ref={headerRef} className="max-w-4xl mb-20">

          {/* Eyebrow with line grow */}
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: snappyEase }}
              style={{ transformOrigin: 'left' }}
              className="h-[2px] w-12 bg-primary"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.2, ease: smoothEase }}
              className="text-sm font-bold tracking-widest uppercase text-foreground"
            >
              The Criteria
            </motion.span>
          </div>

          {/* Main headline - word by word */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.1] mb-8">
            <span className="block overflow-hidden">
              {["I", "don't", "work", "with", "everyone."].map((word, index) => (
                <motion.span
                  key={`h1-${index}`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={headerInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + (index * 0.06),
                    ease: snappyEase
                  }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-muted-foreground overflow-hidden">
              {["And", "you", "shouldn't", "either."].map((word, index) => (
                <motion.span
                  key={`h2-${index}`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={headerInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + (index * 0.06),
                    ease: snappyEase
                  }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          {/* Divider line grows */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: snappyEase }}
            style={{ transformOrigin: 'left' }}
            className="h-[1px] w-full bg-border mt-12"
          />
        </div>

        {/* The Split Filter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Column 1: Who I Partner With */}
          <div ref={partnerRef} className="space-y-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={partnerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="text-2xl font-bold uppercase tracking-widest text-primary flex items-center gap-3"
            >
              <motion.span
                initial={{ scale: 0, rotate: -90 }}
                animate={partnerInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                transition={{ duration: 0.4, delay: 0.1, ease: snappyEase }}
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20"
              >
                <Check size={16} strokeWidth={3} />
              </motion.span>
              Who I Partner With
            </motion.h3>

            <div className="space-y-8">
              {partnerCriteria.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={partnerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + (i * 0.12), duration: 0.5, ease: smoothEase }}
                  className="group"
                >
                  <motion.h4
                    className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200"
                  >
                    {item.title}
                  </motion.h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Who I Turn Away */}
          <div ref={rejectRef} className="space-y-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={rejectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="text-2xl font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-3"
            >
              <motion.span
                initial={{ scale: 0, rotate: 90 }}
                animate={rejectInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 90 }}
                transition={{ duration: 0.4, delay: 0.1, ease: snappyEase }}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground border border-border"
              >
                <X size={16} strokeWidth={3} />
              </motion.span>
              Who I Turn Away
            </motion.h3>

            <div className="space-y-8">
              {rejectionCriteria.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={rejectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.4, ease: smoothEase }}
                  className="relative pl-6"
                >
                  {/* Left-edge indicator - grows down */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={rejectInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, ease: smoothEase }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute left-0 top-1 bottom-1 w-[2px] bg-muted-foreground/30"
                  />

                  <h4 className="text-xl font-bold text-muted-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-lg text-muted-foreground/70 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};
