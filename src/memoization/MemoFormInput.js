import {memo, useState} from "react";
import {MemoAddConsoleDOM} from "./MemoAddConsoleDOM";

function MemoFormInput() {

    const [input, setInput] = useState("");
    MemoAddConsoleDOM(`MemoFormInput Component Rerender`);


    return (
        <div className="my-4 d-flex flex-row align-items-center justify-content-evenly">
            <label htmlFor="input">Input :</label>
            <input type="text" id="input" className="" placeholder="Add Value" value={input}
                   onChange={(e) => setInput(e.currentTarget.value)}/>
        </div>
    );
}

export default memo(MemoFormInput);