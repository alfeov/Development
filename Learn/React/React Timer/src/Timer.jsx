import { useEffect, useReducer } from 'react'

const localStorageKey = 'count'

function createInitialState() {
  return {
    count: JSON.parse(localStorage.getItem(localStorageKey)) ?? 0,
    isCounting: false,
  }
}

function countReducer(state, { type, num = 1 }) {
  if (type === 'START') {
    return {
      ...state,
      isCounting: true,
    }
  }
  if (type === 'STOP') {
    return {
      ...state,
      isCounting: false,
    }
  }
  if (type === 'RESET') {
    return {
      count: 0,
      isCounting: false,
    }
  }
  if (type === 'COUNT') {
    return {
      ...state,
      count: state.count + num,
    }
  }
  return state
}

export default function Timer() {
  const [{ count, isCounting }, dispatch] = useReducer(
    countReducer,
    null,
    createInitialState,
  )

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(count))
  }, [count])

  useEffect(() => {
    let intervalId = null
    if (isCounting) {
      intervalId = setInterval(() => {
        dispatch({ type: 'COUNT' })
      }, 1000)
    }
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isCounting])

  return (
    <div className='App'>
      <h1>React Timer</h1>
      <h3>{count}</h3>
      <div>
        {isCounting ? (
          <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
        ) : (
          <button onClick={() => dispatch({ type: 'START' })}>Start</button>
        )}
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  )
}
