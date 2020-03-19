import * as React from "react";
interface BtnProps{
    btnText: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    isDone: boolean
}
const Btn: React.FC<BtnProps> = ({onClick, btnText, isDone}) => {
    return (
        <button disabled={isDone} className={"todo-check-btn"} type="button" onClick={onClick}>{btnText}</button>
    )
}
export default Btn