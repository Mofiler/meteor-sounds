Package.describe({
  name: 'tafelito:meteor-sounds',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Play local sounds on mobile devices',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Mofiler/meteor-sounds',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
});

Cordova.depends({
  'cordova-plugin-nativeaudio': '3.0.7'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use('reactive-var', 'client');
  api.addFiles('meteorSounds.js', ['web.cordova']);

  // export MeteorSounds Object
  api.export('MeteorSounds', ['web.cordova']);
});
