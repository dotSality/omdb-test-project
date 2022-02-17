import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchMovies } from "./movies-slice";

type RequestStatusType = "idle" | "failed" | "succeeded" | "loading";

const slice = createSlice({
  name: "app",
  initialState: {
    isInit: false,
    status: "idle" as RequestStatusType,
    error: null as string | null,
  },
  reducers: {
    setAppStatus(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload;
    },
    setAppError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.rejected, (state, action) => {
      if (action.payload) state.error = action.payload.Error;
    });
  },
});

export const { setAppError, setAppStatus } = slice.actions;
export const appReducer = slice.reducer;
