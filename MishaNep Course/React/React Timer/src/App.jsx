import './App.css'
import { Component } from 'react'

class App extends Component {
  localStorageKey = 'count'
  state = {
    count: JSON.parse(localStorage.getItem(this.localStorageKey)) ?? 0,
    isCounting: false,
  }

  handleStart = () => {
    this.setState({ isCounting: true })
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  handleStop = () => {
    clearInterval(this.intervalId)
    this.setState({ isCounting: false })
  }

  handleReset = () => {
    if (this.state.isCounting) this.handleStop()
    this.setState({ count: 0 })
  }

  componentDidMount() {
    if (this.state.isCounting) this.handleStop()
  }

  componentDidUpdate() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.count))
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className='App'>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        <div>
          {this.state.isCounting ? (
            <button onClick={this.handleStop}>Stop</button>
          ) : (
            <button onClick={this.handleStart}>Start</button>
          )}
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App
