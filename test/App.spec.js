/* eslint-env mocha */

// do npm install --save-dev babel-polyfill
// or npm i -D babel-polyfill (same thing)

// then run 
// mocha --require test/helpers/setup.js
// mocha -R nyan  --require test/helpers/setup.js (to see the cat)
const { expect } = require('chai')

describe('<Search />', () => {
  it('should pass', () => {
    expect(1 + 1 === 2).to.be.true
  })
})
