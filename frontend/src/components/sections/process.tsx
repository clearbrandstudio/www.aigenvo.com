"use client";

import { Section } from "@/components/ui/section";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "We learn your business, products, tone, and common objections.",
    },
    {
        number: "02",
        title: "Agent Training",
        description: "We build and train your AI agent to mimic your top performer.",
    },
    {
        number: "03",
        title: "Integration",
        description: "Connect to your WhatsApp, Website Chat, or CRM seamlessly.",
    },
    {
        number: "04",
        title: "Go Live & Scale",
        description: "Your agent starts handling leads 24/7. We monitor and optimize.",
    },
];

export function Process() {
    return (
        <Section className="bg-surface/30">
            <div className="mb-16 text-center">
                <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
                    From Zero to Deployed <br />
                    <span className="text-gradient">In Days — Not Months.</span>
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-4 relative">
                {/* Decor line */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0"></div>

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-background shadow-xl text-3xl font-bold font-display text-primary">
                            {step.number}
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                        <p className="text-sm text-muted leading-relaxed max-w-[200px]">{step.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
