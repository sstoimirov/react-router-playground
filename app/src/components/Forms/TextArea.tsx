import * as React from "react";

export type TextAreaProps = {
    name: string,
    placeholder: string,
    required: boolean
}
export const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, required }) => {
    return (
        <div>
            <textarea
                name="name"
                required={required}
                placeholder={placeholder}
                autoComplete="off"
            />

        </div>
    )
}

export default TextArea;