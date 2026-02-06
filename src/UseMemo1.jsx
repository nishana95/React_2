import React from "react";
import { useState } from "react";
import ExpensiveCalculation from "./UseMemo.jsx";

function UseMemo1(){
    const [number, setNumber] = useState(null);
    return(
        <div>
            <input type="number" value={number} 
            onChange={(e) => setNumber(Number(e.target.value))}/>
            <ExpensiveCalculation number={number}/>
        </div>
    )
}

export default UseMemo1;