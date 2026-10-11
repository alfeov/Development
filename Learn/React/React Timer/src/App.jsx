import { useState } from 'react'
import Timer from './Timer'

export default function App() {
  const [isTimer, setTimer] = useState(false)

  const toggleTimer = () => {
    setTimer(!isTimer)
  }

  return (
    <>
      <button onClick={toggleTimer}>Toggle timer</button>
      {isTimer && <Timer />}
    </>
  )
}
