import * as React from "react";
import { BtnType } from "../../typings/typings";

const Btn: React.FC<BtnType> = ({onClick, btnText, clsName,isDone}) => {
    return (
        <button disabled={isDone} className={clsName} type="button" onClick={onClick}>{btnText}</button>
    )
}
export default Btn