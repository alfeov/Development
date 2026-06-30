const initialState = {
  users: [],
  status: 'idle',
  error: null,
}

export const userReducer = (state = initialState, action) => {
  if (action.type === 'ADD_USERS') {
    return {
      ...state,
      users: action.payload,
      status: 'idle',
    }
  }
  if (action.type === 'SET_USERS_FETCHING') {
    return {
      ...state,
      status: 'fetching',
    }
  }
  if (action.type === 'SET_USERS_ERROR') {
    return {
      ...state,
      status: 'idle',
      error: action.payload,
    }
  }
  if (action.type === 'OPTIMISTIC_CREATE_USER') {
    return {
      ...state,
      users: [action.payload, ...state.users],
    }
  }
  // TODO
  if (action.type === 'CREATE_USER') {
    return {
      ...state,
      users: state.users.map((user) => {
        if (user.username === action.payload.username) {
          return action.payload
        }
        return user
      }),
    }
  }
  if (action.type === 'CREATE_ERROR') {
    return {
      ...state,
      users: state.users.filter((user) => user.username !== action.payload),
    }
  }

  return state
}
