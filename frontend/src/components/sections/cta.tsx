"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";


export function CTA() {
    return (
        <Section id="contact" className="pb-32">
            <div className="rounded-3xl border border-white/10 bg-surface/50 overflow-hidden flex flex-col lg:flex-row">
                <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center space-y-6 bg-gradient-to-br from-primary/10 to-transparent">
                    <h2 className="font-display text-4xl font-bold text-white">
                        Ready to Deploy Your <br />
                        <span className="text-gradient-primary">First & Best Agent?</span>
                    </h2>
                    <p className="text-muted text-lg">
                        Stop losing leads to the void. Setup takes minutes. Use cases are endless. Results are immediate.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center">✓ 14-Day Performance Guarantee</li>
                        <li className="flex items-center">✓ No Tech Skills Required</li>
                        <li className="flex items-center">✓ Cancel Anytime</li>
                    </ul>
                </div>

                <div className="p-10 lg:p-16 lg:w-1/2 bg-background/50">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-muted">Name</label>
                                <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-muted">Business</label>
                                <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Acme Inc." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-muted">Email</label>
                            <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" type="email" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-muted">Challenge</label>
                            <textarea className="w-full h-32 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="My biggest challenge with leads is..." />
                        </div>

                        <Button className="w-full h-12" size="lg">
                            Book Your Implementation Call
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
