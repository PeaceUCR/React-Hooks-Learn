import React, { useState } from 'react';

const ChildComponent = (props)=>{
    console.log('child run');
    const [count, setCount] = useState(props.count);
    return <h1>Child Component: {count}</h1>;
}

export default ChildComponent;
