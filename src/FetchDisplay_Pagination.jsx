import React, { useState, useEffect } from "react";

function FetchDisplayPagination() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 10;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const start = (currentPage - 1) * rowsPerPage;
    const currentData = data.slice(start, start + rowsPerPage);

    return (
        <div className="container mt-5">
            {data.length > 0 ? (
                <>
                    <table className="table table-bordered" border="1">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody className="border-1">
                            {currentData.map((post) => (
                                <tr className="border-1" key={post.id}>
                                    <td>{post.userId}</td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div style={{ marginTop: "10px" }}>
                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.max(p - 1, 1))
                            }
                        >
                            Previous
                        </button>

                        <span style={{ margin: "0 10px" }}>
                            Page {currentPage}
                        </span>

                        <button
                            onClick={() =>
                                setCurrentPage((p) =>
                                    start + rowsPerPage < data.length ? p + 1 : p
                                )
                            }
                        >
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default FetchDisplayPagination;
