import React, { useState, useEffect } from 'react';

const ChildComponent = (props)=>{
    // use effect default run after every render
    useEffect(() => {
        console.log('use effect');
        return () => {
            // return run every JUST before NEXT 'use effect'
            console.log('use effect return');
        }
    })

    // use effect only run once, like componentDidMount
    // useEffect(() => {
    //     console.log('use effect once');
    // }, [])

    const [count, setCount] = useState(0);
    // use effect run only count changes
    // useEffect(() => {
    //     console.log('use effect on count changes');
    // }, [count])
    console.log('child run');
    return <h1 onClick={()=>{setCount(count+1)}}>Child Component: {count}</h1>;
}

export default ChildComponent;
