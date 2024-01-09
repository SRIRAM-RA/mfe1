import React,{useState} from "react";
import ReactDOM from "react-dom";
import { CopyBlock, dracula } from 'react-code-blocks';


import "./index.css";

const App = () => {

  const [useStateCode, setuseStateCode] = useState("import React, { useState } from 'react'; \n const Counter = () => { \n \t  const [count, setCount] = useState(0); \n    return ( \n \t   <div>\n \t      <p>Count: {count}</p> \n \t      <button onClick={() => setCount(count + 1)}>Increment</button> \n \t  </div> \n \t  ); \n };");
  const [useEffectCode, setuseEffectCode] = useState("import { useState, useEffect } from 'react'; \n \n function HookCounterOne() { \n \t  const [count, setCount] = useState(0); \n \t  useEffect(() => { \n \t     document.title = `You clicked ${count} times`; \n \t  }, [count]); \n \t   return ( \n \t    <div> \n \t      <button onClick={() => setCount((prevCount) => prevCount + 1)}> Click {count} times{' '}</button> \n \t    </div> \n \t ); \n } \n \n export default HookCounterOne;"); 
  const [useContextCode, setuseContextCode] = useState("// App.js \n import React, { createContext, useContext, useState } from 'react'; \n \n // Step 1: Create a context \n const MyContext = createContext(); \n \n // Step 2: Create a provider component \n const MyProvider = ({ children }) => { \n    const [value, setValue] = useState('Hello from Context!'); \n    return ( \n \t<MyContext.Provider value={value}> \n \t  {children} \n \t</MyContext.Provider> \n    ); \n }; \n \n // Step 3: Create a component that consumes the context using useContext \n const MyComponent = () => { \n    const contextValue = useContext(MyContext); \n    return ( \n \t<div> \n  \t  <h2>Component using useContext</h2> \n \t  <p>{contextValue}</p> \n \t</div> \n    ); \n }; \n \n // Step 4: Use the MyProvider to wrap your application \n const App = () => { \n    return ( \n      <MyProvider> \n \t <div> \n \t    <h1>My App</h1> \n \t    <MyComponent /> \n \t </div> \n     </MyProvider> \n   ); \n }; \n\n export default App;")
  const [useReducerCode, setuseReducerCode] = useState("import React, { useReducer } from 'react'; \n \n const initialState = { count: 0 }; \n \n const reducer = (state, action) => { \n switch (action.type) { \n case 'increment': \n return { count: state.count + 1 }; \n default: \n return state; \n } \n }; \n \n const Counter = () => { \n const [state, dispatch] = useReducer(reducer, initialState); \n return ( \n <div> \n <p>Count: {state.count}</p> \n <button onClick={() => dispatch({ type: 'increment' })}>Increment</button> \n </div> \n ); \n};");

  return(
  <div className="container">
    <div className="div-conponentbox">
      <h1>Hooks</h1>
      <div>
          <p>React Hooks are functions that enable functional components to use state, lifecycle methods, and other React features that were previously only available in class components. Some of the commonly used React Hooks are:</p>
          <ul>
            <li className="italicText">useState</li>
            <li className="italicText">useEffect</li>
            <li className="italicText">useContext</li>
            <li className="italicText">useReducer</li>
            <li className="italicText">useCallback & useMemo</li>
            <li className="italicText">Custom Hooks</li>
          </ul>
          <div>
            <p> <b>useState: </b></p>
            <ul>
              <li>Allows functional components to have local state.</li>
              
              <li><CopyBlock
              text={useStateCode}
              language="jsx"
              showLineNumbers={true} // Set to true if you want to display line numbers
              theme={dracula}
              /></li>
            </ul>
            <p> <b>useEffect: </b></p>
            <ul>
              <li>Enables performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.</li>
              <li>Mimics the behavior of componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</li>
              <li><CopyBlock
              text={useEffectCode}
              language="jsx"
              showLineNumbers={true} // Set to true if you want to display line numbers
              theme={dracula}
              /></li>
            </ul>
            <p> <b>useContext: </b></p>
            <ul>
              <li>Allows functional components to subscribe to a React context without introducing nesting.</li>
              <li> It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes).</li>
              <li><CopyBlock
              text={useContextCode}
              language="jsx"
              showLineNumbers={true} // Set to true if you want to display line numbers
              theme={dracula}
              /></li>
            </ul>
            <p> <b>useReducer: </b></p>
            <ul>
              <li>Allows functional components to subscribe to a React context without introducing nesting.</li>
              <li> It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes).</li>
              <li><CopyBlock
              text={useReducerCode}
              language="jsx"
              showLineNumbers={true} // Set to true if you want to display line numbers
              theme={dracula}
              /></li>
            </ul>
          </div>
      </div>
    </div>
  </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
