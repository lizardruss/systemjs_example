var systemFetch = System.fetch;
System.fetch = function(load) {
  if (System.normalizeSync('tests') == load.name) {
    return new Promise(function(resolve, reject) {
      resolve([
        "var editor = require('lib/editor'),",
        "    $ = require('jquery');",
        "module.exports = function() {};"
      ].join('\n'));
    });
  }
  return systemFetch.apply(this, arguments);
};

System.registerDynamic(System.normalizeSync('options'), [], false, function(require, exports, module) {
  module.exports = {
    readOnly: false
  };
});

Promise.all([
  System.import('tests')
]).then(function(modules) {
  //var editor = modules[0];
  //editor().save();
});

