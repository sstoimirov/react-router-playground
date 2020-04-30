import * as React from "react";

export type InputProps = {
    name: string,
    placeholder: string,
    required: boolean
}
export const Input: React.FC<InputProps> = ({ name, placeholder, required }) => {
    return (
        <div>
            <input
                type="text"
                name={name}
                required={required}
                placeholder={placeholder}
                autoComplete="off" />
        </div>
    )
}

export default InputProps;