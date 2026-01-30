"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax for background text
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-32 pb-20">
      {/* Oversized Background Typography - Retained feature */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[5%] -left-[5%] text-[20vw] font-black text-foreground/[0.03] whitespace-nowrap leading-none"
        >
          STRATEGY
        </motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] -right-[5%] text-[25vw] font-black text-foreground/[0.03] whitespace-nowrap leading-none"
        >
          AUTHORITY
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline / Indicator matching reference vibe */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-foreground">The DevHubFusionX Approach</span>
            </div>

            {/* Massive Bold Headline - Reference Style */}
            <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-foreground leading-[0.95] md:leading-[0.9] mb-10 uppercase">
              Stop Competing. <br />
              Start <span className="text-primary">Selecting.</span>
            </h1>

            {/* Body Copy from Strategy Info */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-normal leading-relaxed">
              Most developers beg for work. I filter for it. 
              I build scalable assets for founders who understand that 
              <span className="text-foreground font-semibold"> quality is the only leverage</span> that matters.
            </p>

            {/* CTA matching reference (Simple bold arrow button) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link href="#contact" className="group">
                 <motion.div 
                   className="flex items-center gap-4"
                   whileHover="hover"
                   initial="initial"
                 >
                    <div className="relative">
                      {/* Pulse Effect */}
                      <motion.div 
                        variants={{ hover: { scale: 1.5, opacity: 0 } }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 bg-primary rounded-full opacity-0"
                      />
                      
                      {/* Main Circle */}
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25 relative z-10"
                        variants={{ hover: { scale: 1.1 } }}
                      >
                         <motion.div variants={{ hover: { x: 4 } }}>
                           <ArrowRight size={28} />
                         </motion.div>
                      </motion.div>
                    </div>

                    <div className="flex flex-col">
                       <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          See if you qualify
                       </span>
                       <motion.span 
                         variants={{ initial: { width: 0 }, hover: { width: '100%' } }}
                         className="h-[2px] bg-primary block"
                       />
                    </div>
                 </motion.div>
              </Link>
            </div>
            
            {/* Footer / Trust - Left aligned */}
            <div className="mt-24 flex items-start gap-12 border-t border-border/40 pt-8">
               <div>
                  <div className="text-3xl font-bold text-foreground">02</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Clients / Qtr</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-foreground">10x</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Impact</div>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
