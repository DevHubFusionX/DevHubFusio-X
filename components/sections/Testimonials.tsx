"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    content: string;
    author: string;
    role: string;
    size: 'small' | 'medium' | 'large';
    speed: number;
    offsetY: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        content: "The strategic depth and technical execution provided were beyond industry standards. Truly a 10x partnership.",
        author: "Alex Rivers",
        role: "CEO, TechFlow",
        size: 'large',
        speed: 0.1,
        offsetY: "0%",
    },
    {
        id: 2,
        content: "Non-generic, innovative, and fast. The best decision for our scale.",
        author: "Sarah Chen",
        role: "CTO, Nexus Labs",
        size: 'small',
        speed: 0.15,
        offsetY: "10%",
    },
    {
        id: 3,
        content: "A rare blend of high-end design and scalable systems. Highly recommended.",
        author: "Jameson Lee",
        role: "Founder, Peak Horizon",
        size: 'medium',
        speed: 0.08,
        offsetY: "-5%",
    },
    {
        id: 4,
        content: "They don't just build; they think. A strategic partner in every sense.",
        author: "Elena Vance",
        role: "Head of Product, MetaSphere",
        size: 'medium',
        speed: 0.12,
        offsetY: "15%",
    },
    {
        id: 5,
        content: "Transformed our legacy mess into a modern powerhouse.",
        author: "Marcus Thorne",
        role: "VP Eng, GlobalEdge",
        size: 'small',
        speed: 0.05,
        offsetY: "0%",
    },
    {
        id: 6,
        content: "The level of autonomy and trust in the process is what makes the results so exceptional.",
        author: "Sofia Novak",
        role: "Design Director, Aura UI",
        size: 'large',
        speed: 0.18,
        offsetY: "-10%",
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${testimonial.speed * 200}%`]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                y,
                rotate,
                marginTop: testimonial.offsetY
            }}
            initial={{ opacity: 0, y: 50, skewX: -5 }}
            animate={isInView ? { opacity: 1, y: 0, skewX: 0 } : { opacity: 0, y: 50, skewX: -5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500
        ${testimonial.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
        ${testimonial.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
        ${testimonial.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
      `}
        >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-700" />

            <Quote className="text-primary w-8 h-8 mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed mb-8">
                "{testimonial.content}"
            </p>

            <div className="mt-auto">
                <div className="font-bold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{testimonial.role}</div>
            </div>

            {/* Subtle border shine effect */}
            <motion.div
                className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export const Testimonials = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    const snappyEase = [0.16, 1, 0.3, 1] as const;

    return (
        <section ref={containerRef} className="py-32 bg-background relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div ref={headerRef} className="max-w-4xl mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.5, ease: snappyEase }}
                            style={{ transformOrigin: 'left' }}
                            className="h-[2px] w-12 bg-primary"
                        />
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: snappyEase }}
                            className="text-sm font-bold tracking-widest uppercase text-foreground"
                        >
                            Feedback
                        </motion.span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
                        <span className="block overflow-hidden">
                            {["Trusted", "by", "the", "World's", "Boldest"].map((word, index) => (
                                <motion.span
                                    key={`t1-${index}`}
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={headerInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.05), ease: snappyEase }}
                                    className="inline-block mr-[0.2em]"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </h2>
                </div>

                {/* Floating Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};
