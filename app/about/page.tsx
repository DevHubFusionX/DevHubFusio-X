import { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';

export const metadata: Metadata = {
   title: "About | DevHubFusion-X Strategy",
   description: "Bespoke engineering for founders. Learn about the strategic philosophy behind our zero-waste development process.",
};

export default function AboutPage() {
   return <AboutContent />;
}
