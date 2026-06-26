export const postsReducer = (state = [], action) => {
  if (action.type === 'ADD_POSTS') {
    return action.payload
  }
  return state
}
