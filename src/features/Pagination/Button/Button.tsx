import s from "./Button.module.scss";

type PropsType = {
  onPageChange: (page: number) => void;
  isActive: boolean;
  page: number;
};

export const Button = ({ page, isActive, onPageChange }: PropsType) => {
  const buttonClassName = `${s.button} ${isActive ? s.active : ""}`;
  const onPageChangeHandler = () => onPageChange(page);

  return (
    <div role="presentation" onClick={onPageChangeHandler} className={buttonClassName}>
      {page}
    </div>
  );
};
