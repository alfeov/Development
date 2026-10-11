import { act, render, renderHook, screen } from '@testing-library/react'

import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('initial value is 5', () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })
  it('increment', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
  it('increment', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(-1)
  })
})
