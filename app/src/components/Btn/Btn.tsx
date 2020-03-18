import * as React from "react";

const Btn: React.FC = () => {
    let [isDone, setFinished] = React.useState(false)

    const btnInfo = isDone ? "finished" : "not-finished"
    return (
        <button className={btnInfo} type="button" onClick={() => setFinished(() => {
            if (isDone) {
                return isDone = false
            }
            else {
                return isDone = true
            }
        })}>{btnInfo}</button>
    )
}
export default Btn