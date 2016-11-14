MeteorSounds = {};

MeteorSounds.assetsLoaded = new ReactiveVar(false);

MeteorSounds.preloadAllAssets = function () {
  if (_checkPlugin()) {
    NativeAudio = window.plugins.NativeAudio;  

    Meteor.settings = Meteor.settings || {};

    _.defaults(Meteor.settings, {
      public: {
        sounds: {
          simpleAudio: {},
          complexAudio: {}
        }
      }
    });

    _.each(Meteor.settings.public.sounds.simpleAudio, function (simpleAudio, simpleAudioId) {
      NativeAudio.preloadSimple(simpleAudioId, simpleAudio, function () {
      }, function (err) {
        console.error(err);
      });
    });

    _.each(Meteor.settings.public.sounds.complexAudio, function (complexAudio, complexAudioId) {
      NativeAudio.preloadComplex(complexAudioId, complexAudio, 1, 1, 0, function () {
      }, function (err) {
        console.error(err);
      });
    });

    MeteorSounds.assetsLoaded.set(true);
  }
};

MeteorSounds.play = function (sound, successCallback, errorCallback) {
  _checkPlugin() && window.plugins.NativeAudio.play(sound);
};

MeteorSounds.loop = function (sound, successCallback, errorCallback) {
  _checkPlugin() && window.plugins.NativeAudio.loop(sound);
};

MeteorSounds.stop = function (sound, successCallback, errorCallback) {
  _checkPlugin() && window.plugins.NativeAudio.stop(sound);
};

MeteorSounds.unload = function (sound, successCallback, errorCallback) {
  _checkPlugin() && window.plugins.NativeAudio.unload(sound);
};

function _checkPlugin() {
  if (!window.plugins.NativeAudio) {
    console.warn("NativeAudio plugin only works in Cordova applications")
    return;
  }
  return true;
}