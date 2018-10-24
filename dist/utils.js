'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var toClass = exports.toClass = function toClass(iconId) {
	return 'fa fa-' + iconId;
};

var toKey = exports.toKey = function toKey(iconId) {
	return iconId.replace(/-/g, '');
};

var has = exports.has = function has(iconId) {
	if (iconId.indexOf('fa-') > -1) {
		return !!this[toKey(iconId.replace('fa-', ''))];
	} else {
		return !!this[toKey(iconId)];
	}
};