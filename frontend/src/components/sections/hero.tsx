"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import ParticleField from "@/components/3d/particle-field";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <ParticleField />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            <Section className="relative z-10 flex min-h-screen flex-col justify-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-5xl text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-md"
                    >
                        <span className="mr-2 flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Accepting New Beta Clients
                    </motion.div>

                    <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
                        Your Business Runs <span className="text-gradient-primary">24/7</span>.
                        <br />
                        Your Sales Team <span className="text-muted">Doesn't.</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
                        AiGenvo deploys AI agents trained like your best performer — to capture, engage, and close leads the moment they arrive. Day or night.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="group w-full sm:w-auto">
                            See What Your Agent Can Do
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto overflow-hidden group">
                            <PlayCircle className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                            Watch a Live Demo
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 border-t border-white/5 pt-10 text-center"
                >
                    <p className="font-mono text-sm text-muted uppercase tracking-wider">
                        Businesses using AI agents respond <span className="text-primary font-bold">137x faster</span> and recover up to <span className="text-primary font-bold">60%</span> of after-hours leads
                    </p>
                </motion.div>
            </Section>
        </div>
    );
}
