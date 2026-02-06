import { Metadata } from 'next';
import { TermsContent } from '@/components/sections/TermsContent';

export const metadata: Metadata = {
    title: "Terms of Service | DevHubFusionX",
    description: "The legal terms governing the use of DevHubFusionX services and website.",
};

export default function TermsPage() {
    return <TermsContent />;
}
