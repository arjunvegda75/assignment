import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfunc, minusfunc } from './CounterAction'

const CounterComp = () => {
    const count = useSelector((i)=>i.count)
    const dispatch = useDispatch()
    const addCounter=()=>{
        dispatch(addfunc())
    }
    const minusCounter=()=>{
        dispatch(minusfunc())
    }
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>Count is {count}</h2>
      <button onClick={addCounter} >Increment</button>
      <button onClick={minusCounter}>Decrement</button>
    </div>
  )
}

export default CounterComp
