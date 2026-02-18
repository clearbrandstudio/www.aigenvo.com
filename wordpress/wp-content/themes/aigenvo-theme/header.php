<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-cyber-black text-white overflow-x-hidden' ); ?>>
    <?php wp_body_open(); ?>

    <header class="fixed w-full top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="<?php echo home_url(); ?>" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-midas-gold to-neon-blue">
                AIGENVO
            </a>
            
            <nav class="hidden md:flex space-x-8">
                <a href="#services" class="hover:text-midas-gold transition-colors">Services</a>
                <a href="#about" class="hover:text-midas-gold transition-colors">About</a>
                <a href="#contact" class="hover:text-midas-gold transition-colors">Contact</a>
            </nav>

            <a href="#contact" class="px-6 py-2 rounded-full bg-gradient-to-r from-royal-purple to-blue-600 hover:scale-105 transition-transform font-semibold">
                Get Started
            </a>
        </div>
    </header>

    <main id="smooth-wrapper">
        <div id="smooth-content">
