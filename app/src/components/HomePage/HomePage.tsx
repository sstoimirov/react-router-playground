import * as React from "react";
import { TextArea } from "../Forms/TextArea";
import { Select } from "../Forms/Select";
import { Input } from "../Forms/Input";
import { formsData } from "../Forms/FormsData";

export const HomePage: React.FC = () => {

    return (
        <div>
            <form>
                {formsData.map(form => {
                    if (form.type === "dropdown") {
                        return (
                            <Select
                                handleChange={() => { }}
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required}
                                val={form.options} />
                        )
                    }
                    if (form.type === "textarea") {
                        return (
                            <TextArea
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required} />
                        )
                    }
                    if (form.type === "input") {
                        return (
                            <Input
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required}
                            />
                        )
                    }
                })}
            </form>
        </div>
    )
}

export default HomePage;