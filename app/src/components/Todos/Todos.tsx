import * as React from "react";
import * as  uuid from "uuid";

import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import { TodoType } from "../../typings/typings";

const Todos: React.FC = () => {
    const [todos, updateTodos] = React.useState<TodoType[]>([]);

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        updateTodos(newTodos);
    }

    return (
        <div className="todo-app">
            <Input saveTodo={(todoText) => {
                const trimmedText = todoText.trim();
                const todo = {
                    name: trimmedText,
                    id: uuid.v4()
                } as TodoType

                if (trimmedText.length > 0) {
                    updateTodos([...todos, todo])
                }
            }} />

            <div className="todos">
                {todos.map((todo: TodoType, index) =>
                    <Todo
                        key={`${todo.name}__${index}`}
                        id={todo.id}
                        name={todo.name}
                        deleteHandler={() => removeTodo(index)
                            // {
                            //     const newTodos = todos.filter((_, id) => id !== index)
                            //     updateTodos(newTodos)
                            // }
                        } />
                )}
            </div>
        </div>

    )
}
export default Todos