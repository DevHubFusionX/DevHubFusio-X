import { Metadata } from 'next';
import { ServicesContent } from '@/components/sections/ServicesContent';

export const metadata: Metadata = {
   title: "Strategic Services | Bespoke Engineering",
   description: "Custom websites, web applications, and technical consulting for founders who value speed and architectural integrity.",
};

export default function ServicesPage() {
   return <ServicesContent />;
}
