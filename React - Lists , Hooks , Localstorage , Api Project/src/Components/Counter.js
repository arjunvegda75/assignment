import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment= ()=>{
        setCount(count + 1)
    }
    
    const decrement= ()=>{
        setCount(count - 1)
    }
    
  return (
    <div className='App'>
        <h1 style={{fontSize: "40px"}}>Counter App</h1>
        <p  style={{fontSize: "60px", fontWeight:"bolder"}}>{count}</p>
        <button class= "btn btn-success" onClick={increment}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button class= "btn btn-danger" onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default Counter
