import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from "next/router";
import { login } from "./ActionCreators";

interface AuthState {
  user: IUser;
  error: string;
  isLoading: boolean;
  accessToken: string;
}

const initialState: AuthState = {
  user: {} as IUser,
  error: "",
  isLoading: false,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state, action: PayloadAction<AuthState>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.error = "";
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken);

      Router.push("/student");
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
