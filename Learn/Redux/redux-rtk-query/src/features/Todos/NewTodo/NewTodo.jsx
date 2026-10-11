import { useCreateTodoMutation } from '@/app/providers/store/todosApi'

const NewTodo = () => {
  const [createTodo, results] = useCreateTodoMutation()

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(event.target.title.value)
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='new todo' />
      <input type='submit' value='Add Todo' />
    </form>
  )
}

export default NewTodo
