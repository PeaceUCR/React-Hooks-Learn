import React from 'react';
// import ClassParentComponent from './liftcycle/ClassParentComponent'
import {default as UseStateParentComponent} from "./hook/useState/ParentComponent";
import {default as UseEffectParentComponent} from "./hook/useEffect/ParentComponent";

function App() {
  return (
    <div>
        <h1>useState</h1>
        <UseStateParentComponent />
        <h1>useEffect</h1>
        <UseEffectParentComponent/>
    </div>
  );
}

export default App;
