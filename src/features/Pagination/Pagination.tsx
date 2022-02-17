import { useAppDispatch, useAppSelector } from "../../bll/hooks";
import { fetchMovies } from "../../bll/movies-slice";

import { Button } from "./Button/Button";
import s from "./Pagination.module.scss";

export const Pagination = () => {
  const { currentPage, totalCount, currentTitle } = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  const pages = [] as number[];
  const onPageCount = 10;
  const pagesCount = Math.ceil(totalCount! / onPageCount);
  const onPageChange = (page: number) => {
    dispatch(fetchMovies({ title: currentTitle!, page }));
  };
  const onFirstPageChange = () => {
    dispatch(fetchMovies({ title: currentTitle!, page: 1 }));
  };
  const onLastPageChange = () => {
    dispatch(fetchMovies({ title: currentTitle!, page: pagesCount }));
  };
  if (currentPage <= 4) {
    for (let i = 1; i <= 5; i += 1) {
      pages.push(i);
    }
    return (
      <div className={s.pagination}>
        {pages.map(page => (
          <Button
            key={page}
            onPageChange={onPageChange}
            isActive={currentPage === page}
            page={page}
          />
        ))}
        <div className={s.more}>...</div>
        <Button onPageChange={onLastPageChange} isActive={false} page={pagesCount} />
      </div>
    );
  }
  if (currentPage <= pagesCount - 4) {
    for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
      pages.push(i);
    }
    return (
      <div className={s.pagination}>
        <Button onPageChange={onPageChange} isActive={false} page={1} />
        <div className={s.more}>...</div>
        {pages.map(page => (
          <Button
            key={page}
            onPageChange={onPageChange}
            isActive={currentPage === page}
            page={page}
          />
        ))}
        <div className={s.more}>...</div>
        <Button onPageChange={onPageChange} isActive={false} page={pagesCount} />
      </div>
    );
  }
  for (let i = pagesCount - 4; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  return (
    <div className={s.pagination}>
      <Button onPageChange={onFirstPageChange} isActive={false} page={1} />
      <div className={s.more}>...</div>
      {pages.map(page => (
        <Button
          key={page}
          onPageChange={onPageChange}
          isActive={currentPage === page}
          page={page}
        />
      ))}
    </div>
  );
};
