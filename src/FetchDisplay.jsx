import React from "react";
import{useState, useEffect} from "react";

function FetchDisplay() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            {data && data.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(post => (
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default FetchDisplay;
