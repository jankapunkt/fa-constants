const request = require('request')
const jsyaml = require('js-yaml')
const fs = require('fs')

const toKey = function (iconId) {
  return iconId.replace(/-/g, '')
}

const url = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/fa-4/src/icons.yml'
console.log('> load icons from ' + url)
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error)
    return
  }
  if (response) {
    console.log('> received ' + response)
  }

  const parsedYaml = jsyaml.load(body)
  const unordered = {}
  for (let entry of parsedYaml.icons) {
    unordered[ toKey(entry.id) ] = entry.id
  }

  const ordered = {}
  Object.keys(unordered).sort().forEach(function (key) {
    ordered[ key ] = unordered[ key ]
  })

  console.log('write to lib/fa-constants.json')
  fs.writeFile('lib/fa-constants.json', JSON.stringify(ordered), 'utf8', function (err, res) {
    if (err) {
      console.error(err)
    } else {
      console.log('[done] written to lib/fa-constants.json')
    }
  })

  console.log('write to lib/fa-constants.js')
  fs.writeFile('lib/fa-constants.js', 'export const fa = ' + JSON.stringify(ordered) + ';', 'utf8', function (err, res) {
    if (err) {
      console.error(err)
    } else {
      console.log('[done] written to lib/fa-constants.json')
    }
  })
})
