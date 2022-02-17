import React, { KeyboardEvent, ChangeEvent, useEffect, useState } from "react";

import clearIcon from "../../assets/img/remove.svg";
import searchIcon from "../../assets/img/search.svg";

import s from "./Input.module.scss";

type PropsType = {
  value: string;
  setValue: (value: string) => void;
  onEnterPressCallback: (title: string) => void;
};

export const Input = ({ value, setValue, onEnterPressCallback }: PropsType) => {
  const [showIcon, setShowIcon] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [value]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);
  const onClearValueCallback = () => setValue("");
  const clearIconClassName = `${s.clearIcon} ${showIcon ? s.active : ""}`;

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnterPressCallback(value);
    }
  };

  return (
    <div className={s.inputContainer}>
      <img className={s.searchIcon} src={searchIcon} alt="search-icon" />
      <input
        onKeyPress={onKeyPressCallback}
        placeholder="Enter title"
        className={s.input}
        value={value}
        onChange={onChangeHandler}
        type="text"
      />
      <img
        role="presentation"
        onClick={onClearValueCallback}
        className={clearIconClassName}
        src={clearIcon}
        alt="delete-icon"
      />
    </div>
  );
};
