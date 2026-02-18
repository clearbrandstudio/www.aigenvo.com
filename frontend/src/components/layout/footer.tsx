import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background pt-16 pb-8">
            <Section className="grid gap-12 md:grid-cols-4 max-w-7xl mx-auto px-6">
                <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-white">AiGenvo</h3>
                    <p className="text-sm text-muted">
                        We Don't Sell Systems. <br />
                        We Sell Results.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><Link href="/services/sales-agent" className="hover:text-primary transition-colors">Sales Agents</Link></li>
                        <li><Link href="/services/support-agent" className="hover:text-primary transition-colors">Support Agents</Link></li>
                        <li><Link href="/services/appointment-setter" className="hover:text-primary transition-colors">Appointment Setting</Link></li>
                        <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </Section>

            <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-muted/40">
                <p>&copy; {new Date().getFullYear()} AiGenvo. All rights reserved.</p>
                <p className="mt-2">AI Agent Deployment for Businesses That Mean Business.</p>
            </div>
        </footer>
    );
}
