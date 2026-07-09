import NewTodo from '@/features/Todos/NewTodo'
import Filters from '@/features/Filters/Filters'
import TodoList from '@/features/Todos/TodoList'

export function Todo() {
  return (
    <div className='Todo'>
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  )
}
