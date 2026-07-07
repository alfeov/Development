export const selectAllTodos = (state) => state.todos

export const selectVisibleTodos = (state, filter) => {
  if (filter === 'all') {
    return state.todos
  }
  if (filter === 'active') {
    return state.todos.filter((todo) => !todo.completed)
  }
  if (filter === 'completed') {
    return state.todos.filter((todo) => todo.completed)
  }

  return state.todos
}
