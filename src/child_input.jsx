import React from "react";

function childInput({value,setValue}) {
    return(
        <div>
            <form action="">
                <input type="text" value={value} 
                onChange={(e)=> setValue(e.target.value)}/>
            </form>
        </div>
        
    )
}

export default childInput;