import { usersApi } from '@/api/usersApi'
import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'

// ! change getUsers function to format return data to use this hook
// export function useUsersSuspenseQuery() {
//   return useSuspenseQuery({
//     queryKey: ['users'],
//     queryFn: usersApi.getUsers,
//   })
// }

export function useUsersPaginationQuery({ page = 1, limit = 5 }) {
  return useSuspenseQuery({
    queryKey: ['users', page],
    queryFn: () => usersApi.getUsers({ page, limit }),
  })
}

// infinite scroll
export function useUsersInfiniteQuery() {
  return useSuspenseInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam }) => usersApi.getUsers({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log(lastPage, allPages, lastPageParam, allPageParams)
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  })
}
