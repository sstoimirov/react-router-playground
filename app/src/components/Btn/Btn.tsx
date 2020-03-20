import * as React from "react";
import { BtnType } from "../../interfaces/interfaces";

const Btn: React.FC<BtnType> = ({onClick, btnText, isDone}) => {
    return (
        <button disabled={isDone} className={"todo-check-btn"} type="button" onClick={onClick}>{btnText}</button>
    )
}
export default Btn