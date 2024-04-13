// next.config.mjs
import sveltePreprocess from 'svelte-preprocess';

const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(svelte)$/,
      use: [
        {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess(),
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
