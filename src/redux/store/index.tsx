import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import searchQueryReducer from '@redux-reducers/search-query'

export const store = configureStore({
  reducer: {
    searchQuery: searchQueryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>