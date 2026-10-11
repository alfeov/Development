import { api } from './api'

export const usersApi = {
  getUsers: ({ pageParam, limit = 5 }) => {
    return api
      .get('/users', { params: { _page: pageParam, _limit: limit } })
      .then((res) => {
        const data = res.data
        const total = res.headers['x-total-count']
        return { data, total }
      })
  },
  createUser: (user) => api.post('/users', user).then((res) => res.data),
  updateUser: (user) => api.patch('/users', user).then((res) => res.data),
  deleteUser: (userId) =>
    api.delete('/users/' + userId).then((res) => {
      console.log(res)
    }),
}
