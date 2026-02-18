/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './templates/**/*.php',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'midas-gold': '#FAD02E',
                'royal-purple': '#6A0DAD',
                'cyber-black': '#050505',
                'neon-blue': '#00f3ff',
                'glass-surface': 'rgba(255, 255, 255, 0.03)', // More subtle
                'glass-border': 'rgba(255, 255, 255, 0.08)',
            },
            fontFamily: {
                sans: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif'
                ], // Full system stack backup
            },
            letterSpacing: {
                tighter: '-0.04em',
                tight: '-0.02em',
                normal: '0em',
                wide: '0.02em',
            },
            backgroundImage: {
                'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #6A0DAD 0deg, #00f3ff 180deg, #FAD02E 360deg)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
