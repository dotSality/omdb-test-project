import downArrow from "../../assets/img/down-arrow.svg";
import defaultUser from "../../assets/img/user.svg";

import s from "./User.module.scss";

export const User = () => (
  <div className={s.user}>
    <img className={s.avatar} src={defaultUser} alt="" />
    <span className={s.name}>Username</span>
    <img className={s.arrow} src={downArrow} alt="down-arrow" />
  </div>
);
