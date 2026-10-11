import { digitize } from './app'

describe('digitize', () => {
  it('should split number to array and reverse it', () => {
    expect(digitize(12345)).toEqual([5, 4, 3, 2, 1])
  })
  it('should throw error on negative value', () => {
    expect(() => digitize(-123)).toThrow(new Error('Value must non negative'))
  })
  it('should call Array From method with correct value', () => {
    const spyArrayFrom = vi.spyOn(Array, 'from')
    digitize(12345)
    expect(spyArrayFrom).toHaveBeenCalled()
  })
  it('should not call Array From method with incorrect value', () => {
    const spyArrayFrom = vi.spyOn(Array, 'from')
    expect(() => digitize(-123)).toThrow(new Error('Value must non negative'))
    expect(spyArrayFrom).not.toHaveBeenCalled()
  })
})
