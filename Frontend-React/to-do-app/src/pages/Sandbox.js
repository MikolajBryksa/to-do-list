import React, { useState } from 'react';
import Confirm from '../layout/Confirm';
import CardList from '../layout/CardList';
import CardForm from '../layout/CardForm';

export default function Sandbox() {

    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

    const clock = () => {
        document.getElementById('clock').innerHTML = `
        ${(new Date).toLocaleTimeString()}`
    };
    setInterval(clock, 1000);

    function Button(props) {
        const handleClick = () => props.onClickFunction(props.increment);
        return (
            <button className="btn btn-primary me-1" onClick={handleClick}>+{props.increment}</button>
        )
    }
    
    function Display(props) {
        return (
            <div className="p-2">{props.message}</div>
        )
    }

    const testData = [
        {name: "Miki Bryksa",
         company: "SmartBear"}
    ];

    // state = {
    //     profiles: testData,
    // }

    return (
        <>

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow d-flex">
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={2} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Display message={counter}/>
        </div>

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow d-flex">
            <p id='clock'>Time</p>
        </div>

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <CardForm />
        <div className="d-flex">
            <CardList profiles={testData}/>
        </div>
        </div>

        </>
    )
}




