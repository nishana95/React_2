import React from "react";
import { useState, useEffect } from "react";

function UseEffect() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response)=> response.json())
        .then((data)=> setData(data))
    }, []);

    return(
        <div>
            <h1>UseEffect</h1>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
    
}


export default UseEffect;