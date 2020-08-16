module.exports = {
  'non-interactive': false,
  'dry-run': false,
  verbose: true,
  changelogCommand: './releaser.sh',
  src: {
    commit: true,
    commitMessage: 'Release %s - v${version}',
    commitArgs: '--no-verify',
    pushArgs: '--no-verify',
    tag: true,
    tagName: '%s',
    tagAnnotation: 'Release %s',
  },
  npm: {
    publish: false,
  },
  github: {
    release: true,
  },
};
