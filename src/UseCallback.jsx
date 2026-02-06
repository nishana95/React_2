import React from "react";
import { useState ,useCallback} from "react";

function UseCallback({increment}){
    console.log("Rendered");
    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )

}

export default UseCallback;