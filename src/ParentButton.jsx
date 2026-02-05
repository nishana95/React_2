import react from 'react';
import {useState} from "react";
import ChildButtonView from './ChildButtonView';
import ChildButtonClick from './ChildButtonClick';


function ParentButton(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <ChildButtonView count={count} setCount={setCount} />
            <ChildButtonClick count={count} setCount={setCount} />
        </div>

    )
}


export default ParentButton;