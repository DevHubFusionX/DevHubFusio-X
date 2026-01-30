"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white overflow-hidden relative pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Row: Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
           <div className="space-y-4">
              <h3 className="text-xl font-bold opacity-80 uppercase tracking-widest">Connect</h3>
              <div className="flex flex-col space-y-2">
                {[
                  { name: 'Twitter / X', url: 'https://x.com/DevHubFusionX' },
                  { name: 'GitHub', url: 'https://github.com/DevHubFusionX' },
                  { name: 'TikTok', url: 'https://tiktok.com/@DevHubFusionX' }
                ].map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.url} 
                    target="_blank"
                    className="text-2xl font-bold hover:text-white/70 transition-colors flex items-center gap-2 group"
                  >
                    {social.name}
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
           </div>

           <div className="text-right">
              <Link href="mailto:DevHubFusionX@gmail.com" className="text-2xl md:text-3xl font-bold underline decoration-white/30 hover:decoration-white transition-all underline-offset-8">
                 DevHubFusionX@gmail.com
              </Link>
              <p className="mt-4 opacity-60 max-w-xs ml-auto">
                 Available for select strategic partnerships.
              </p>
           </div>
        </div>

        {/* Oversized Footer Text */}
        <div className="border-t border-white/20 pt-10">
           <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center md:text-left -ml-[1vw]">
              LET'S TALK
           </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 opacity-60 text-sm font-medium">
           <p>© {new Date().getFullYear()} DEVHUBFUSIONX™</p>
           <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
           </div>
        </div>

      </div>
    </footer>
  );
};
