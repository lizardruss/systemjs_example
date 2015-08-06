module.exports = function() {
  var runner = require('../lib/runner'),
      $ = require('jquery'),
      assert = require('chai').assert;

  it('uses bail: true', function() {
    assert($);
    assert(runner);
  });
};