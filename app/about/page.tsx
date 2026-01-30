"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, MapPin, Calendar, Terminal } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      
      {/* Header Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-12 bg-primary"></div>
             <span className="text-sm font-bold tracking-widest uppercase text-foreground">The Profile</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-foreground uppercase mb-8">
            Behind the <br />
            <span className="text-primary">Strategy.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl">
            I'm not just a coder. I'm a strategic partner for founders who value speed, precision, and architectural integrity.
          </p>
        </motion.div>
      </section>

      {/* Stats Grid - Reference Style */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* Stat Card 1: Location - Step 0 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start gap-6 group"
            >
               <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={28} strokeWidth={2} />
               </div>
               <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">Remote</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-1">Location</p>
                  <p className="text-sm text-gray-500 font-medium">Available Globally</p>
               </div>
            </motion.div>

            {/* Stat Card 2: Experience - Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start gap-6 group lg:mt-16"
            >
               <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar size={28} strokeWidth={2} />
               </div>
               <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">5+ Years</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-1">Experience</p>
                  <p className="text-sm text-gray-500 font-medium">Professional Dev</p>
               </div>
            </motion.div>

            {/* Stat Card 3: Focus - Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start gap-6 group lg:mt-32"
            >
               <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Terminal size={28} strokeWidth={2} />
               </div>
               <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-1">Focus</p>
                  <p className="text-sm text-gray-500 font-medium">Scalable Systems</p>
               </div>
            </motion.div>

            {/* Stat Card 4: Stack - Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[2.5rem] bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start gap-6 group lg:mt-48"
            >
               <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code size={28} strokeWidth={2} />
               </div>
               <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">React</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-1">Core Stack</p>
                  <p className="text-sm text-gray-500 font-medium">Next.js & TypeScript</p>
               </div>
            </motion.div>

         </div>
      </section>

      {/* Tech Stack - Skill Chart Layout */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
         <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">The Arsenal</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="text-muted-foreground text-right max-w-sm">
               Proficiency audit across the full stack. Focus on production-grade systems.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Frontend Domain */}
            <div className="space-y-8">
               <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">Frontend Architecture</h3>
               <div className="space-y-6">
                  {[
                    { name: 'Next.js', level: 98 },
                    { name: 'React', level: 95 },
                    { name: 'TypeScript', level: 90 },
                    { name: 'Tailwind CSS', level: 95 },
                    { name: 'Framer Motion', level: 85 },
                  ].map((tech) => (
                    <div key={tech.name}>
                       <div className="flex justify-between mb-2">
                          <span className="font-bold text-foreground text-lg">{tech.name}</span>
                          <span className="font-mono text-primary">{tech.level}%</span>
                       </div>
                       <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-primary"
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Backend & Infrastructure */}
            <div className="space-y-8">
               <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">Backend & Infra</h3>
               <div className="space-y-6">
                  {[
                    { name: 'Node.js', level: 90 },
                    { name: 'PostgreSQL', level: 85 },
                    { name: 'Supabase', level: 92 },
                    { name: 'GraphQL', level: 80 },
                    { name: 'AWS / Docker', level: 75 },
                  ].map((tech) => (
                     <div key={tech.name}>
                        <div className="flex justify-between mb-2">
                           <span className="font-bold text-foreground text-lg">{tech.name}</span>
                           <span className="font-mono text-primary">{tech.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${tech.level}%` }}
                             transition={{ duration: 1, ease: "easeOut" }}
                             viewport={{ once: true }}
                             className="h-full bg-primary"
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* The Strategy Deep Dive */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase leading-none sticky top-32">
                  Why I <br />
                  <span className="text-primary">Win.</span>
               </h2>
            </div>
            <div className="lg:col-span-8 space-y-12">
               <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">The "Red Button" Effect</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     Psychological Reactance is why I don't chase clients. When you are "too available," your value decreases. 
                     By being selective, I ensure that every project I take on gets my absolute best focus. This protects my time and your investment.
                  </p>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Authority Over Service</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     I don't just "take tickets." I build assets. Whether it's a high-conversion landing page or a complex SaaS dashboard, 
                     I approach every line of code with a strategic outcome in mind. If it doesn't move the needle, I don't build it.
                  </p>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">The "DevHubFusionX" Promise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     My process is designed to filter out noise. This means we move faster, communicate clearer, and launch sooner. 
                     No middle-managers, no bloat. Just direct, high-impact engineering.
                  </p>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}
