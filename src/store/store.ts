import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import { bookAPI } from "./services/BookService";

const rootReducer = combineReducers({
  // userReducer,
  authReducer,
  [bookAPI.reducerPath]: bookAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bookAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
