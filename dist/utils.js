"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.has = exports.toKey = exports.toClass = void 0;

var toClass = function toClass(iconId) {
  return 'fa fa-' + iconId;
};

exports.toClass = toClass;

var toKey = function toKey(iconId) {
  return iconId.replace(/-/g, '');
};

exports.toKey = toKey;

var has = function has(iconId) {
  if (iconId.indexOf('fa-') > -1) {
    return !!this[toKey(iconId.replace('fa-', ''))];
  } else {
    return !!this[toKey(iconId)];
  }
};

exports.has = has;
//# sourceMappingURL=utils.js.map