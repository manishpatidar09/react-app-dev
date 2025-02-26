import React, { useState } from 'react'
import B from './B';

export default function A({name}) {
    const [salary, setSalary] = useState(50000);
    function Increment()
    {
        setSalary(salary + 60000);
    }
    return (
    <>
    <button onClick={ ()=>{Increment(); } }>Increment</button>
    <h2>Hi, I am a Car! {salary}</h2>
    <B/>
    </>
    );
}