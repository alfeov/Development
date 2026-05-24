import { Component } from 'react'

class App extends Component {
  state = {
    email: '',
    isAgreeWithTerms: false,
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, isAgreeWithTerms } = this.state
    const isEmailEmpty = email.length === 0
    if (isEmailEmpty) return alert('We need your email')
    if (!isAgreeWithTerms) return alert('You must agree with terms')
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const isValidEmail = emailRegex.test(email)
    if (!isValidEmail) return alert('Email is not correct')
    alert('Form was sended')
  }

  render() {
    const { email, isAgreeWithTerms } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder='Input your email'
          value={email}
          onChange={this.handleFieldChange}
        />
        <br />
        <label htmlFor='isAgreeWithTerms'>
          <input
            type='checkbox'
            name='isAgreeWithTerms'
            id='isAgreeWithTerms'
            checked={isAgreeWithTerms}
            onChange={this.handleCheckboxChange}
          />
          I agree with terms and condition
        </label>
        <br />
        <input type='submit' value='Send' />
      </form>
    )
  }
}

export default App
