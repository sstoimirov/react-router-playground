export interface TodoType {
    name: string,
    id: string,
    deleteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface TodosType {
    todos: TodoType[],
    deleteTodo: (index: number) => void
}

export interface InputProps {
    saveTodo: (value: string) => void;
}

export interface BtnType{
    btnText: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    isDone: boolean
}

export interface User {
    id: string,
    name: string,
    email: string
}