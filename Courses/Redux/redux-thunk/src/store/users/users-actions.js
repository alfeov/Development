export const addUsers = (users) => ({
  type: 'ADD_USERS',
  payload: users,
})

const setUsersFetching = {
  type: 'SET_USERS_FETCHING',
}

const setUsersError = (error) => ({
  type: 'SET_USERS_ERROR',
  payload: error,
})

const optimisticCreateUser = (user) => ({
  type: 'OPTIMISTIC_CREATE_USER',
  payload: user,
})

const createUser = (user) => ({
  type: 'CREATE_USER',
  payload: user,
})

const createError = (username) => ({
  type: 'CREATE_ERROR',
  payload: username,
})

export const loadUsers = () => (dispatch, _, api) => {
  dispatch(setUsersFetching)
  api
    .get('/users')
    .then((users) => dispatch(addUsers(users)))
    .catch((error) => dispatch(setUsersError(error)))
}

export const loadCreateUser =
  (user = {}) =>
  (dispatch, _, api) => {
    dispatch(optimisticCreateUser(user))
    api
      .post('/users', user)
      .then((user) => dispatch(createUser(user)))
      .catch((error) => {
        dispatch(createError(user.username))
        alert(error)
      })
  }
