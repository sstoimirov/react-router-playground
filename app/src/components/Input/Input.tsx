import * as React from "react";

export function Input(props: any) {
    return (
        <div className="input-wrapper">
            <input type="text" value={props.text}></input>
            <button type="submit">Submit</button>
        </div>
    )
}