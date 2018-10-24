/* global describe it */
import request from 'request'
import jsyaml from 'js-yaml'
import { assert } from 'chai'

import { fa } from '../lib/index'

describe('fa-constants', function () {
  it('has the latest id entries', function (done) {
    // get the latest as yaml list
    const url = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/fa-4/src/icons.yml'
    request.get(url, (error, response, body) => {
      if (error) {
        done(error)
        return
      }

      const parsedYaml = jsyaml.load(body)
      for (let entry of parsedYaml.icons) {
        if (!entry || !entry.id) continue // skip falsey entries

        const value = fa[ fa.toKey(entry.id) ]
        assert.isDefined(value)
        assert.equal(value, entry.id)
      }
      done()
    })
  })

  it('entries and keys are similar', function () {
    const keys = Object.keys(fa)
    for (let key of keys) {
      if (typeof fa[ key ] === 'function') continue

      const cleanValue = fa.toKey(fa[ key ])
      assert.equal(cleanValue, key)
    }
  })
})

describe('toClass', function () {
  it('generates the fa- class correctly for each id', function () {
    const keys = Object.keys(fa)
    for (let key of keys) {
      const classValue = fa.toClass(fa[ key ])
      assert.equal(classValue, 'fa fa-' + fa[ key ])
    }
  })
})
