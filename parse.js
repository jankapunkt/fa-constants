const request = require("request");
const jsyaml = require('js-yaml');
const fs = require('fs');

const toKey = function (iconId) {
	return iconId.replace(/-/g, '');
};


const url = 'https://rawgit.com/FortAwesome/Font-Awesome/master/src/icons.yml';
console.log('> load icons from ' + url);
request.get(url, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}
	if (response) {
		console.log("> received " + response.code);
	}

	const parsedYaml = jsyaml.load(body);
	const unordered = {};
	for (let entry of parsedYaml.icons) {
		unordered[toKey(entry.id)] = entry.id;
	}

	//console.log(JSON.stringify(unordered));
// → '{"b":"foo","c":"bar","a":"baz"}'

	const ordered = {};
	Object.keys(unordered).sort().forEach(function (key) {
		ordered[key] = unordered[key];
	});

	fs.writeFile('lib/fa-constants.json', JSON.stringify(ordered), 'utf8', function (err, res) {
		if (err) console.error(err);
	});

	fs.writeFile('lib/fa-constants.js', 'export const fa = ' + JSON.stringify(ordered) + ';', 'utf8', function (err, res) {
		if (err) console.error(err);
	});


	//console.log(JSON.parse(JSON.stringify(ordered)));
});