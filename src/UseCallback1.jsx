import React from "react";
import { useState, useCallback } from "react";
import UseCallback from "./UseCallback";


function UseCallback1(){
    const [count, setCount] = useState(0);
    const increment=useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);//empty dependency array means the function will be memoized and won't change on re-renders.

    return(
        <div>
            <h1>Count: {count}</h1>
            <UseCallback increment={increment}/>
        </div>
    )
}

export default UseCallback1;





