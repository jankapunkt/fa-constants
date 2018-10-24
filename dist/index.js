"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fa", {
  enumerable: true,
  get: function get() {
    return _faConstants.fa;
  }
});

var _faConstants = require("./fa-constants");

var _utils = require("./utils");

// decorate with classes
_faConstants.fa.toClass = _utils.toClass.bind(_faConstants.fa);
_faConstants.fa.toKey = _utils.toKey.bind(_faConstants.fa);
_faConstants.fa.has = _utils.has.bind(_faConstants.fa);
//# sourceMappingURL=index.js.map