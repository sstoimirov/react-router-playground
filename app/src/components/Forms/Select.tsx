import React from "react";

export type SelectProps = {
    label: string,
    isRequired: boolean,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    options?: string[]
}
export const Select: React.FC<SelectProps> = ({ label, options, isRequired, handleChange }) => {
    return (
        <div>
            <label>{label}</label>
            <select required={isRequired} onChange={handleChange}>
                {options?.map(values => <option value={values}>{values}</option>)}
            </select>
        </div>
    )
}