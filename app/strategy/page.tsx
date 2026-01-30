"use client";

import React from 'react';
import { StrategyGrid } from '@/components/sections/StrategyGrid';
import { Contact } from '@/components/sections/Contact';

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          The <span className="text-primary">Blueprint.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
           This isn't magic. It's a calculated, repeatable process designed to eliminate risk and guarantee authority.
        </p>
      </div>
      
      <StrategyGrid />
      
      {/* Re-use Contact for conversion at bottom of strategy */}
      <div className="border-t border-border/40">
        <Contact />
      </div>
    </main>
  );
}
