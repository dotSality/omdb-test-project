import { useState } from "react";

import { useAppDispatch } from "../../bll/hooks";
import { fetchMovies, setCurrentTitle } from "../../bll/movies-slice";
import { Error } from "../Error";
import { Input } from "../Input";
import { User } from "../User/User";

import s from "./Header.module.scss";

export const Header = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const onEnterPressHandler = (title: string) => {
    dispatch(fetchMovies({ title }));
    dispatch(setCurrentTitle(title));
  };

  return (
    <div className={s.headerContainer}>
      <span className={s.name}>Movie catalog</span>
      <Input
        onEnterPressCallback={onEnterPressHandler}
        value={value}
        setValue={setValue}
      />
      <User />
      <Error />
    </div>
  );
};
