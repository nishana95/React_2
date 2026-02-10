import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
    
    const [name, setName] = useState("");
    const[error, setError] = useState("");

    function handleChange(event) {
        setName(event.target.value);
        if(event.target.value.length < 3){
            setError("Name must be at least 3 characters long");
        } else {
            setError("");
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(name.length >= 3){
            alert(`Hello, ${name}!`);
        } 
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text"  value={name} onChange={handleChange} className="form-control"/>
            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit" disabled={!!error} className="btn btn-success">Submit</button>
             </form>    
    )

}

export default Form;