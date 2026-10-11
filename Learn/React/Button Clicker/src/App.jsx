import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Hello from React</h1>
      <button onClick={decreaseCount}>Decrease</button>
      <span style={{ margin: 10 + 'px' }}>{count}</span>
      <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default App
