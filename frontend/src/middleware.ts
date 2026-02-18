import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'km', 'zh'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Don't prefix default locale
    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(km|zh)/:path*']
};
