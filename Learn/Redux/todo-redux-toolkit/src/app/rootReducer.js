import { combineReducers } from 'redux'
import { todosReducer } from '@/features/Todos/todosSlice'
import { filterReducer } from '@/features/Filters/filtersSlice'

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
})
