import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import searchQueryReducer from '@redux-reducers/search-query'
import userListReducer from '@redux-reducers/user-list'
import userDataReducer from '@redux-reducers/user-data'

export const store = configureStore({
  reducer: {
    searchQuery: searchQueryReducer,
    userList: userListReducer,
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>