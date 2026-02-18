"use client";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    "Trained on your products and tone",
    "Responds instantly — 24/7/365",
    "Qualifies leads & books meetings",
    "Learns from every conversation",
];

export function Solution() {
    return (
        <Section>
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
                {/* Left Side: Simulation/Mockup */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto max-w-md"
                    >
                        {/* Abstract UI Representation of Chat */}
                        <div className="min-h-[400px] w-full rounded-2xl border border-white/10 bg-surface shadow-2xl overflow-hidden glass-panel">
                            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                                </div>
                                <Badge variant="glass" className="text-[10px]">AI AGENT ACTIVE</Badge>
                            </div>
                            <div className="p-6 space-y-4">
                                {/* Chat Bubbles */}
                                <div className="flex justify-end">
                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary/20 p-3 text-sm text-primary-foreground">
                                        <p className="text-white">I saw your ad about the enterprise plan. Is it available in my region?</p>
                                        <span className="text-[10px] text-white/50 block mt-1 text-right">User • 2:14 AM</span>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm border border-white/5">
                                        <p className="text-gray-300">Yes, broadly available! Were you looking to deploy for a single team or across multiple departments?</p>
                                        <span className="text-[10px] text-gray-500 block mt-1">Agent • 2:14 AM</span>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary/20 p-3 text-sm text-primary-foreground">
                                        <p className="text-white">Multiple departments. We need about 50 seats.</p>
                                        <span className="text-[10px] text-white/50 block mt-1 text-right">User • 2:15 AM</span>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm border border-white/5 relative overflow-hidden">
                                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse"></span>
                                        <p className="text-gray-300 relative z-10">Perfect. For 50+ seats, you qualify for volume pricing. I can schedule a demo with our enterprise director for tomorrow morning. Does 10 AM work?</p>
                                        <span className="text-[10px] text-gray-500 block mt-1 relative z-10">Agent • 2:15 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -inset-4 -z-10 rounded-full bg-primary/20 blur-3xl opacity-20"></div>
                    </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                            We Don't Build Chatbots. <br />
                            <span className="text-gradient-primary">We Deploy AI Agents.</span>
                        </h2>
                        <p className="mb-8 text-lg text-muted">
                            Think of it as hiring your top performer's clone — without the salary, sick days, or burnout.
                            Our agents understand context, handle objections, and know when to close.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                                        <Check className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-4 border-l-2 border-primary/50 bg-primary/5 rounded-r-lg">
                            <p className="text-sm italic text-gray-400">"The difference between a chatbot and an AiGenvo agent is the difference between a recorded message and a live conversation."</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
