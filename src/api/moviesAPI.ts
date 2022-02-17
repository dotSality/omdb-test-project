import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com",
});
const apikey: string = "2d429144";

export const moviesAPI = {
  getMovies(title: string, page = 1) {
    return instance.get<ResponseType & RejectType>(
      `?s=${title}&page=${page}&apikey=${apikey}`,
    );
  },
};

export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: "N/A" | string;
};

export type ResponseType = {
  Search: MovieType[];
  totalResults: string;
  Response: "True" | "False";
};

export type RejectType = {
  Error: string;
  Response: string;
};
