import axios from 'axios'

import { users } from '@/mocks/users'

import { getData } from './getData'

vi.mock('axios')

describe('getData', () => {
  it('return data with success request', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({ data: users })

    const result = await getData()

    expect(axios.get).toHaveBeenCalledOnce()
    expect(result).toEqual(users)
  })
})
