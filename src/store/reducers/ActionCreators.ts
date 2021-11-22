import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = "http://localhost:5000/api";

export const login = createAsyncThunk(
  "api/login",
  async (cred: ICredentials, thunkAPI) => {
    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...cred }),
      }).then((res) => res.json());

      if (response.message) {
        console.log(response.message);
        return thunkAPI.rejectWithValue(response.message);
      }

      return response as unknown;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("не удалось выполнить запрос");
    }
  }
);
