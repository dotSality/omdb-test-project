import { useEffect } from "react";

import closeImage from "../../assets/img/close.svg";
import { setAppError } from "../../bll/app-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

import s from "./Error.module.scss";

export const Error = () => {
  const { error } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAppError(null));
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const onHideErrorHandler = () => dispatch(setAppError(null));

  const errorClassName = `${s.errorContainer} ${error && s.active}`;
  return (
    <div className={errorClassName}>
      <span className={s.message}>{error}</span>
      <span
        role="presentation"
        onClick={onHideErrorHandler}
        style={{ backgroundImage: `url(${closeImage})` }}
        className={s.close}
      />
    </div>
  );
};
