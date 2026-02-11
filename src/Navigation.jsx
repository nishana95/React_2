import React from "react";
import{ Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/ab">About</Link> |
                <Link to="/contact">Contact</Link> |
                <Link to="/dashboard">Dashboard</Link>|
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    )
}


export default Navbar;