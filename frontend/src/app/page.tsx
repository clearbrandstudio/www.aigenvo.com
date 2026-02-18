import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Solution } from "@/components/sections/solution";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Urgency } from "@/components/sections/urgency";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <PainPoints />
      <Solution />
      <Stats />
      <Industries />
      <Process />
      <Urgency />
      <CTA />
      <Footer />
    </main>
  );
}
