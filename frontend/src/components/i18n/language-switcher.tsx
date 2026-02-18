"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// High-fidelity SVG Flags with 3D Spherical Mask
const Flags = {
    en: (
        <svg viewBox="0 0 60 60" className="h-full w-full">
            <defs>
                <radialGradient id="sphere-shine" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <clipPath id="circle-mask">
                    <circle cx="30" cy="30" r="30" />
                </clipPath>
            </defs>
            <g clipPath="url(#circle-mask)">
                {/* UK Flag Content (Scaled to fill circle) */}
                <g transform="scale(1.2) translate(-5, -5)">
                    <path d="M0,0 v60 h100 v-60 z" fill="#012169" />
                    <path d="M0,0 L100,60 M100,0 L0,60" stroke="#fff" strokeWidth="10" />
                    <path d="M0,0 L100,60 M100,0 L0,60" stroke="#C8102E" strokeWidth="6" />
                    <path d="M50,0 v60 M0,30 h100" stroke="#fff" strokeWidth="16" />
                    <path d="M50,0 v60 M0,30 h100" stroke="#C8102E" strokeWidth="10" />
                </g>
                {/* 3D Shine Overlay */}
                <circle cx="30" cy="30" r="30" fill="url(#sphere-shine)" />
                {/* Inner Shadow for depth */}
                <circle cx="30" cy="30" r="29" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            </g>
        </svg>
    ),
    km: (
        <svg viewBox="0 0 60 60" className="h-full w-full">
            <defs>
                <radialGradient id="sphere-shine-km" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <clipPath id="circle-mask-km">
                    <circle cx="30" cy="30" r="30" />
                </clipPath>
            </defs>
            <g clipPath="url(#circle-mask-km)">
                {/* Khmer Flag Content */}
                <g transform="scale(1.4) translate(-7, 0)">
                    <path fill="#032ea1" d="M0 0h60v60H0z" />
                    <path fill="#e00025" d="M0 15h60v30H0z" />
                    {/* Simplified Angkor Wat for scale */}
                    <path fill="#fff" d="M30 20 l-5 8 h10 z M20 28 h20 v2 h-20 z" transform="translate(0, 5)" />
                </g>
                {/* 3D Shine Overlay */}
                <circle cx="30" cy="30" r="30" fill="url(#sphere-shine-km)" />
            </g>
        </svg>
    ),
    zh: (
        <svg viewBox="0 0 60 60" className="h-full w-full">
            <defs>
                <radialGradient id="sphere-shine-zh" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <clipPath id="circle-mask-zh">
                    <circle cx="30" cy="30" r="30" />
                </clipPath>
            </defs>
            <g clipPath="url(#circle-mask-zh)">
                {/* Chinese Flag Content */}
                <g transform="scale(1.2) translate(-2, 0)">
                    <path fill="#DE2910" d="M0 0h60v60H0z" />
                    <path fill="#FFDE00" d="M15 15 l2 5 h-4 z" transform="translate(5, 5) scale(1.5)" />
                    <path fill="#FFDE00" d="M30 10 l1 2 h-2 z" />
                    <path fill="#FFDE00" d="M32 15 l1 2 h-2 z" />
                    <path fill="#FFDE00" d="M32 20 l1 2 h-2 z" />
                    <path fill="#FFDE00" d="M30 25 l1 2 h-2 z" />
                </g>
                {/* 3D Shine Overlay */}
                <circle cx="30" cy="30" r="30" fill="url(#sphere-shine-zh)" />
            </g>
        </svg>
    ),
};

const languages = [
    { code: "en", label: "English", display: "EN", flag: Flags.en },
    { code: "km", label: "Khmer", display: "KM", flag: Flags.km },
    { code: "zh", label: "Chinese", display: "ZH", flag: Flags.zh },
];

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isHovered, setIsHovered] = React.useState(false);

    // Extract current locale from pathname
    const currentLocale = pathname.split("/")[1] || "en";
    const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

    const switchLanguage = (code: string) => {
        if (code === currentLocale) return;
        const newPath = pathname.replace(`/${currentLocale}`, `/${code}`);
        router.push(newPath);
        setIsHovered(false);
    };

    return (
        <div
            className="fixed top-6 right-6 z-50 transition-all duration-300 ease-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                {/* Main Floating Bubble */}
                <motion.div
                    className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-white/10"
                    animate={{
                        boxShadow: isHovered ? "0 10px 40px rgba(235, 0, 41, 0.4)" : "0 8px 32px rgba(0,0,0,0.12)",
                        scale: isHovered ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Subtle Float Animation for Bubble */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="h-10 w-10 overflow-hidden rounded-full shadow-inner"
                    >
                        {currentLang.flag}
                    </motion.div>

                    {/* Glass Shimmer on Bubble */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                </motion.div>

                {/* Dropdown Menu (Hover Activated) */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 10, scale: 0.8, filter: "blur(4px)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="absolute right-0 mt-4 w-56 overflow-hidden rounded-3xl border border-white/10 bg-[#080A0F]/80 backdrop-blur-3xl shadow-2xl p-2"
                        >
                            <div className="flex flex-col gap-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => switchLanguage(lang.code)}
                                        className={cn(
                                            "group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all duration-300 ease-out",
                                            currentLocale === lang.code
                                                ? "bg-white/10 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]"
                                                : "text-muted hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-8 w-8 overflow-hidden rounded-full shadow-md transition-transform group-hover:scale-110">
                                                {lang.flag}
                                            </div>
                                            <span className="font-medium tracking-wide font-display">{lang.label}</span>
                                        </div>
                                        {currentLocale === lang.code && (
                                            <motion.div
                                                layoutId="activeDot"
                                                className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
                                            />
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
