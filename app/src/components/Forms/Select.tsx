import * as React from "react";

export type SelectProps = {
    name: string,
    placeholder: string,
    required: boolean,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    val: string[] | undefined,
}
export const Select: React.FC<SelectProps> = ({ name, placeholder, val, required, handleChange }) => {
    return (
        <div>
            <label>{placeholder}</label>
            <select name={name} required={required} onChange={handleChange}>
                {val?.map(values => <option value={values} key={values}>{values}</option>)}
            </select>
        </div>
    )
}

export default Select;