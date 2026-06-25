import store from '@/store'
import '@/styles/main.scss'
import { Provider } from 'react-redux'
import NewTodo from '@/components/NewTodo'
import TodoList from '@/components/TodoList'
import { Filters } from '@/components/Filters/Filters'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Hello Redux Todo</h1>
        <NewTodo />
        <Filters></Filters>
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
