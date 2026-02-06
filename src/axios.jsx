import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserList(){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => setUsers(response.data))
    }, []);

    return(
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;