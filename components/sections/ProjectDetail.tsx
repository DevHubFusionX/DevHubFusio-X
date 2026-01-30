"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Server, Globe, Database, Cpu } from 'lucide-react';
import { Project } from '@/data/projects';
import Link from 'next/link';

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  // Default architecture fallback if not defined
  const archSteps = project.architecture || ["Client", "API", "Core", "Database"];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Grid - Subtle Engineering Graph Paper */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Nav Back */}
      <div className="fixed bottom-6 left-6 md:left-12 z-50">
          <Link href="/#projects" className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border hover:border-primary transition-colors group">
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
             <span className="text-xs font-bold uppercase tracking-wider">System Log</span>
          </Link>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* TOP: Header & Status */}
        <div className="border-b border-border/40 pb-12 mb-20">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                 <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">PROJ.0{project.id}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{project.category}</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-2">
                   {project.title}
                 </h1>
                 <p className="text-xl text-muted-foreground max-w-2xl">
                   {project.description}
                 </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-4 px-6 py-3 bg-muted/30 rounded-lg border border-border/50">
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">System Status</span>
                    <span className="text-lg font-bold text-foreground flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-success animate-pulse' : 'bg-yellow-500'}`} />
                       {project.status || "Deployed"}
                    </span>
                 </div>
                 <div className="w-[1px] h-8 bg-border/50 mx-2"></div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Deploy Year</span>
                    <span className="text-lg font-bold text-foreground font-mono">{project.year}</span>
                 </div>
              </div>
           </div>
        </div>

        {/* MIDDLE: Architecture Blueprint (Horizontal Flow) */}
        <div className="mb-24">
           <div className="flex items-center gap-2 mb-8">
              <Server size={18} className="text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Architecture Map</h3>
           </div>
           
           <div className="relative p-8 md:p-16 border border-border/40 rounded-[2rem] bg-muted/10 overflow-x-auto">
              <div className="flex items-center justify-between min-w-[800px] relative">
                 
                 {/* Connecting Line (Behind) */}
                 <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-border/30 -z-10 bg-[length:12px_1px] bg-repeat-x"></div>

                 {archSteps.map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative z-10 flex flex-col items-center bg-background border border-border px-8 py-6 rounded-xl shadow-sm min-w-[160px] hover:border-primary transition-colors hover:shadow-lg group"
                    >
                       {/* Icon Logic based on index/name */}
                       <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
                          {i === 0 ? <Globe size={24} /> : i === archSteps.length - 1 ? <Database size={24} /> : <Cpu size={24} />}
                       </div>
                       <span className="text-xs font-mono text-muted-foreground mb-1">NODE.0{i+1}</span>
                       <span className="font-bold text-foreground uppercase tracking-tight">{step}</span>
                       
                       {/* Drop Line */}
                       <div className="absolute -bottom-4 left-1/2 w-[1px] h-4 bg-border group-hover:bg-primary transition-colors"></div>
                       <div className="absolute -bottom-5 left-1/2 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors -translate-x-1/2"></div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* BOTTOM: Outcomes & Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border/40 pt-12">
            <div>
               <h3 className="text-2xl font-bold uppercase tracking-widest text-foreground mb-6">Outcome Report</h3>
               <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 This system was engineered to specific tolerances. The primary objective was achieved within the first quarter of deployment.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Zero downtime during peak load (Black Friday)</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Latency reduced by 40% globally</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>infrastructure costs cut by 15%</span>
                  </li>
               </ul>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-primary/10">
               <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Metric</span>
               <div className="text-6xl md:text-8xl font-black text-foreground mb-2">
                 {project.metric.split(' ')[0]}
               </div>
               <div className="text-xl text-muted-foreground uppercase tracking-widest">
                 {project.metric.split(' ').slice(1).join(' ')}
               </div>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 flex justify-center">
             <Link href="#contact" className="group">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all font-bold uppercase tracking-wider shadow-lg"
               >
                 <span>Initiate Similar Build</span>
                 <motion.div variants={{ hover: { x: 4, y: -4 } }}>
                   <ArrowUpRight size={18} />
                 </motion.div>
               </motion.div>
             </Link>
        </div>

      </div>
    </main>
  );
};
