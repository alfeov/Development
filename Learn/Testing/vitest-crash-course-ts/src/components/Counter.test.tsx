import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import Counter from './Counter'

describe('Counter', () => {
  beforeEach(() => {
    render(<Counter />)
  })
  it('Increments counter on button click', async () => {
    const button = screen.getByRole('button', { name: /increment/i })
    const counterValue = screen.getByTestId('counter-value')

    expect(counterValue.textContent).toEqual('0')

    await userEvent.tripleClick(button)

    expect(counterValue.textContent).toEqual('3')
  })
  it('Counter should mount and unmount on toggle visibility', () => {
    expect(screen.queryByTestId('counter-value')).toBeInTheDocument()

    const toggleVisibilityButton = screen.getByTestId('toggle-visibility')

    fireEvent.click(toggleVisibilityButton)

    expect(screen.queryByTestId('counter-value')).toBeNull()
  })
  it('Should change input value on change', async () => {
    const input = screen.getByPlaceholderText('some text...')

    expect(input).toHaveValue('')

    await userEvent.type(input, 'Some text')

    expect(input).toHaveValue('Some text')
  })
})
