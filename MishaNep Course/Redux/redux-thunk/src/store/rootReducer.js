import { combineReducers } from 'redux'
import { userReducer } from './users/users-reducer'
import { postsReducer } from './posts/posts-reducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
})
