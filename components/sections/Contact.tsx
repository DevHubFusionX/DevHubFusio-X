"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ApplicationModal } from './ApplicationModal';

export const Contact = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("DevHubFusionX@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
           
           {/* Scarcity Indicator */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-12"
           >
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-success">Availability: 1 Spot Remaining for Q2</span>
           </motion.div>

           {/* Mirror Close Headline */}
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1] mb-12"
           >
             Ready to trigger <br />
             <span className="text-primary block mt-2">unfair advantage?</span>
           </motion.h2>

           {/* Subtext with "Final Filter" logic */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
           >
             You’ve seen my work and my criteria. If you believe your project fits the "Asset" class, I’d love to hear your vision. 
             <br /><br />
             <span className="text-sm opacity-60">If not, no hard feelings. I prefer to keep my circle small and potent.</span>
           </motion.p>

           {/* The Application Actions */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="flex flex-col md:flex-row items-center justify-center gap-6"
           >
              <Button size="lg" className="h-16 px-10 text-lg rounded-full group" onClick={() => setIsModalOpen(true)}>
                 <Mail className="mr-3" size={20} />
                 Apply for Partnership
                 <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </Button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyEmail}
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:bg-muted transition-all bg-background"
              >
                 <span className="text-lg font-medium text-foreground">DevHubFusionX@gmail.com</span>
                 {copied ? <CheckIcon /> : <Copy className="text-muted-foreground group-hover:text-foreground transition-colors" size={18} />}
              </motion.button>
           </motion.div>
        
        </div>
      </div>
      
      {/* Modal Integration */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

const CheckIcon = () => (
  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-success">
     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </motion.div>
);
