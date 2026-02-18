import { Section } from "@/components/ui/section";
import { Footer } from "@/components/layout/footer";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <Section className="pt-32 pb-16">
                <h1 className="font-display text-4xl font-bold text-white md:text-6xl">
                    Coming Soon
                </h1>
                <p className="mt-4 text-lg text-muted">
                    This page is currently under construction.
                </p>
            </Section>
            <Footer />
        </main>
    );
}
