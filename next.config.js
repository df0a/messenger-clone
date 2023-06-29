/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [['next-superjson-plugin', {}]],
    },
    images: [
        'res.cloundinary.com',
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com',
    ],
};

module.exports = nextConfig;
