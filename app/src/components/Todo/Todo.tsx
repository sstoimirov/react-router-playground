import * as React from "react";
import Btn from "../Btn/Btn";
import { TodoType } from "../../typings/typings";

const Todo: React.FC<TodoType> = ({ id, name, deleteHandler }) => {
    let [isDone, setFinished] = React.useState(false);
    let [isEdit, updateEdit] = React.useState(false);
    let [value, updateValue] = React.useState(name)
    const clsName = isDone ? "todo-wrapper todo-wrapper-finished" : "todo-wrapper";
    const inputRef: any = React.useRef<HTMLInputElement>(null)

    const renderEditedTodo = () => {
        return <div>
            <input type="text" defaultValue={value} ref={inputRef}></input>
            <button onClick={() => updateValue(() => {
                updateEdit(false)
                return value = inputRef.current.value;
            })}>OK</button>
            <button onClick={()=>updateEdit(false)}>X</button>
        </div>
    }
    return (
        <div className={clsName} id={id}>
            {isEdit ? renderEditedTodo() : <div className="todo-text">{value}</div>}
            <button className="todo-delete-btn" onClick={deleteHandler}>X</button>
            <Btn
                btnText={isDone ? "Completed" : "Not Completed"}
                onClick={() => setFinished(() => { return isDone = !isDone })}
                isDone={isDone} />
            <button
                onClick={() => updateEdit(() => {
                    return isEdit = !isEdit
                })}>Edit
            </button>
        </div>
    )
}

export default Todo;