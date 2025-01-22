/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "liveblocks.io",
            port: "",
          },
        ],
      },
      webpack: (config) => {
        config.module.rules.push({
          test: /\.(bin|node)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        });
        return config;
  },
};

export default nextConfig;
