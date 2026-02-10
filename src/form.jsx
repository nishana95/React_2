import React from "react";
import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert(`Hello, ${name}!`);
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text"  value={name} onChange={handleChange}/>
            <button type="submit">Submit</button>
             </form>
    )
}



export default Form;