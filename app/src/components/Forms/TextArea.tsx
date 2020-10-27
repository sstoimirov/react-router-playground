import React from "react";

type TextAreaProps = {
    label: string,
    isRequired: boolean
}
export const TextArea: React.FC<TextAreaProps> = ({ label, isRequired }) => {
    return (
        <div>
            <textarea
                name="name"
                required={isRequired}
                placeholder={label}
                autoComplete="off"
            />

        </div>
    )
}