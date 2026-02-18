FROM wordpress:php8.3-fpm-alpine

# Install dependencies and extensions
RUN apk add --no-cache \
    less \
    mariadb-client \
    $PHPIZE_DEPS \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apk del $PHPIZE_DEPS

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar /usr/local/bin/wp

# Clean up
RUN rm -rf /var/cache/apk/*
