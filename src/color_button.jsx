import react from 'react';
import { useState } from 'react';

function ColorButton() {
    const [color, setColor] = useState('blue');
    return (
        <div>
            <p>color={color}</p>    
            <button onClick={() => setColor('red')}>Set to Red</button>
            <button onClick={() => setColor('green')}>Set to Green</button>
        </div>

    )
}   

export default ColorButton;