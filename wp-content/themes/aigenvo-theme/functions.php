<?php

/**
 * Enqueue scripts and styles.
 */
function aigenvo_scripts() {
    $theme_version = wp_get_theme()->get( 'Version' );

    // Vite integration
    $is_development = false; // Set to true for local dev with HMR if checking localhost:3000

    if ( defined('WP_ENVIRONMENT_TYPE') && WP_ENVIRONMENT_TYPE === 'local' ) {
        $is_development = true;
    }

    if ( $is_development ) {
        // HMR
        wp_enqueue_script( 'vite-client', 'http://localhost:3000/@vite/client', [], null, true );
        wp_enqueue_script( 'aigenvo-main', 'http://localhost:3000/src/main.js', [], $theme_version, true );
    } else {
        // Production build
        $manifest_path = get_template_directory() . '/dist/.vite/manifest.json';
        
        if ( file_exists( $manifest_path ) ) {
            $manifest = json_decode( file_get_contents( $manifest_path ), true );
            
            if ( isset( $manifest['src/main.js'] ) ) {
                $js_file = $manifest['src/main.js']['file'];
                $css_file = isset( $manifest['src/main.js']['css'][0] ) ? $manifest['src/main.js']['css'][0] : null;

                wp_enqueue_script( 'aigenvo-main', get_template_directory_uri() . '/dist/' . $js_file, [], $theme_version, true );
                
                if ( $css_file ) {
                    wp_enqueue_style( 'aigenvo-style', get_template_directory_uri() . '/dist/' . $css_file, [], $theme_version );
                }
            }
        }
    }
}
add_action( 'wp_enqueue_scripts', 'aigenvo_scripts' );

/**
 * Theme Support
 */
function aigenvo_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'aigenvo_setup' );
