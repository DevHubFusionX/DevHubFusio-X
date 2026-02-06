"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ServicesContent() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">

            {/* Header Section */}
            <section className="container mx-auto px-6 md:px-12 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-12 bg-primary"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-foreground">What I Do</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-foreground uppercase mb-8">
                        Simple, Effective <br />
                        <span className="text-primary">Development.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl">
                        I build software directly for your business needs. No jargon, no complications. Just results.
                    </p>
                </motion.div>
            </section>

            {/* Services List */}
            <section className="container mx-auto px-6 md:px-12 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">

                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-6 items-start"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                            <Zap size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Websites</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I build fast, professional websites that work perfectly on phones, tablets, and computers. Whether it's a landing page or a full company site, it will look great and load instantly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-6 items-start"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                            <Crown size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Applications</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Need more than just a website? I create complex tools like dashboards, customer portals, and booking systems that help you run your business online.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-6 items-start"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                            <Shield size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fixes & Maintenance</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Have a broken site? I fix bugs, improve speed, and secure your current website so you don't have to worry about hackers or downtime.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-6 items-start"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                            <Check size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Tech Consulting</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Not sure what you need? I help you choose the right tools and plan your project so you don't waste money on things you don't need.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* CTA Bottom */}
            <section className="container mx-auto px-6 md:px-12 mb-20">
                <div className="p-12 bg-gray-50 rounded-[3rem] text-center border border-border/50">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to start?</h2>
                    <Link href="/#contact">
                        <Button className="h-14 px-10 rounded-full text-lg bg-primary hover:bg-primary/90 text-white transition-all shadow-lg hover:shadow-primary/50">
                            Let's Work Together
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Application Banner */}
            <section className="container mx-auto px-6 md:px-12">
                <div className="rounded-[3rem] bg-muted relative overflow-hidden p-12 md:p-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
                        Not sure what you need?
                    </h2>
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest border-b-2 border-primary hover:border-primary/50 pb-1">
                        Book a Strategy Call <ArrowRight />
                    </Link>
                </div>
            </section>

        </main>
    );
}
