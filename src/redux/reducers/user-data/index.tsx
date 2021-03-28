import { INTERFACE_USER_DATA, INTERFACE_REJECT_VALUE, INTERFACE_USER_INFO } from '@helpers/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@redux-store'
import axios from 'axios';
import { GITHUB_DEVELOP_TOKEN } from '@constants';

const initialState: INTERFACE_USER_DATA = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchUserData = createAsyncThunk<
  INTERFACE_USER_INFO,
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
  >(
  'userData/fetchData',
  async (url: string, thunkApi) => {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + GITHUB_DEVELOP_TOKEN
      }
    })
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch users." 
      })
    }
    console.log(response.data)
    return response.data
    // return {
    //   "login": "Aaaaaaaty",
    //   "id": 15126694,
    //   "node_id": "MDQ6VXNlcjE1MTI2Njk0",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/15126694?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/Aaaaaaaty",
    //   "html_url": "https://github.com/Aaaaaaaty",
    //   "followers_url": "https://api.github.com/users/Aaaaaaaty/followers",
    //   "following_url": "https://api.github.com/users/Aaaaaaaty/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/Aaaaaaaty/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/Aaaaaaaty/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/Aaaaaaaty/subscriptions",
    //   "organizations_url": "https://api.github.com/users/Aaaaaaaty/orgs",
    //   "repos_url": "https://api.github.com/users/Aaaaaaaty/repos",
    //   "events_url": "https://api.github.com/users/Aaaaaaaty/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/Aaaaaaaty/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "name": "An",
    //   "company": "Alibaba",
    //   "blog": "",
    //   "location": "Hangzhou, China",
    //   "email": null,
    //   "hireable": null,
    //   "bio": "兮诀",
    //   "twitter_username": null,
    //   "public_repos": 34,
    //   "public_gists": 3,
    //   "followers": 551,
    //   "following": 1,
    //   "created_at": "2015-10-14T14:51:18Z",
    //   "updated_at": "2020-08-20T10:32:11Z"
    //   }
  }
)

export const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetUserData: (state) => {
      state.status = 'idle'
      state.error = null
      state.data = null
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.status = "loading"
      state.error = null
    });
    builder.addCase(fetchUserData.fulfilled, 
      (state, { payload }) => {
      state.data = payload
      state.status = "idle"
    });
    builder.addCase(fetchUserData.rejected, 
      (state, { payload }) => {
      if (payload) state.error = payload.message
      state.status = "idle"
    });
  }
});

export const { resetUserData } = userData.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserData = (state: RootState) => state.userData

export default userData.reducer
