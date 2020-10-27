import React from "react";

type InputProps = {
    label: string,
    isRequired: boolean
}
export const Input: React.FC<InputProps> = ({ label, isRequired }) => {
    return (
        <div>
            <input
                type="text"
                required={isRequired}
                placeholder={label}
                autoComplete="off" />
        </div>
    )
}