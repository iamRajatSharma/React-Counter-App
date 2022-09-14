import { useState } from "react";

function Counter() {

    const [value, updatedValue] = useState(0);


    return (
        <>
            <div style={{ width: "100%", padding: "25px 0px" }}>
                <h2 style={{ fontSize: "56px" }}>{value}</h2>
                <button style={{ padding: "25px", fontSize: "26px", backgroundColor: "gray" }} onClick={() => { updatedValue(value + 1) }}>Increase Value</button>
                <button style={{ padding: "25px", fontSize: "26px", backgroundColor: "gray" }} onClick={() => { updatedValue(value - 1) }}>Decrease Value</button><br />
                <button style={{ padding: "25px", fontSize: "26px", backgroundColor: "gray" }} onClick={() => { updatedValue(0) }}>Reset</button>
            </div>
        </>
    )
}
export default Counter;