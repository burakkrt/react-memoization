import {addConsoleDOM} from "./addConsoleDOM";
import {Fragment, useState} from "react";
import FormInput from "./FormInput";

export default function App() {

    const [count, setCount] = useState(0);
    addConsoleDOM("App Component Rerender", "red")

    function incrementHandle() {
        setCount(count => count + 1);
    }

    return (
        <Fragment>
            <div className="d-flex justify-content-evenly align-items-center">
                <span>Count = {count}</span>
                <button className="btn btn-secondary" onClick={incrementHandle}>Increment</button>
            </div>
            <FormInput/>
        </Fragment>
    );
}