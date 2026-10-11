import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: 'all',
  reducers: {
    setFilter: (state, action) => {
      return action.payload
    },
  },
  selectors: {
    selectActiveFilter: (state) => state,
  },
})

export const { setFilter } = filtersSlice.actions

export const filterReducer = filtersSlice.reducer
export const { selectActiveFilter } = filtersSlice.selectors

// export const selectActiveFilter = (state) => state.filters
