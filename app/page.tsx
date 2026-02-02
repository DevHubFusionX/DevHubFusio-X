import { Hero } from "@/components/sections/Hero";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default async function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <SelectedWorks />
      <Philosophy />
      <Testimonials />
      <Contact />
    </main>
  );
}
