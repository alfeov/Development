const initialState = {
  status: 'idle',
  posts: [],
  error: null,
}

export const postsReducer = (state = initialState, action) => {
  if (action.type === 'ADD_POSTS') {
    return {
      ...state,
      posts: action.payload,
      status: 'idle',
    }
  }
  if (action.type === 'SET_POST_FETCHING') {
    return {
      ...state,
      status: 'fetching',
    }
  }
  if (action.type === 'SET_POST_ERROR') {
    return {
      ...state,
      status: 'idle',
      error: action.payload,
    }
  }
  return state
}
