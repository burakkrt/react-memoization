import {useState} from "react";
import {addConsoleDOM} from "./addConsoleDOM";

export default function FormInput() {

    const [input, setInput] = useState("");
    addConsoleDOM(`formInput Component Rerender`);

    return (
        <div className="my-4 d-flex flex-row align-items-center justify-content-evenly">
            <label htmlFor="input">Input :</label>
            <input type="text" id="input" className="" placeholder="Add Value" value={input}
                   onChange={(e) => setInput(e.currentTarget.value)}/>
        </div>
    );
}