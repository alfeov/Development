import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

export const loadTodos = createAsyncThunk(
  '@@todos/loadTodos',
  async (_, { rejectWithValue, extra: api }) => {
    try {
      return await api.loadTodos()
    } catch (error) {
      return rejectWithValue(error)
    }
  },
  {
    condition: (_, { getState }) => getState().todos.status !== 'loading',
  },
)

export const createTodo = createAsyncThunk(
  '@@todos/createTodo',
  async (title, { extra: api }) => {
    return await api.createTodo(title)
  },
)

export const removeTodo = createAsyncThunk(
  '@@todos/removeTodo',
  async (id, { extra: api }) => {
    await api.removeTodo(id)
    return id
  },
)

export const updateTodo = createAsyncThunk(
  '@@todos/updateTodo',
  async ({ id, completed }, { extra: api }) => {
    return await api.updateTodo({ id, completed })
  },
)

const todosAdapter = createEntityAdapter({
  selectId: (todo) => todo.id,
})

export const todosSelectors = todosAdapter.getSelectors((state) => state.todos)

const todosSlice = createSlice({
  name: '@@todos',
  initialState: todosAdapter.getInitialState({
    status: 'idle', // 'loading',
    error: null,
  }),
  extraReducers: (builder) => {
    builder
      // loadTodos
      .addCase(loadTodos.fulfilled, todosAdapter.addMany)
      // createTodo
      .addCase(createTodo.fulfilled, todosAdapter.addOne)
      // removeTodo
      .addCase(removeTodo.fulfilled, (state, action) => {
        todosAdapter.removeOne(state, action.payload)
      })
      // updateTodo
      .addCase(updateTodo.fulfilled, (state, action) => {
        todosAdapter.updateOne(state, {
          id: action.payload.id,
          changes: {
            completed: action.payload.completed,
          },
        })
      })
      // Matchers
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading'
          state.error = null
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'error'
          state.error = action.payload || action.error
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.status = 'idle'
        },
      )
  },
})

// todo is it possible to shorten some operation?

export const todosReducer = todosSlice.reducer
