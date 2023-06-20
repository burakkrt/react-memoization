import {useState} from "react";
import {addConsoleDOM} from "./addConsoleDOM";

export default function FormInput() {

    const [input, setInput] = useState("");
    addConsoleDOM(`formInput Component Rerender`, "green");

    return (
        <div className="border border-2 p-3 text-center mt-4">
            <label>
                <input type="text" className="form-control" placeholder="Add Value" value={input}
                       onChange={(e) => setInput(e.currentTarget.value)}/>
            </label>
        </div>
    );
}