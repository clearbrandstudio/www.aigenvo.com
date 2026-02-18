<?php
// Theme setup
function aigenvo_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'aigenvo_setup');

// Enable GraphQL if plugin is active
// (Configuration is mostly done via plugins)

// CORS for Next.js
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
