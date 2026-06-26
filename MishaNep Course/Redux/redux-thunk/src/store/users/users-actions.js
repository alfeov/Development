export const addUsers = (users) => ({
  type: 'ADD_USERS',
  payload: users,
})

const url = 'https://jsonplaceholder.typicode.com/users'

export const loadUsers = () => (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch(addUsers(data)))
}
