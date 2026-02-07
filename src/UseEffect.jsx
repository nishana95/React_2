import React from "react";
import { useState, useEffect } from "react";


// data=state variable -to store fetched data
// setData=function to update the state variable"data"
// useState(null)- initializes the "data" state variable with a default value of null, indicating that no data has been fetched yet.
 // useeffect has two arguments
    // 1. callback function(arrow fn)- contains the code to perform the side effect, such as fetching data from an API or subscribing to an event.
    // 2. dependency array- specifies when the effect should be re-run. If the array is empty, the effect will only run once when the component mounts. If it contains variables, the effect will re-run whenever any of those variables change.


function DataFetcher() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
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


export default DataFetcher;