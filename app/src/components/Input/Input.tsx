import * as React from "react";
import { InputProps } from "../../interfaces/interfaces";

const Input: React.FC<InputProps> = ({ saveTodo }) => {
    const [value, setValue] = React.useState("");
    return (
        <div className="input-wrapper">
            <input type="text" placeholder="Enter todo..." onChange={(e) => { setValue(e.target.value) }} value={value}></input>
            <button onClick={() => {
                saveTodo(value);
                setValue("")
            }} type="submit">Submit</button>
        </div>
    )
}

export default Input