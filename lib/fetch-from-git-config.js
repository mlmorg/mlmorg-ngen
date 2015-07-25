'use strict';
var format = require('util').format;
var spawn = require('child_process').spawn;

module.exports = fetchFromGitConfig;

function fetchFromGitConfig(key) {
  function readValue(values, callback) {
    var called = false;
    var proc = spawn('git', [
      '--bare',
      'config',
      '--global',
      key
    ]);

    proc.stdout.once('data', function handleChunk(chunk) {
      called = true;
      callback(null, String(chunk));
    });
    proc.stdout.once('error', callback);
    proc.stdout.once('end', function handleEnd() {
      if (called) {
        return;
      }

      var message = format('please configure %s in git', key);
      callback(new Error(message));
    });
  }

  return readValue;
}
