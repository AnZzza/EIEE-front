import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./ActionCreators";

interface AuthState {
  user: IUser;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: {} as IUser,
  error: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
