import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'
import { describe } from 'vitest'
import { it } from 'vitest'
import { expect } from 'vitest'
import '@testing-library/jest-dom/vitest'

describe('Greeting', () => {
  it('renders a default greeting', () => {
    render(<Greeting />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
  it('renders a greeting with a name')
})
