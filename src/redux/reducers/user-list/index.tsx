import { INTERFACE_USER_LIST, INTERFACE_USER_LIST_RESPONSE, INTERFACE_REJECT_VALUE } from '@helpers/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@redux-store'
import axios from 'axios';

const initialState: INTERFACE_USER_LIST = {
  data: [],
  total: 0,
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk<
  INTERFACE_USER_LIST_RESPONSE,
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
  >(
  'userList/fetchUsers',
  async (url: string, thunkApi) => {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${process.env.REACT_APP_GITHUB_API_DEVELOP_TOKEN}`
      }
    })
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch users." 
      })
    }
    return response.data

    // return {
    //   "total_count": 5180,
    //   "incomplete_results": false,
    //   "items": [
    //   {
    //   "login": "aaaa",
    //   "id": 30540,
    //   "node_id": "MDQ6VXNlcjMwNTQw",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/30540?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/aaaa",
    //   "html_url": "https://github.com/aaaa",
    //   "followers_url": "https://api.github.com/users/aaaa/followers",
    //   "following_url": "https://api.github.com/users/aaaa/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/aaaa/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/aaaa/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/aaaa/subscriptions",
    //   "organizations_url": "https://api.github.com/users/aaaa/orgs",
    //   "repos_url": "https://api.github.com/users/aaaa/repos",
    //   "events_url": "https://api.github.com/users/aaaa/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/aaaa/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
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
    //   "score": 1.0
    //   },
    //   {
    //   "login": "Aaaaash",
    //   "id": 17701805,
    //   "node_id": "MDQ6VXNlcjE3NzAxODA1",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/17701805?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/Aaaaash",
    //   "html_url": "https://github.com/Aaaaash",
    //   "followers_url": "https://api.github.com/users/Aaaaash/followers",
    //   "following_url": "https://api.github.com/users/Aaaaash/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/Aaaaash/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/Aaaaash/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/Aaaaash/subscriptions",
    //   "organizations_url": "https://api.github.com/users/Aaaaash/orgs",
    //   "repos_url": "https://api.github.com/users/Aaaaash/repos",
    //   "events_url": "https://api.github.com/users/Aaaaash/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/Aaaaash/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "Aaaaaaron",
    //   "id": 15643702,
    //   "node_id": "MDQ6VXNlcjE1NjQzNzAy",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/15643702?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/Aaaaaaron",
    //   "html_url": "https://github.com/Aaaaaaron",
    //   "followers_url": "https://api.github.com/users/Aaaaaaron/followers",
    //   "following_url": "https://api.github.com/users/Aaaaaaron/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/Aaaaaaron/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/Aaaaaaron/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/Aaaaaaron/subscriptions",
    //   "organizations_url": "https://api.github.com/users/Aaaaaaron/orgs",
    //   "repos_url": "https://api.github.com/users/Aaaaaaron/repos",
    //   "events_url": "https://api.github.com/users/Aaaaaaron/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/Aaaaaaron/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "aaaaadrien",
    //   "id": 7746427,
    //   "node_id": "MDQ6VXNlcjc3NDY0Mjc=",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/7746427?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/aaaaadrien",
    //   "html_url": "https://github.com/aaaaadrien",
    //   "followers_url": "https://api.github.com/users/aaaaadrien/followers",
    //   "following_url": "https://api.github.com/users/aaaaadrien/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/aaaaadrien/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/aaaaadrien/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/aaaaadrien/subscriptions",
    //   "organizations_url": "https://api.github.com/users/aaaaadrien/orgs",
    //   "repos_url": "https://api.github.com/users/aaaaadrien/repos",
    //   "events_url": "https://api.github.com/users/aaaaadrien/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/aaaaadrien/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "jianjiayi",
    //   "id": 32254743,
    //   "node_id": "MDQ6VXNlcjMyMjU0NzQz",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/32254743?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/jianjiayi",
    //   "html_url": "https://github.com/jianjiayi",
    //   "followers_url": "https://api.github.com/users/jianjiayi/followers",
    //   "following_url": "https://api.github.com/users/jianjiayi/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/jianjiayi/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/jianjiayi/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/jianjiayi/subscriptions",
    //   "organizations_url": "https://api.github.com/users/jianjiayi/orgs",
    //   "repos_url": "https://api.github.com/users/jianjiayi/repos",
    //   "events_url": "https://api.github.com/users/jianjiayi/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/jianjiayi/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "AAAAAEXQOSyIpN2JZ0ehUQ",
    //   "id": 36234074,
    //   "node_id": "MDQ6VXNlcjM2MjM0MDc0",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/36234074?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ",
    //   "html_url": "https://github.com/AAAAAEXQOSyIpN2JZ0ehUQ",
    //   "followers_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/followers",
    //   "following_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/subscriptions",
    //   "organizations_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/orgs",
    //   "repos_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/repos",
    //   "events_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/AAAAAEXQOSyIpN2JZ0ehUQ/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "aaaaalbert",
    //   "id": 3806695,
    //   "node_id": "MDQ6VXNlcjM4MDY2OTU=",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/3806695?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/aaaaalbert",
    //   "html_url": "https://github.com/aaaaalbert",
    //   "followers_url": "https://api.github.com/users/aaaaalbert/followers",
    //   "following_url": "https://api.github.com/users/aaaaalbert/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/aaaaalbert/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/aaaaalbert/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/aaaaalbert/subscriptions",
    //   "organizations_url": "https://api.github.com/users/aaaaalbert/orgs",
    //   "repos_url": "https://api.github.com/users/aaaaalbert/repos",
    //   "events_url": "https://api.github.com/users/aaaaalbert/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/aaaaalbert/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "970814",
    //   "id": 19931702,
    //   "node_id": "MDQ6VXNlcjE5OTMxNzAy",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/19931702?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/970814",
    //   "html_url": "https://github.com/970814",
    //   "followers_url": "https://api.github.com/users/970814/followers",
    //   "following_url": "https://api.github.com/users/970814/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/970814/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/970814/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/970814/subscriptions",
    //   "organizations_url": "https://api.github.com/users/970814/orgs",
    //   "repos_url": "https://api.github.com/users/970814/repos",
    //   "events_url": "https://api.github.com/users/970814/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/970814/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   },
    //   {
    //   "login": "aaaandrea",
    //   "id": 24442098,
    //   "node_id": "MDQ6VXNlcjI0NDQyMDk4",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/24442098?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/aaaandrea",
    //   "html_url": "https://github.com/aaaandrea",
    //   "followers_url": "https://api.github.com/users/aaaandrea/followers",
    //   "following_url": "https://api.github.com/users/aaaandrea/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/aaaandrea/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/aaaandrea/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/aaaandrea/subscriptions",
    //   "organizations_url": "https://api.github.com/users/aaaandrea/orgs",
    //   "repos_url": "https://api.github.com/users/aaaandrea/repos",
    //   "events_url": "https://api.github.com/users/aaaandrea/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/aaaandrea/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "score": 1.0
    //   }
    //   ]
    //   }
  }
)

export const userList = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    resetUserList: (state) => {
      state.status = 'idle'
      state.error = null
      state.total = 0
      state.data = []
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading"
      state.error = null
    });
    builder.addCase(fetchUsers.fulfilled, 
      (state, { payload }) => {
      state.total = payload.total_count
      state.data = payload.items
      state.status = "idle"
    });
    builder.addCase(fetchUsers.rejected, 
      (state, { payload }) => {
      if (payload) state.error = payload.message
      state.status = "idle"
    });
  }
});

export const { resetUserList } = userList.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserList = (state: RootState) => state.userList

export default userList.reducer
