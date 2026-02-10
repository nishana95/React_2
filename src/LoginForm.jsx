import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameerror, setError] = useState("");
    const [passworderror, setPasswordError] = useState("");

    
    function handleChange(event) {
        setName(event.target.value);
        if (event.target.value.length < 3) {
            setError("Name must be at least 3 characters long");
        } else {
            setError("");
        }
    }


    function handlePasswordChange(event) {
        setPassword(event.target.value);
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_';?/]/;
        if (!specialCharRegex.test(event.target.value)) {
            setPasswordError("Password must contain at least one special character");
        } else {
            setPasswordError("");
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (name.length >= 3 && password.match(/[!@#$%^&*(),.?":{}|<>_';?/]/)) {
            alert(`Logged in as, ${name}!`);
        }
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="row justify-content-center">
                <h2 className="text-center mb-4">Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" value={name}
                            onChange={handleChange} className="form-control" placeholder="Enter your name"/>
                        {nameerror && <p> (<small className="text-danger">{nameerror}</small>)</p> }
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} 
                            onChange={handlePasswordChange} className="form-control" placeholder="Enter your password"/>
                        {passworderror && <p> (<small className="text-danger">{passworderror}</small>)</p> }
                    </div>

                    <div className="d-grid">
                        <button type="submit" disabled={!!nameerror || !!passworderror} className="btn btn-success">Login</button>
                    </div>
                </form>
            </div>
        </div>

    )

}




export default LoginForm;
