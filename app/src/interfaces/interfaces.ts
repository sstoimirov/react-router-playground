export interface TodoType {
    name: string,
    id: number,
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface TodosType {
    todos: TodoType[],
    deleteTodo: (index: number) => void
}

export interface InputProps {
    saveTodo: (value: string) => void;
}