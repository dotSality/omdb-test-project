import { configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./app-slice";
import { moviesReducer } from "./movies-slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    movies: moviesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
