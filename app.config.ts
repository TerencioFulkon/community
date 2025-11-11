import { ExpoConfig } from '@expo/config';

const config: ExpoConfig = {
  name: 'Neurodivergent Community',
  slug: 'neurodivergent-community',
  version: '1.0.0',
  orientation: 'portrait',
  platforms: ['ios', 'android', 'web'],
  jsEngine: 'hermes',
  scheme: 'community',
  experiments: {
    typedRoutes: true
  },
  web: {
    bundler: 'metro',
    output: 'single'
  }
};

export default config;

