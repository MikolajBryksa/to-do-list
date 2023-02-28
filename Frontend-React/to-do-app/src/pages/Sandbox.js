import React, { useState } from 'react';


export default function Sandbox() {

    const [counter, setCounter] = useState(5);
    const handleClick = () => setCounter(counter+1);

    return (

        <div className='container'>
            
            <button onClick={handleClick}>
                {counter}
            </button>

        </div>
    )
}
