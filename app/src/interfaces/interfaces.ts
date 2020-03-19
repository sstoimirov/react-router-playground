export interface TodoType {
    name: string,
    id: string,
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface TodosType {
    todos: TodoType[],
    deleteTodo: (index: number) => void
}

export interface InputProps {
    saveTodo: (value: string) => void;
}