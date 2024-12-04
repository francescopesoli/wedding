import CompressionPlugin from "compression-webpack-plugin";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})({
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    distDir: 'build',
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
            };
        }

        config.plugins.push(
            new CompressionPlugin({
                algorithm: "gzip",
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8,
            })
        );

        return config;
    },
});

export default nextConfig;