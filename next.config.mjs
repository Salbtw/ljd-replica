import { resolve } from 'path';

export default {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  webpack(config, { isServer }) {
    config.resolve.modules.push(resolve('./src'));
    return config;
  },
};
