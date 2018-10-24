"use strict";

var request = require('request');

var jsyaml = require('js-yaml');

var fs = require('fs');

var toKey = function toKey(iconId) {
  return iconId.replace(/-/g, '');
};

var url = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/fa-4/src/icons.yml';
console.log('> load icons from ' + url);
request.get(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  if (response) {
    console.log('> received ' + response);
  }

  var parsedYaml = jsyaml.load(body);
  var unordered = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parsedYaml.icons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;
      unordered[toKey(entry.id)] = entry.id;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var ordered = {};
  Object.keys(unordered).sort().forEach(function (key) {
    ordered[key] = unordered[key];
  });
  console.log('write to lib/fa-constants.json');
  fs.writeFile('lib/fa-constants.json', JSON.stringify(ordered), 'utf8', function (err, res) {
    if (err) {
      console.error(err);
    } else {
      console.log('[done] written to lib/fa-constants.json');
    }
  });
  console.log('write to lib/fa-constants.js');
  fs.writeFile('lib/fa-constants.js', 'export const fa = ' + JSON.stringify(ordered) + ';', 'utf8', function (err, res) {
    if (err) {
      console.error(err);
    } else {
      console.log('[done] written to lib/fa-constants.json');
    }
  });
});
//# sourceMappingURL=parse.js.map