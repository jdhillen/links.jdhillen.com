export default {
  branches: ['main'],
  tagFormat: '${version}',
  extends: '@jdhillen/release-config',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github'
  ]
};
