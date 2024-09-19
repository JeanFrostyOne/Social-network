import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

const initialState = {
  postsLoading: false,
  postsError: "",
  posts: [],
};

const getAllPosts = createAsyncThunk("posts/getAllPosts", () => {
  return axiosInstance.get(`/posts`).then((res: any) => res.data);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state, action) => {
      state.postsLoading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.postsLoading = false;
      state.postsError = "";
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.postsLoading = false;
      state.postsError = "server error";
    });
  },
});

export { getAllPosts };
export default postsSlice.reducer;
