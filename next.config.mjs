/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Adding rule to handle .mp4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
