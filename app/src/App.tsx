import * as React from 'react';
import * as CMP from "./components";
import { TodoType } from './components';

interface Todos {
  todos: TodoType[]
}

const Todos: React.SFC<Todos> = (props) => {
  return (
    <div className="todos">
      {props.todos.map((todo: TodoType) => <CMP.Todo key={`{${todo.id}__${todo.name}}`} id={todo.id} name={todo.name} text={todo.text}/>)}
    </div>
  )
}

function App() {
  const todos: TodoType[] = [
    {
      id: "1",
      name: "First todo",
      text: "Text for first todo"
    },
    {
      id: "2",
      name: "Second todo",
      text: "Text for second todo"
    },
    {
      id: "3",
      name: "Third todo",
      text: "Text for third todo"
    }
  ]
  return (
    <div className="App">
      <CMP.Input />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
