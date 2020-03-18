import * as React from "react";
import Btn from "../Btn/Btn";
import { TodoType } from "../../interfaces/interfaces";


const Todo: React.FC<TodoType> = ({ id, name, clickHandler }) => {
    return (
        <div className="todo-wrapper">
            <div>{name}</div>
            <button className="todo-delete-btn" onClick={clickHandler}>X</button>
            <Btn />
        </div>
    )
}

export default Todo;