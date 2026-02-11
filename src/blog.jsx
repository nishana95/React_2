import React from "react";
import {Link, Outlet} from "react-router-dom";

function Blog() {
    return (
        <div>
            <h1>
                Blog Post
            </h1>
            <ul>
                <li><Link to="1">Post 1</Link> </li>
                <li><Link to="2">Post 2</Link></li>
                <li><Link to="3">Post 3</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Blog;