"use client";

import { Section } from "@/components/ui/section";
import CounterAnimation from "@/components/ui/counter-animation";

const stats = [
    { value: 60, suffix: "%", label: "Increase in Lead Response" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
    { value: 3, suffix: "x", label: "Revenue Recovery" },
    { value: 24, suffix: "/7", label: "Availability" },
];

export function Stats() {
    return (
        <Section className="border-y border-white/5 bg-surface/50">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="mb-2 font-display text-5xl font-bold text-white lg:text-6xl">
                            <span className="text-gradient-primary">
                                {stat.label === "Availability" ? (
                                    stat.value
                                ) : (
                                    <CounterAnimation value={stat.value} />
                                )}
                            </span>
                            <span className="text-primary">{stat.suffix}</span>
                        </div>
                        <p className="font-mono text-sm uppercase tracking-wider text-muted">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <p className="text-sm text-muted/60 max-w-2xl mx-auto italic">
                    * Averages based on client performance data after 90 days of agent deployment.
                </p>
            </div>
        </Section>
    );
}
