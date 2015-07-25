'use strict';
var test = require('tape');

var {{projectCamelized}} = require('../');

test('{{projectCamelized}} is a function', function t(assert) {
  assert.equal(typeof {{projectCamelized}}, 'function');

  assert.end();
});

test('{{projectCamelized}} is not implemented', function t(assert) {
  assert.throws(function throwIt() {
    {{projectCamelized}}();
  }, /Not Implemented/);

  assert.end();
});
