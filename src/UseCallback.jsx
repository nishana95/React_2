import React from "react";
import { useState, useCallback } from "react";

function UseCallback({ increment }) {
    console.log("Rendered");
    return (
        <div>
            <button style={{ backgroundColor: "lightblue" }}
                onClick={increment}>Increment</button>
        </div>
    )

}

export default UseCallback;