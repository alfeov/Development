import { digitize } from './app'

describe('digitize', () => {
  it('should split number to array and reverse it', () => {
    expect(digitize(12345)).toEqual([5, 4, 3, 2, 1])
  })
  // it('should throw error on negative value', () => {
  //   assert.throws(() => digitize(-123), 'Value must non')
  // })
})
