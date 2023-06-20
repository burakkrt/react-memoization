import {useState} from "react";
import {MemoAddConsoleDOM} from "./MemoAddConsoleDOM";
import MemoFormInput from "./MemoFormInput";

export default function MemoApp() {

    const [count, setCount] = useState(0);
    MemoAddConsoleDOM("MemoApp Component Rerender")

    function incrementHandle() {
        setCount(count => count + 1);
    }

    return (
        <div className="p-2 mt-4" style={{border: "2px solid green"}}>
            <h1 className="fs-4">MemoApp Component</h1>
            <div className="d-flex justify-content-evenly align-items-center my-4">
                <span>Count = {count}</span>
                <button className="btn btn-secondary" onClick={incrementHandle}>Increment</button>
            </div>
            <MemoFormInput/>
        </div>
    );
}