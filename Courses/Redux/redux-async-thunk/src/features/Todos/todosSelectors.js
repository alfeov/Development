export const selectAllTodos = (state) => state.todos

export const selectVisibleTodos = (todos, filter) => {
  if (filter === 'all') {
    return todos
  }
  if (filter === 'active') {
    return todos.filter((todo) => !todo.completed)
  }
  if (filter === 'completed') {
    return todos.filter((todo) => todo.completed)
  }

  return todos
}
