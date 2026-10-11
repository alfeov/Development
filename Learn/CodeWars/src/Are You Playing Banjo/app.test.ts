import { areYouPlayingBanjo } from './app'

describe('areYouPlayingBanjo', () => {
  it('plays banjo for names starting with R', () => {
    expect(areYouPlayingBanjo('Roy')).toBe('Roy plays banjo')
  })

  it('plays banjo for names starting with r', () => {
    expect(areYouPlayingBanjo('roy')).toBe('roy plays banjo')
  })

  it('does not play banjo when r is not the first letter', () => {
    expect(areYouPlayingBanjo('Barry')).toBe('Barry does not play banjo')
  })

  it('does not play banjo for names starting with another letter', () => {
    expect(areYouPlayingBanjo('Doe')).toBe('Doe does not play banjo')
  })
})
