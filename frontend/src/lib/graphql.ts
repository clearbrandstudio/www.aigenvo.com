export async function fetchGraphQL(query: string, variables: any = {}) {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };

    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }

    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://localhost:8080/graphql", {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables,
        }),
        next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
    });

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

// Helper to get locale enum for WPGraphQL
// Polylang usually expects 'en_US', 'km', 'zh_CN' etc.
// We map our simplified codes to WPGraphQL language codes.
export const localeMap: Record<string, string> = {
    en: "EN",
    km: "KM",
    zh: "ZH_CN" // Assuming simplified
};
