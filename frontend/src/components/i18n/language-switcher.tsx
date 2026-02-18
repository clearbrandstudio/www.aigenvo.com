"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
    { code: "en", label: "English", display: "EN" },
    { code: "km", label: "Khmer", display: "KM" },
    { code: "zh", label: "Chinese", display: "ZH" },
];

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);

    // Extract current locale from pathname
    const currentLocale = pathname.split("/")[1] || "en";
    const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

    const switchLanguage = (code: string) => {
        if (code === currentLocale) return;
        const newPath = pathname.replace(`/${currentLocale}`, `/${code}`);
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <div className="relative">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/80 backdrop-blur-md shadow-lg text-white hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Globe className="h-5 w-5" />
                    {/* Active indicator dot */}
                    <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] ring-2 ring-surface" />
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-3 w-40 overflow-hidden rounded-xl border border-white/10 bg-surface/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/5"
                        >
                            <div className="p-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => switchLanguage(lang.code)}
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                                            currentLocale === lang.code
                                                ? "bg-primary/20 text-primary font-medium"
                                                : "text-muted hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <span className="flex items-center gap-2">
                                            {/* Flag could acturally be added here if valid assets usage or pure CSS flags */}
                                            {lang.label}
                                        </span>
                                        {currentLocale === lang.code && (
                                            <Check className="h-3.5 w-3.5" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
