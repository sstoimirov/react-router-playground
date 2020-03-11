import * as React from "react";

export interface TodoType {
    name: string,
    id: string,
    text: string
}

function Btn() {
    let [isDone, setFinished] = React.useState(false)
    return (
        <button type="button" onClick={(e) => setFinished(() => {
            if (isDone) {
                return isDone = false
            }
            else {
                return isDone = true
            }
        })}>{isDone ? "Finished" : "Not finished"}</button>
    )
}
export const Todo: React.FunctionComponent<TodoType> = (todo) => {
    return (
        <div className="todo-wrapper">
            <div>{todo.name}</div>
            <div>{todo.text}</div>
            <Btn />
        </div>
    )
}