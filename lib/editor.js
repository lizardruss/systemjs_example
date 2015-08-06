var jquery = require('jquery');

function Editor() {};
Editor.prototype.save = function() {
  console.log('Save!');
};

module.exports = function() {
  return new Editor();
};