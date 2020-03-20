import * as React from "react";
import Btn from "../Btn/Btn";
import { TodoType } from "../../interfaces/interfaces";

const Todo: React.FC<TodoType> = ({ id, name, deleteHandler }) => {
    let [isDone, setFinished] = React.useState(false)
    const clsName = isDone ? "todo-wrapper todo-wrapper-finished" : "todo-wrapper"
    return (
        <div className={clsName} id={id.toString()}>
            <div className="todo-text">{name}</div>
            <button className="todo-delete-btn" onClick={deleteHandler}>X</button>
            <Btn
                btnText={isDone ? "Completed" : "Not Completed"}
                onClick={() => setFinished(() => {
                    if (isDone) {
                        return isDone = false
                    }
                    else {
                        return isDone = true
                    }
                })}
                isDone={isDone} />
        </div>
    )
}

export default Todo;