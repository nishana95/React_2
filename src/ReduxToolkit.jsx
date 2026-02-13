import {useSelector,useDispatch} from "react-redux";
import { increment,decrement,reset } from "./ReduxToolkit/CounterSlice";

function Counter(){
    const count = useSelector((state)=>state.counter.value)
    const despatch = useDispatch()
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>despatch(increment())}>INCREMENT</button>
            <button onClick={()=>despatch(decrement())}>DECREMENT</button>
            <button onClick={()=>despatch(reset())}>RESET</button>
        </div>
    )
}


export default Counter;

