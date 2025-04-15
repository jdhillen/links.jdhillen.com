import createConfig from '@jdhillen/eslint-config';

// Create config with optional additional folder exclusions
// Note: node_modules, dist, and build are already ignored by default
const config = createConfig({
  ignorePaths: [
    // Add additional paths to ignore here, for example:
    // '**/coverage/**',
    // '**/temp/**',
    // '**/logs/**'
  ]
});

export default [
  ...config,
  // You can add your own rules or overrides here
  {
    languageOptions: {
      globals: {
        console: true
      }
    }
  }
];