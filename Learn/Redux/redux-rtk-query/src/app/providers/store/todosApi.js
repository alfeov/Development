import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const limit = 50

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/todos',
  }),
  tagTypes: ['todos'],
  endpoints: (build) => ({
    getInfiniteTodos: build.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, _, lastPageParam) => {
          if (lastPage.length === 0 || lastPage.length < limit) {
            return undefined
          }
          return lastPageParam + 1
        },
      },
      query: ({ pageParam }) => `?_limit=${limit}&_page=${pageParam}`,
      providesTags: ['todos'],
    }),
    getTodos: build.query({
      query: () => '',
      providesTags: ['todos'],
    }),
    createTodo: build.mutation({
      query: (title) => ({
        url: '',
        method: 'POST',
        body: {
          title,
          key: 'hello',
          completed: false,
        },
      }),
      invalidatesTags: ['todos'],
    }),
    removeTodo: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos'],
    }),
    updateTodo: build.mutation({
      query: ({ id, completed }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: { completed: !completed },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useGetInfiniteTodosInfiniteQuery,
  useCreateTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} = todosApi
