import NewTodo from '@/components/NewTodo'
import Filters from '@/components/Filters/Filters'
import { Outlet } from 'react-router'
import TodoList from '@/components/TodoList'

export function TodoPage() {
  return (
    <div className='TodoPage'>
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  )
}
