import { usersApi } from '@/api/usersApi'
import { wait } from '@/helpers/wait'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// export function useCreateUserMutation() {
//   const queryClient = useQueryClient()
//   return useMutation({
//     mutationFn: usersApi.createUser,
//     onSuccess: (data) => {
//       console.log('User created!')
//       console.log(data)
//       queryClient.setQueryData(['users'], (oldData) => [data, ...oldData])
//       // queryClient.invalidateQueries({ queryKey: ['users'] })
//     },
//     onError: () => {
//       console.log('User creation failed')
//     },
//     onSettled: () => {
//       console.log('User creation settled')
//     },
//   })
// }

// Optimistic update
export function useCreateUserMutation() {
  return useMutation({
    mutationFn: usersApi.createUser,
    onMutate: async (user, { client }) => {
      await client.cancelQueries({ queryKey: ['users'] })

      const prevUsers = client.getQueryData(['users'])

      client.setQueryData(['users'], (oldUsers) => [...oldUsers, user])
      await wait(3000)

      return { prevUsers }
    },
    onSuccess: (user, variables, onMutateResult, { client }) => {
      client.setQueryData(
        ['users'],
        [...(onMutateResult?.prevUsers || []), user],
      )
      console.log('User created!')
    },
    onError: (data, variables, onMutateResult, { client }) => {
      client.setQueryData(['users'], onMutateResult?.prevUsers)
      console.log('User creation failed')
    },
    onSettled: () => {
      console.log('User creation settled')
    },
  })
}

export function useDeleteUserMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: usersApi.deleteUser,
    onSuccess: (data, userId) => {
      queryClient.setQueryData(['users'], (oldUsers) =>
        oldUsers.filter((user) => user.id !== userId),
      )
      console.log('Users deletion success')
    },
    onError: () => {
      console.log('Users deletion failed')
    },
    onSettled: () => {
      console.log('Users deletion settled')
    },
  })
}
