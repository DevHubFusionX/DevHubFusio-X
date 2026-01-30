"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const Philosophy = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-6"
           >
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-foreground">The Criteria</span>
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]"
           >
             I don’t work with everyone. <br />
             <span className="text-muted-foreground">And you shouldn’t either.</span>
           </motion.h2>
        </div>

        {/* The Split Filter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Column 1: The Fit (Green Flags) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
             <h3 className="text-2xl font-bold uppercase tracking-widest text-primary flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                 <Check size={16} strokeWidth={3} />
               </span>
               Who I Partner With
             </h3>

             <div className="space-y-8">
                <div className="group">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Visionaries with Action.</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founders who have a validated product and a clear roadmap, not just a "cool idea" on a napkin. You maintain a bias toward action.
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Value over Cost.</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Leaders who understand that premium engineering is an investment with 10x returns, not a line item to be minimized.
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Trust & Autonomy.</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You hire experts to tell you what to do, not the other way around. You value consultative partnership over order-taking.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Column 2: The Anti-Fit (Red Flags) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-12 opacity-80"
          >
             <h3 className="text-2xl font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground border border-border">
                 <X size={16} strokeWidth={3} />
               </span>
               Who I Turn Away
             </h3>

             <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-muted-foreground mb-2">Micromanagers.</h4>
                  <p className="text-lg text-muted-foreground/70 leading-relaxed">
                    If you need to approve every pixel and line of code, we aren't a fit. My process requires trust to function at speed.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-muted-foreground mb-2">Feature Bloaters.</h4>
                  <p className="text-lg text-muted-foreground/70 leading-relaxed">
                    Project scopes that change daily kills momentum. I build focused, scalable systems, not endless feature wishlists.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-muted-foreground mb-2">"Just need a dev."</h4>
                  <p className="text-lg text-muted-foreground/70 leading-relaxed">
                    I am a strategic partner, not a commodity resource. If you just need hands on a keyboard, there are cheaper options.
                  </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
