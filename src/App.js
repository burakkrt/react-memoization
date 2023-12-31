import {addConsoleDOM} from "./addConsoleDOM";
import {useState} from "react";
import FormInput from "./FormInput";

export default function App() {

    const [count, setCount] = useState(0);
    addConsoleDOM("App Component Rerender")

    function incrementHandle() {
        setCount(count => count + 1);
    }

    return (
        <div className="p-2" style={{border: "2px solid brown"}}>
            <h1 className="fs-4">App Component</h1>
            <div className="d-flex justify-content-evenly align-items-center my-4">
                <span>Count = {count}</span>
                <button className="btn btn-secondary" onClick={incrementHandle}>Increment</button>
            </div>
            <FormInput/>
        </div>
    );
}