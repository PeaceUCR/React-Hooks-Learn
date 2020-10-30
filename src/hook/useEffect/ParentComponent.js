import React, { useState } from 'react';
import ChildComponent from './ChildComponent'

const ParentComponent = ()=>{
    console.log('parent run');
    const [count, setCount] = useState(0);// state init value must be constant, dynamic not work(just like in Child)
    return <div>
        <h1 onClick={() => setCount(count+1)}>Parent Component: click {count} times</h1>
        <ChildComponent count={count}/>
    </div>;
}

export default ParentComponent;
