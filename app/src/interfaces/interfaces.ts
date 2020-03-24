export type TodoType = {
    name: string,
    id: string,
    deleteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type TodosType = {
    todos: TodoType[],
    deleteTodo: (index: number) => void
}

export type InputProps= {
    saveTodo: (value: string) => void;
}

export type BtnType= {
    btnText: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isDone: boolean
}

export type UserType ={
    id: string,
    name: string,
    email: string
}