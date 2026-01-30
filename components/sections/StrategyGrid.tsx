"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, LineChart, ShieldCheck } from 'lucide-react';

export const StrategyGrid = () => {
  return (
    <section className="bg-background relative border-t border-primary/10" id="strategy">
      {/* Background Tech Grid - Absolute overlay would be too complex, we'll build it structurally */}
      
      <div className="container mx-auto px-0"> {/* zero padding to let grid hit edges on mobile if needed, or stick to container */}
        
        {/* Row 1: The Blueprint Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-primary/10">
          <div className="md:col-span-8 p-12 md:p-24 border-r border-primary/10 relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-6">
               <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">SYS.01</span>
               <div className="h-[1px] w-24 bg-primary/20"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase leading-[0.85] mb-8">
              The <br />
              <span className="text-primary text-outline-strong">Standard.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              We don't guess. We engineer. Every pixel and line of code follows a strict, asymmetrical cadence designed for one thing: <span className="text-foreground font-bold">Market Authority.</span>
            </p>
            
            {/* Hover Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </div>
          
          <div className="md:col-span-4 p-12 flex flex-col justify-end bg-primary/5">
             <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">System Status</div>
             <div className="text-4xl font-bold text-foreground mb-2">Operational</div>
             <div className="flex gap-1 h-2 w-full">
               <div className="w-full bg-primary animate-pulse"></div>
               <div className="w-1/3 bg-primary/30"></div>
             </div>
          </div>
        </div>

        {/* Row 2: The Core Process (Asymmetrical) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-primary/10 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          
          {/* Step 01 */}
          <div className="p-12 hover:bg-muted/30 transition-colors group relative h-full">
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <Code size={40} strokeWidth={1} />
            </div>
            <div className="font-mono text-5xl font-light text-primary/20 mb-8 group-hover:text-primary transition-colors">01</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Discovery</h3>
            <p className="text-muted-foreground leading-relaxed">
              We strip away the noise. We identify the single highest-leverage asset your business needs to dominate.
            </p>
          </div>

          {/* Step 02 */}
          <div className="p-12 hover:bg-muted/30 transition-colors group relative h-full border-primary/10">
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <Cpu size={40} strokeWidth={1} />
            </div>
            <div className="font-mono text-5xl font-light text-primary/20 mb-8 group-hover:text-primary transition-colors">02</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Architecture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Modular design systems and scalable backend infrastructure. Built to handle 10x growth from Day 1.
            </p>
          </div>

          {/* Step 03 */}
          <div className="p-12 hover:bg-muted/30 transition-colors group relative h-full">
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <ShieldCheck size={40} strokeWidth={1} />
            </div>
            <div className="font-mono text-5xl font-light text-primary/20 mb-8 group-hover:text-primary transition-colors">03</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Execution</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rapid deployment cycles. We ship assets, not hours. You get a market-ready product, not a GitHub repo.
            </p>
          </div>
        </div>

        {/* Row 3: The ROI / Gain (Breaking the Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="p-12 md:p-24 border-r border-primary/10 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                 The ROI Equation.
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-mono text-muted-foreground">Speed to Market</span>
                    <span className="text-2xl font-bold text-primary">2x Faster</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-mono text-muted-foreground">Code Quality</span>
                    <span className="text-2xl font-bold text-primary">Enterprise</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-mono text-muted-foreground">Scalability</span>
                    <span className="text-2xl font-bold text-primary">Unlimited</span>
                 </div>
              </div>
           </div>

           {/* The Visual Breaker */}
           <div className="relative overflow-hidden bg-primary/5 flex items-center justify-center p-12">
               {/* Decorative Grid Lines within the breaker */}
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(5, 150, 105, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(5, 150, 105, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
               
               <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-primary/40 animate-pulse">
                     <LineChart className="text-white" size={40} />
                  </div>
                  <h4 className="text-3xl font-bold text-foreground mb-2">Revenue Focused</h4>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                     We don't just write code. We build engines that drive revenue.
                  </p>
               </div>
           </div>
        </div>
        
        {/* Bottom Border */}
        <div className="h-[1px] w-full bg-primary/10"></div>

      </div>
    </section>
  );
};
