import React from "react";
import { Btn } from "../Btn/Btn";

export const Test = ({
  name,
  onClick,
  isActive,
  id,
  completed,
}: {
  name: string;
  onClick: any;
  isActive: boolean;
  id: string;
  completed: boolean;
}) => {
  return (
    <>
      {<span>Completed {completed ? "true" : "false"}</span>}
      <Btn
        id={id}
        onClick={onClick}
        clsName={"button"}
        btnText={name}
        isActive={isActive}
      />
      {isActive && <div style={{position: 'absolute', right: '50%'}}>Menu inside tab</div> }
    </>
  );
};
