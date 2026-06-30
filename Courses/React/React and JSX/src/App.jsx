import './App.css'
import Book from './Book.jsx'

const App = () => {
  return (
    <div>
      <h1>Hello from React</h1>
      <Book name='Черный лебедь' year='2007' price='50' />
      <Book name='Путь джедая' year='2023' price='20' />
      <Book name='Теория ограничений Голдратта' year='2008' price='40' />
    </div>
  )
}

export default App
