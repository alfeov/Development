import { render, screen } from '@testing-library/react'

import Greeting from './Greeting'

describe('Greeting', () => {
  it('renders a default greeting', () => {
    render(<Greeting />)
    expect(screen.getByText('Hello, World!')).toBeVisible()
  })
  it('renders a greeting with a name', () => {
    render(<Greeting name='Alfeov' />)
    const text = screen.getByText('Hello, Alfeov!')
    expect(text).toBeVisible()
  })
})
