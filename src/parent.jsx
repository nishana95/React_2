import React from "react";
import { useState } from "react";
import ChildInput from "./child_input";
import ChildDisplay from "./child_display";

function ParentComponent(){
    const[value,setValue]=useState("")

    return(
        <div>
            <ChildInput value={value} setValue={setValue}/>
            <ChildDisplay value={value}/>
        </div>
    )
}

export default ParentComponent;