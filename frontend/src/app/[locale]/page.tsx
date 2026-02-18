import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Solution } from "@/components/sections/solution";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Urgency } from "@/components/sections/urgency";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

// This would eventually use params.locale to fetch data
export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Future implementation:
  // const data = await getHomepageData(locale);
  // <Hero data={data.hero} />

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
