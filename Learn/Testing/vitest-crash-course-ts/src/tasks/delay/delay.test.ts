import { delay } from './delay'

describe('delay', () => {
  it('should return callback result after delay', async () => {
    const sum = await delay(() => 5 + 5, 1000)
    expect(sum).toBe(10)
  })
})
