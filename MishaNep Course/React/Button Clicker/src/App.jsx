import { Component } from 'react'

class App extends Component {
  state = {
    count: 0,
  }

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1>Hello from React</h1>
        <button
          onClick={this.decreaseCount}
          // onClick={() => {
          //   this.setState({ count: this.state.count - 1 })
          // }}
        >
          Decrease
        </button>
        <span style={{ margin: 10 + 'px' }}>{this.state.count}</span>
        <button
          onClick={this.increaseCount}
          // onClick={() => {
          //   this.setState({ count: this.state.count + 1 })
          // }}
        >
          Increase
        </button>
      </>
    )
  }
}

export default App
