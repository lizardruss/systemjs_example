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

