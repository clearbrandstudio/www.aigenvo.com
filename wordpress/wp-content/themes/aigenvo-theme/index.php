<?php
// Redirect frontend requests to Next.js app or show JSON API info
if ( ! is_admin() ) {
    // If environment variable NEXT_PUBLIC_URL is set, redirect there
    // Otherwise show simple message
    header('Content-Type: application/json');
    echo json_encode([
        'message' => 'AiGenvo Headless WordPress API',
        'status' => 'active',
        'endpoints' => '/graphql'
    ]);
    exit;
}
