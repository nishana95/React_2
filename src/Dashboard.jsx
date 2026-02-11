import React from "react";  
import {Link,Outlet} from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>Welcome to Dashboard page</h1>
            <nav>
                <Link to="settings">Settings</Link> |
                <Link to="profile">Profile</Link>
            </nav>

            <Outlet />
        </div>
    )
}


export default Dashboard;