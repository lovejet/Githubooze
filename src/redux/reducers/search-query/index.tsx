import { INTERFACE_SEARCH_QUERY, INTERFACE_SORT_OPTIONS } from '@helpers/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@redux-store'

const initialState: INTERFACE_SEARCH_QUERY = {
  q: '',
  sortOptions: {
    index: 0,
    key: 'Best match',
    o: 'desc',
    s: '',
  },
  itemsPerPage: 10,
  currentPage: 1,
};

export const searchQuery = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.q = action.payload
    },
    setSortOptions: (state, action: PayloadAction<INTERFACE_SORT_OPTIONS>) => {
      state.sortOptions = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
});

export const { setQuery, setSortOptions, setItemsPerPage, setCurrentPage } = searchQuery.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSearchQuery = (state: RootState) => state.searchQuery

export default searchQuery.reducer
