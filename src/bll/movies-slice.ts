import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { moviesAPI, MovieType, RejectType, ResponseType } from "../api/moviesAPI";

import { setAppError, setAppStatus } from "./app-slice";

export const fetchMovies = createAsyncThunk<
  { data: ResponseType; currentPage: number | undefined },
  { title: string; page?: number },
  {
    rejectValue: RejectType;
  }
>(
  "movies, fetchMovies",
  async (
    { title, page }: { title: string; page?: number },
    { dispatch, rejectWithValue },
  ) => {
    try {
      dispatch(setAppStatus("loading"));
      const res = await moviesAPI.getMovies(title, page);
      if (res.data.Response === "True") {
        dispatch(setAppStatus("succeeded"));
        return { data: res.data, currentPage: page };
      }
      dispatch(setAppStatus("failed"));
      return rejectWithValue({
        Error: res.data.Error === "Incorrect IMDb ID." ? "Enter title" : res.data.Error,
        Response: res.data.Response,
      });
    } catch (e: any) {
      setAppStatus("failed");
      dispatch(setAppError(e.message));
      return rejectWithValue(e.message);
    }
  },
);

const slice = createSlice({
  name: "movies",
  initialState: {
    movies: null as MovieType[] | null,
    currentPage: 1,
    totalCount: 0,
    currentTitle: null as string | null,
    isLoaded: false,
  },
  reducers: {
    setCurrentTitle(state, action: PayloadAction<string>) {
      state.currentTitle = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.isLoaded = false;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.data.Search;
      state.totalCount = +action.payload.data.totalResults;
      if (action.payload.currentPage) {
        state.currentPage = +action.payload.currentPage;
      } else {
        state.currentPage = 1;
      }
      state.isLoaded = true;
    });
  },
});

export const { setCurrentTitle } = slice.actions;
export const moviesReducer = slice.reducer;
