import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { setToken } from "../../axiosInstance";

export type UserT = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string; // or "moderator", or "user"
};

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

const getPostUser = createAsyncThunk("user/getPostUser", (id: number) => {
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
    builder.addCase(loginUser.rejected, (state) => {
      state.error = "check your login / password";
    });
    builder.addCase(getUserById.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(getUserById.rejected, (state) => {
      state.userLoading = false;
      state.error = "user not found";
    });
  },
});

export { loginUser, getUserById, getPostUser };
export default userSlice.reducer;
