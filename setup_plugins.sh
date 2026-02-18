#!/bin/bash
mkdir -p wordpress/wp-content/plugins
cd wordpress/wp-content/plugins

# WPGraphQL
echo "Downloading WPGraphQL..."
curl -L -O https://downloads.wordpress.org/plugin/wp-graphql.latest-stable.zip
unzip -q -o wp-graphql.latest-stable.zip
rm wp-graphql.latest-stable.zip

# ACF
echo "Downloading ACF..."
curl -L -O https://downloads.wordpress.org/plugin/advanced-custom-fields.latest-stable.zip
unzip -q -o advanced-custom-fields.latest-stable.zip
rm advanced-custom-fields.latest-stable.zip

# WPGraphQL ACF
# Using wpgraphql-acf from GitHub (checked latest stable release logic or master)
echo "Downloading WPGraphQL ACF..."
curl -L -o wp-graphql-acf.zip https://github.com/wp-graphql/wp-graphql-acf/archive/master.zip
unzip -q -o wp-graphql-acf.zip
mv wp-graphql-acf-master wp-graphql-acf
rm wp-graphql-acf.zip

# Yoast SEO
echo "Downloading Yoast SEO..."
curl -L -O https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip
unzip -q -o wordpress-seo.latest-stable.zip
rm wordpress-seo.latest-stable.zip

# Redis Cache
echo "Downloading Redis Cache..."
curl -L -O https://downloads.wordpress.org/plugin/redis-cache.latest-stable.zip
unzip -q -o redis-cache.latest-stable.zip
rm redis-cache.latest-stable.zip

echo "Plugins installed."
