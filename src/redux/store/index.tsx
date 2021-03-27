import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import searchQueryReducer from '@redux-reducers/search-query'
import userListReducer from '@redux-reducers/user-list'

export const store = configureStore({
  reducer: {
    searchQuery: searchQueryReducer,
    userList: userListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>