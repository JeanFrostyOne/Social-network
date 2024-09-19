import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { setToken } from "../../axiosInstance";

const initialState = {
  currentUser: null,
  user: null,
  userLoading: false,
  error: "",
};

const loginUser = createAsyncThunk("user/loginUser", (data: any) => {
  return axiosInstance.post(`/auth/login`, data).then((res: any) => res.data);
});

const getUserById = createAsyncThunk("user/getUserById", (id) => {
  return axiosInstance.get(`/users/${id}`).then((res: any) => res.data);
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.error = "";
      state.currentUser = action.payload;
      setToken(action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = "check your login / password";
    });
    builder.addCase(getUserById.pending, (state, action) => {
      state.userLoading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.userLoading = false;
      state.error = "user not found";
    });
  },
});

export { loginUser, getUserById };
export default userSlice.reducer;
