'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;
function wrap(func) {
  return function () {
    func.apply(undefined, arguments).catch(function (err) {
      console.error('async function error', err);
    });
  };
}
module.exports = exports['default'];