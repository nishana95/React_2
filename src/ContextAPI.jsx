import React from "react";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();
function ContextAPI() {
    const [user, setUser] = useState("Oneteam")
    return(
        <UserContext.Provider value={user}>
        <Header/>
        </UserContext.Provider>
    );
}

function Header(){
    const user = useContext(UserContext)
    return(
    <h2>User value from context {user}</h2>
    )
}




export default ContextAPI;


