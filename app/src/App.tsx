import * as React from 'react';
import Todo from './components/Todo/Todo';
import { TodoType, TodosType } from './interfaces/interfaces';
import Input from './components/Input/Input';

const Todos: React.FC<TodosType> = (props) => {
  return (
    <div className="todos">
      {props.todos.map((todo: TodoType, index) => <Todo key={`${todo.name}__${index}`} id={index} name={todo.name} clickHandler={() => {
        props.deleteTodo(index)
      }} />)}
    </div>
  )
}

function App() {
  const [todos, updateTodos] = React.useState<TodoType[]>([])

  return (
    <div className="App">
      <Input saveTodo={(todoText) => {
        const trimmedText = todoText.trim();
        const todo = {
          name: trimmedText,
        } as TodoType

        if (trimmedText.length > 0) {
          updateTodos([...todos, todo])
        }
      }} />
      <Todos todos={todos} deleteTodo={todoIndex => {
        const newTodos = todos.filter((todo, id) => id !== todoIndex);
        updateTodos(newTodos);
      }} />
    </div>
  );
}

export default App;
