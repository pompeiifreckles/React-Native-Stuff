/* eslint-disable no-undef */
const { sum } = require('../sum')

test('sum [Function]: (1, 1)', () => {
  expect(sum(1, 1)).toBe(2)
})

test('sum [Function]: (1,2)', () => {
  expect(sum(1,2)).toBe(3)
})

describe('sum [Function]: (2, 3) (-1, 7) (20, 22)', () => {
  it('(2, 3)', () => { expect(sum(2, 3)).toBe(5) })
  it('(9, 7)', () => { expect(sum(9, 7)).toBe(16) })
  it('(-7, 3)', () => { expect(sum(-7, 3)).toBe(-4) })
})
