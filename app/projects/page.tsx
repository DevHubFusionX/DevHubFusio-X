import { Metadata } from 'next';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: "Strategic Archive | DevHubFusion-X Projects",
    description: "A selection of high-impact digital assets. Engineered for performance, scaled for authority.",
};

export default function ProjectsPage() {
    const smoothEase = [0.25, 0.1, 0.25, 1] as const;

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                    Strategic <span className="text-primary">Archive.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    The projects below are not just code. They are calculated investments in authority, market share, and operational excellence.
                </p>
            </div>

            <ProjectGrid />

            <div className="border-t border-border/40">
                <Contact />
            </div>
        </main>
    );
}
