const normalize = require('../src/nameNormalizer')

// This one's a step up from fizzbuzz. See how far you can get (without changing the tests)!
// I suggest working on a signle test at a time. Try ignoring the test you don't want to 
// run by placing an `x` infront of the test, like "xit('returns an empty'...)" or 
// do the same to an entire test suite by placing an x in front of the describe 

xdescribe('a name normalizer', () => {
  it('returns empty string when passed empty string', () => {
    expect(normalize('')).toEqual('')
  })

  it('returns single word name', () => {
    expect(normalize('Socrates')).toEqual('Socrates')
  })

  it('swaps first and last names', () => {
    expect(normalize('Brandon Sanderson')).toEqual('Sanderson, Brandon')
  })

  it('trims leading and trailing whitespace', () => {
    expect(normalize('    Frank Herbert   ')).toEqual('Herbert, Frank')
  })

  it('initializes middle name', () => {
    expect(normalize('Edgar Allen Poe')).toEqual('Poe, Edgar A.')
  })

  it('does not initialize one letter middle name', () => {
    expect(normalize('Hunter S Thompson')).toEqual('Thompson, Hunter S')
  })

  it('initializes each of multiple middle names', () => {
    expect(normalize('James Scarlet Abraham Corey')).toEqual('Corey, James S. A.')
  })

  it('appends suffixes to end', () => {
    expect(normalize('Martin Luther King, Jr.')).toEqual('King, Martin L., Jr.')
  })

  it('throws when name contains two commas', () => {
    expect(() => normalize('Richard, the, III')).toThrow()
  })
})
