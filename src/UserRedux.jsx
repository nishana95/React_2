import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "./Redux/Action";

function UserRedux(){
    const count = useSelector((state)=>state.count)
    const dispatch= useDispatch();
    return (
    <div>
        <h1>
            Redux Counter
        </h1>
        <h2>
            {count}
        </h2>
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
    )
}

export default UserRedux;