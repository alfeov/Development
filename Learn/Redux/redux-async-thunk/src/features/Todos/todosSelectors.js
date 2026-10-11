import { createSelector } from '@reduxjs/toolkit'
import { selectActiveFilter } from '../Filters/filtersSlice'
import { todosSelectors } from './todosSlice'

// export const selectVisibleTodos = (todos, filter) => {
//   if (filter === 'all') {
//     return todos
//   }
//   if (filter === 'active') {
//     return todos.filter((todo) => !todo.completed)
//   }
//   if (filter === 'completed') {
//     return todos.filter((todo) => todo.completed)
//   }

//   return todos
// }

export const selectVisibleTodos = createSelector(
  [todosSelectors.selectAll, selectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === 'all') {
      return allTodos
    }
    if (activeFilter === 'active') {
      return allTodos.filter((todo) => !todo.completed)
    }
    if (activeFilter === 'completed') {
      return allTodos.filter((todo) => todo.completed)
    }

    return allTodos
  },
)
