import { MovieType } from "../../../api/moviesAPI";
import noPosterImage from "../../../assets/img/default-poster.jpg";

import s from "./Movie.module.scss";

export const Movie = ({ Type, imdbID, Year, Title, Poster }: MovieType) => {
  const posterImage = Poster !== "N/A" ? Poster : noPosterImage;

  return (
    <div className={s.movieContainer}>
      <div style={{ backgroundImage: `url(${posterImage})` }} className={s.poster} />
      <div className={s.contentContainer}>
        <span className={s.title}>
          <b>{Title}</b>
        </span>
        <span>
          <b>Year: </b>
          {Year}
        </span>
        <span>
          <b>Type: </b>
          {Type}
        </span>
        <span>
          <b>ID: </b>
          {imdbID}
        </span>
      </div>
    </div>
  );
};
