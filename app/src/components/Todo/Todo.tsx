import React, { useState, useRef } from "react";
import { Btn } from "../Btn/Btn";
import { TodoType } from "../../typings/typings";

export const Todo: React.FC<TodoType> = ({ id, name, deleteHandler }) => {
    let [isDone, setFinished] = useState(false);
    const [isEdit, updateEdit] = useState(false);
    const [value, updateValue] = useState(name)
    const clsName = isDone ? "todo-wrapper todo-wrapper-finished" : "todo-wrapper";
    const inputRef = useRef<HTMLInputElement>(null)

    const renderEditedTodo = () => {
        return <div>
            <input type="text" defaultValue={value} ref={inputRef}></input>
            <Btn clsName="todo-update-value-btn" btnText="Save" onClick={() => updateValue(() => {
                updateEdit(false);
                if (inputRef.current) {
                    return inputRef.current.value !== '' ?
                        inputRef.current.value : value
                }
                return value

            })} />
            <Btn clsName="todo-close-edit-btn" btnText="Close" onClick={() => updateEdit(false)} />
        </div>
    }
    return (
        <div className={clsName} id={id}>
            {isEdit ? renderEditedTodo() : <div className="todo-text">{value}</div>}
            <Btn clsName="todo-delete-btn" btnText="X" onClick={deleteHandler} />
            <Btn
                clsName="todo-check-btn"
                btnText={isDone ? "Completed" : "Not Completed"}
                onClick={() => setFinished(!isDone)}
                isDone={isDone}
            />
            <Btn
                btnText="Edit"
                clsName="todo-edit-btn"
                onClick={() => updateEdit(!isEdit)}
            />
        </div>
    )
}