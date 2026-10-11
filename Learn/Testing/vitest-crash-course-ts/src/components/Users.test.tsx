import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { users } from '@/mocks/users'
import { getData } from '@/tasks/getData/getData'

import { Users } from './Users'

vi.mock('@/tasks/getData/getData')

describe('Users', () => {
  beforeEach(() => {
    vi.mocked(getData).mockResolvedValue(users)
  })

  it('Should render list of users', async () => {
    render(<Users />)

    const userElements = await screen.findAllByRole('paragraph')

    expect(getData).toHaveBeenCalledOnce()
    expect(userElements.length).toBe(2)
  })
})
