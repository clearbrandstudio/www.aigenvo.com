"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, MessageSquareOff } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
    {
        icon: DollarSign,
        title: "The Ad Trap",
        description: "You spend heavily on Facebook ads. You get clicks. Nobody replies after 6PM. The lead moves on to a competitor who answers.",
    },
    {
        icon: Clock,
        title: "The Shift Gap",
        description: "Your team is amazing — when they're clocked in. But leads don't follow business hours. 70% of inquiries happen outside 9-5.",
    },
    {
        icon: MessageSquareOff,
        title: "The Chatbot Lie",
        description: "You've tried dumb bots. They feel robotic. Customers leave frustrated. Conversations die before they start.",
    },
];

export function PainPoints() {
    return (
        <Section className="bg-surface/30">
            <div className="mb-16 text-center">
                <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
                    Every Hour You're Offline, <br />
                    <span className="text-gradient">Your Competitors Are Closing.</span>
                </h2>
                <p className="mx-auto max-w-2xl text-muted">
                    The average business loses 35–50% of sales leads because of slow follow-up.
                    What's that worth to your revenue?
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {painPoints.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Card className="h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 transition-colors">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <point.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted leading-relaxed">{point.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
