import React from "react";
import { BtnType } from "../../typings/typings";

export const Btn: React.FC<BtnType> = ({
  onClick,
  btnText,
  clsName,
  isDone,
  isActive,
  id
}) => {
  return (
    <button
      id={id}
      disabled={isDone}
      className={`${clsName} ${isActive && "active"}`}
      type="button"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};
