"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fa = undefined;

var _faConstants = require("./fa-constants");

var _utils = require("./utils");

// decorate with classes
_faConstants.fa.toClass = _utils.toClass.bind(_faConstants.fa);
_faConstants.fa.toKey = _utils.toKey.bind(_faConstants.fa);
_faConstants.fa.has = _utils.has.bind(_faConstants.fa);

exports.fa = _faConstants.fa;