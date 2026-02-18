"use client";

import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShoppingBag, Stethoscope, Briefcase, ArrowRight } from "lucide-react";

const industries = [
    {
        title: "Retail & E-Commerce",
        icon: ShoppingBag,
        items: ["Product inquiries", "Order status & tracking", "Abandoned cart recovery", "After-hours support"],
    },
    {
        title: "Service-Based Business",
        icon: Stethoscope,
        items: ["Appointment booking", "Quote requests", "Service FAQ handling", "Follow-up reminders"],
    },
    {
        title: "B2B & Agencies",
        icon: Briefcase,
        items: ["Lead qualification", "Meeting scheduling", "Proposal follow-up", "Client onboarding"],
    },
];

export function Industries() {
    return (
        <Section>
            <div className="mb-16 text-center">
                <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
                    Built for Businesses That <br />
                    <span className="text-gradient-primary">Can't Afford to Miss a Sale.</span>
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {industries.map((industry, i) => (
                    <Card key={i} className="group relative hover:border-primary/50 transition-all duration-300">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <industry.icon className="h-6 w-6" />
                            </div>
                            <CardTitle>{industry.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {industry.items.map((item, j) => (
                                    <li key={j} className="flex items-center text-sm text-muted">
                                        <ArrowRight className="mr-2 h-3 w-3 text-primary/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
