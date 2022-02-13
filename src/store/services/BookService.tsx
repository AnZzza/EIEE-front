import { BaseQueryArg } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { API_KEY } from "../../constants";

const API_KEY = "AIzaSyB7HIY4IVVq4IbSSdjPuvLRHYmYwOawTVE";
export const bookAPI = createApi({
  reducerPath: "bookAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.googleapis.com/books/v1/volumes`,
  }),
  endpoints: (build) => ({
    fetcBooks: build.query({
      query: (bookName: string) => ({
        url: "",
        params: {
          q: bookName,
          key: API_KEY,
          maxResults: "30",
        },
      }),
    }),
  }),
});

export const { useFetcBooksQuery } = bookAPI;
