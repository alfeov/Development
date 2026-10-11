import { render, screen, waitFor } from '@testing-library/react'
import type { Mock } from 'vitest'

import UserProfile from './UserProfile'

describe('UserProfile', () => {
  beforeEach(() => (globalThis.fetch = vi.fn()))
  afterEach(() => vi.resetAllMocks())

  it('Fetches and display the user data', async () => {
    ;(globalThis.fetch as Mock).mockResolvedValueOnce({
      json: async () => ({ id: 4, name: 'John', email: 'john@email.com' }),
    })
    render(<UserProfile userId='4' />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /john/i })).toBeInTheDocument()
      expect(screen.getByText('john@email.com')).toBeInTheDocument()
    })
  })
})
