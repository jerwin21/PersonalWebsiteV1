/** @type {import('next').NextConfig} */
let nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
          name: '[name].[ext]'
        }
        },
      ]
    });

    return config;
  },
};

module.exports = nextConfig;
