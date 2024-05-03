/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './src/utils/image-loader.js',
    },
};

if (process.env.C0_BASE_PATH) {
    nextConfig.basePath = process.env.C0_BASE_PATH;
}

export default nextConfig;
