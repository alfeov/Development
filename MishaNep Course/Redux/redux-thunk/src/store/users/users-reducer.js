export const userReducer = (state = [], action) => {
  if (action.type === 'ADD_USERS') {
    return action.payload
  }
  return state
}
