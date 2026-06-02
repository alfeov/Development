import { useEffect, useRef, useState } from 'react'

const localStorageKey = 'count'

export default function Timer() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) ?? 0,
  )
  const [isCounting, setIsCounting] = useState(false)

  const intervalIdRef = useRef(null)

  const handleStart = () => {
    setIsCounting(true)
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(intervalIdRef.current)
    setIsCounting(false)
  }

  const handleReset = () => {
    if (isCounting) handleStop()
    setCount(0)
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(count))
  }, [count])

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
    }
  }, [])

  return (
    <div className='App'>
      <h1>React Timer</h1>
      <h3>{count}</h3>
      <div>
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
