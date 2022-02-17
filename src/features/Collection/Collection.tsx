import { useAppSelector } from "../../bll/hooks";
import { Pagination } from "../Pagination";

import s from "./Collection.module.scss";
import { Movie } from "./Movie/Movie";
import { SearchResult } from "./SearchResult/SearchResult";

export const Collection = () => {
  const { movies } = useAppSelector(state => state.movies);

  const mappedMovies = movies?.map(el => <Movie key={el.imdbID} {...el} />);

  return (
    <div className={s.collectionContainer}>
      <SearchResult />
      <div className={s.moviesContainer}>{mappedMovies}</div>
      <Pagination />
    </div>
  );
};
