<?php get_header(); ?>

<!-- Hero Section (3D) -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Three.js Canvas -->
    <canvas id="hero-canvas" class="absolute inset-0"></canvas>
    
    <!-- Background Gradient Overlay for Readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/20 to-cyber-black pointer-events-none z-10"></div>

    <!-- Content -->
    <div class="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 class="hero-title text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">
            <div class="overflow-hidden">
                <span class="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 pb-2">
                    The Future of
                </span>
            </div>
            <div class="overflow-hidden">
                <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-midas-gold via-yellow-200 to-orange-400 filter drop-shadow-[0_0_25px_rgba(250,208,46,0.3)] pb-2">
                    Digital Intelligence
                </span>
            </div>
        </h1>
        
        <p class="hero-subtitle text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-normal tracking-wide">
            Aigenvo delivers 24/7 intelligent digital Marketing, Sales, and Support. 
            Elevate your business with autonomous agents that never sleep.
        </p>

        <div class="hero-cta flex flex-col md:flex-row gap-5 justify-center items-center">
            <a href="#" class="group relative px-8 py-4 bg-white text-black text-base font-semibold rounded-full overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                <span class="relative z-10">Start Transformation</span>
                <div class="absolute inset-0 bg-gradient-to-r from-midas-gold to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#" class="text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-3 group px-6 py-4 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                <span class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all text-sm">▶</span>
                <span>Watch Demo</span>
            </a>
        </div>
    </div>
</section>

<!-- Services Section (Bento Grid) -->
<section id="services" class="py-32 relative bg-cyber-black">
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-20">
            <h2 class="text-[11px] font-bold tracking-[0.2em] text-midas-gold uppercase mb-3 opacity-80">Capabilities</h2>
            <h3 class="text-4xl md:text-6xl font-bold tracking-tight">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Intelligent
                </span>
                <span class="text-neon-blue font-semibold">Architecture</span>
            </h3>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 h-auto md:h-[700px] max-w-6xl mx-auto">
            
            <!-- Large Item: Marketer -->
            <div class="bento-card col-span-1 md:col-span-2 md:row-span-2 glass-panel rounded-[1.5rem] p-8 flex flex-col justify-between group hover:border-midas-gold/20 transition-colors duration-500">
                <div class="relative z-20">
                    <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/80 to-purple-600/80 mb-6 flex items-center justify-center text-3xl shadow-lg shadow-purple-500/10 backdrop-blur-sm">🚀</div>
                    <h4 class="text-3xl font-semibold mb-4 tracking-tight text-white">Autonomous Marketer</h4>
                    <p class="text-gray-400 text-base leading-relaxed font-light">
                        Deploy seemingly infinite campaigns. Our AI analyzes market trends in real-time, adjusting ad spend and creative targeting to maximize ROI automatically.
                    </p>
                </div>
                <!-- Abstract visual decoration -->
                <div class="mt-6 h-40 rounded-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/5 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                    <div class="absolute inset-0 bg-grid-white/[0.03]"></div>
                </div>
            </div>

            <!-- Medium Item: Sales -->
            <div class="bento-card col-span-1 md:col-span-2 md:row-span-1 glass-panel rounded-[1.5rem] p-8 flex flex-col justify-center relative group hover:border-midas-gold/20 transition-colors duration-500">
                <div class="flex items-center gap-6 relative z-20">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-midas-gold/80 to-orange-500/80 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/10 backdrop-blur-sm">💼</div>
                    <div>
                        <h4 class="text-2xl font-semibold tracking-tight text-white">24/7 Sales Agent</h4>
                        <p class="text-gray-400 mt-1 text-sm font-light">Negotiates & closes deals while you sleep.</p>
                    </div>
                </div>
            </div>

            <!-- Small Item: Support -->
            <div class="bento-card col-span-1 md:col-span-1 md:row-span-1 glass-panel rounded-[1.5rem] p-6 flex flex-col justify-end group hover:border-midas-gold/20 transition-colors duration-500">
                 <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/80 to-emerald-600/80 mb-4 flex items-center justify-center text-xl shadow-lg shadow-green-500/10 backdrop-blur-sm">🛡️</div>
                 <h4 class="text-lg font-semibold mb-1 text-white">Instant Support</h4>
                 <p class="text-xs text-gray-400 font-light">Zero latency responses.</p>
            </div>

            <!-- Small Item: Analytics -->
            <div class="bento-card col-span-1 md:col-span-1 md:row-span-1 glass-panel rounded-[1.5rem] p-6 flex flex-col justify-end group hover:border-midas-gold/20 transition-colors duration-500">
                 <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/80 to-rose-600/80 mb-4 flex items-center justify-center text-xl shadow-lg shadow-pink-500/10 backdrop-blur-sm">📈</div>
                 <h4 class="text-lg font-semibold mb-1 text-white">Real-time Data</h4>
                 <p class="text-xs text-gray-400 font-light">Live performance tracking.</p>
            </div>

        </div>
    </div>
</section>

<!-- CTA Section (Parallax) -->
<section id="contact" class="py-32 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-cyber-black to-royal-purple/20 z-0"></div>
    <!-- Mesh Gradient Background -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-midas-gold/5 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
    
    <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">
            Ready to <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Dominate?</span>
        </h2>
        <button class="group relative px-10 py-5 bg-white text-black text-lg font-semibold rounded-full hover:scale-[1.05] transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden">
             <span class="relative z-10 transition-colors group-hover:text-white">Deploy Your Agent</span>
             <div class="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </button>
    </div>
</section>

<?php get_footer(); ?>
