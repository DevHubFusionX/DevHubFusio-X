"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export const SelectedWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-background overflow-hidden relative" id="projects">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-foreground">Selected Assets</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            Evidence of <br />
            <span className="text-primary">Impact.</span>
          </h2>
        </div>

        {/* Navigation Hints */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] snap-center group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Card Container */}
            <Link href={`/projects/${project.id}`} className="block h-full">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[0.5rem] bg-muted group-hover:shadow-2xl transition-all duration-500">
                {/* Project Image */}
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 60vw, 800px"
                  />
                  {/* Subtle Dark Overlay for text legibility */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Metric Overlay - "Gatekeeper" style */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                  <span className="text-sm font-bold tracking-wider text-foreground uppercase">{project.metric}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full border border-white/30 text-xs font-bold uppercase tracking-wider text-white/90">
                          {project.category}
                        </span>
                        <span className="text-white/60 text-xs font-mono">{project.year}</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80 max-w-lg line-clamp-2 md:line-clamp-none">{project.description}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Subtle padding at end */}
        <div className="min-w-[10vw]"></div>
      </div>
    </section>
  );
};
