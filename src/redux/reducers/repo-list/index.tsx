import {
  INTERFACE_REPO_LIST,
  INTERFACE_REPO,
  INTERFACE_REJECT_VALUE,
} from "@helpers/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux-store";
import axios from "axios";
import { GITHUB_API_DEVELOP_TOKEN } from "@constants";

const initialState: INTERFACE_REPO_LIST = {
  data: [],
  current_page: 1,
  status: "idle",
  error: null,
};

export const fetchRepos = createAsyncThunk<
  INTERFACE_REPO[],
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
>("repoList/fetchRepos", async (url: string, thunkApi) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${GITHUB_API_DEVELOP_TOKEN}`,
    },
  });
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch users.",
    });
  }
  return response.data;
});

export const repoList = createSlice({
  name: "repoList",
  initialState,
  reducers: {
    reseRepoList: (state) => {
      state.status = "idle";
      state.error = null;
      state.current_page = 1;
      state.data = [];
    },
    setCurrentPageOfRepo: (state, action: PayloadAction<number>) => {
      state.current_page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchRepos.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });
    builder.addCase(fetchRepos.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export const { reseRepoList, setCurrentPageOfRepo } = repoList.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRepoList = (state: RootState) => state.repoList;

export default repoList.reducer;
