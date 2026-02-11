import react from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>Welcome to Home page</h1>
            <Link to="/user/1">aaaa</Link>|
            <Link to="/user/2">bbbb</Link>|
            <Link to="/user/3">cccc</Link>
        </div>
    )
}


export default Home;