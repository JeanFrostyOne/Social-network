import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

export type PostT = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

interface initialStateI {
  postsLoading: boolean;
  postsError: string;
  posts: PostT[];
}

const initialState: initialStateI = {
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
      state.posts = action.payload.posts;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.postsLoading = false;
      state.postsError = "server error";
    });
  },
});

export { getAllPosts };
export default postsSlice.reducer;
