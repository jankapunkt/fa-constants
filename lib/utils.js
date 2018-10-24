export const toClass = function (iconId) {
	return 'fa fa-' + iconId;
};

export const toKey = function (iconId) {
	return iconId.replace(/-/g, '');
};

export const has = function (iconId) {
	if (iconId.indexOf('fa-') > -1) {
		return !!this[toKey(iconId.replace('fa-', ''))];
	} else {
		return !!this[toKey(iconId)];
	}
};
