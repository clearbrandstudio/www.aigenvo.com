"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Urgency() {
    return (
        <Section className="border-y border-white/5 bg-gradient-to-b from-background to-red-950/20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <h2 className="font-display text-4xl font-bold text-white md:text-6xl tracking-tight">
                    Your Competitors Are <br />
                    <span className="text-red-500">Already Doing This.</span>
                </h2>

                <p className="text-lg text-muted/80 max-w-2xl leading-relaxed">
                    AI adoption isn't coming — it's here. The gap between businesses using AI agents and those that aren't is widening every quarter.
                    Every month without an agent is revenue leaked to competitors who have one.
                </p>

                <div className="pt-4">
                    <Button size="lg" variant="default" className="bg-red-600 hover:bg-red-700 text-white border-none">
                        Don't Let Them Out-Respond You
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Section>
    );
}
