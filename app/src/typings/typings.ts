export type TodoType = {
    name: string,
    id: string,
    deleteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type InputType= {
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