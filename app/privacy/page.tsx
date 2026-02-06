import { Metadata } from 'next';
import { PrivacyContent } from '@/components/sections/PrivacyContent';

export const metadata: Metadata = {
    title: "Privacy Policy | DevHubFusionX",
    description: "Our commitment to protecting your data and privacy. Learn how we handle your information.",
};

export default function PrivacyPage() {
    return <PrivacyContent />;
}
