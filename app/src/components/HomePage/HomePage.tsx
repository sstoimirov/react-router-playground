import React from "react";
import { TextArea } from "../Forms/TextArea";
import { Select } from "../Forms/Select";
import { Input } from "../Forms/Input";
import { fields } from "../Forms/FormsData";

export const HomePage: React.FC = () => {

    return (
        <div>
            <form>
                {fields.map(form => { 
                    if (form.type === "dropdown") {
                        return (
                            <Select
                                handleChange={() => { }}
                                label={form.label}
                                isRequired={form.isRequired}
                                options={form.options} />
                        )
                    }
                    if (form.type === "textarea") {
                        return (
                            <TextArea
                                label={form.label}
                                isRequired={form.isRequired} />
                        )
                    }
                    if (form.type === "input") {
                        return (
                            <Input
                                label={form.label}
                                isRequired={form.isRequired}
                            />
                        )
                    }
                    else {
                        return ""
                    }
                })}
            </form>
        </div>
    )
}