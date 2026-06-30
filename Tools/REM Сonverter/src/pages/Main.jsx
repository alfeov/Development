import { useState } from 'react'

export function Main() {
  const [result, setResult] = useState('Result will be here!')

  function handleSubmit(e) {
    e.preventDefault()

    const coefficient = e.target.coefficient.value
    const css = e.target.css.value

    const regExp = /(\d+(\.\d+)?)rem/g
    const newCss = css.replace(regExp, (match, p1) => {
      const number = Number(p1)
      const newNumber = number / coefficient
      const resultNumber =
        newNumber.toString().length > 5 ? newNumber.toFixed(3) : newNumber
      return resultNumber + 'rem'
    })
    console.log(newCss)
    setResult(newCss)
  }

  return (
    <>
      <main className='container'>
        <nav>
          <ul>
            <li>
              <h4>REM Converter</h4>
            </li>
          </ul>
        </nav>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type='text'
              name='coefficient'
              placeholder='Coefficient here'
            />
            <textarea
              name='css'
              placeholder='Insert css/scss text here'
            ></textarea>
            <input type='submit' value='Convert' />
          </fieldset>
        </form>

        <pre>{result}</pre>
      </main>
    </>
  )
}
