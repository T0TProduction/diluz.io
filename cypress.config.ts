// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
  trashAssetsBeforeRuns: true,
  video: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
