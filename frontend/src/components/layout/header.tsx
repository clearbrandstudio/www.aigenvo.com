"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { motion } from "framer-motion";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
            {/* Logo */}
            <Link href="/" className="pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <span className="font-display font-bold text-2xl tracking-tighter text-white">
                        AiGenvo<span className="text-primary">.</span>
                    </span>
                </motion.div>
            </Link>

            {/* Language Switcher */}
            <div className="pointer-events-auto">
                <LanguageSwitcher />
            </div>
        </header>
    );
}
