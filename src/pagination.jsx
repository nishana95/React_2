import React from "react";
import { useState } from "react";

function Pagination(){
    const data=Array.from({length:50},(_,i)=>({
        id:i+1,
        name:`Name ${i+1}`,
        age:20+(i%10)

    }))
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const start = (currentPage -1) * rowsPerPage;
    const currentdata = data.slice(start, start + rowsPerPage);

    return(

        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {currentdata.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
        <button onClick={()=>setCurrentPage((p)=>Math.max(p-1,1))}>Previous</button>
        <button onClick={()=>setCurrentPage((p)=>p+1)}>Next</button>

    </div>
    )
}

export default Pagination;


