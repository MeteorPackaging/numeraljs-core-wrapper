Package.describe({
  name: 'numeral:numeral',
  summary: 'Numeral.js (official) - A library for formatting and manipulating numbers.',
  version: '1.5.3_1',
  git: 'https://github.com/MeteorPackaging/numeraljs-core-wrapper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles([
    'meteor-pre.js',
    'upstream/numeral.js',
    'meteor-post.js',
  ]);
  api.export('numeral');
});

Package.on_test(function(api) {
  api.use('numeral:numeral');

  api.use([
    'tinytest',
    'test-helpers'
  ]);

  api.add_files([
    'tests/tests.js',
  ]);
});
