import { useAppSelector } from "../../../bll/hooks";

import s from "./SearchResult.module.scss";

export const SearchResult = () => {
  const { currentTitle, totalCount } = useAppSelector(state => state.movies);

  return (
    <div className={s.result}>
      <div>
        <b>You searched for: &quot;{currentTitle}&quot;,</b>
      </div>
      <div className={s.total}>
        <b> {totalCount} results found</b>
      </div>
    </div>
  );
};
