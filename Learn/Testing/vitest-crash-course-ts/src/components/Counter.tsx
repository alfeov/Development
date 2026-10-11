import { useState } from 'react'

import { useCounter } from '@/hooks/useCounter'

function Counter() {
  const { count, increment } = useCounter()
  const [isVisible, setIsVisible] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const toggleVisibility = () => setIsVisible((isVisible) => !isVisible)

  return (
    <div>
      {isVisible && <p data-testid='counter-value'>{count}</p>}
      <button onClick={increment}>Increment</button>
      <button data-testid='toggle-visibility' onClick={toggleVisibility}>
        {isVisible ? 'Hide counter' : 'Show counter'}
      </button>
      <input
        placeholder='some text...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  )
}

export default Counter
