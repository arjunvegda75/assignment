import React, { useState } from 'react'

const MyfirstComponent = (props) => {
    let name = "Raj"
    const hello = (a,b)=>{
        console.log("hellooo" + (a+b))
    }
    const mystyle = {
        color: "blue",
        backgroundColor : "pink"
  
    }
    const [username , setUsername] = useState("jay")
    const [clr , setClr] = useState("red")
    const changeName = ()=>{
      setUsername("rajesh")
      setClr("green")
    }
  
  return (
    <div>
      <h4 style={mystyle}>{2+3*4}</h4>
      <h4 style={{color:clr}} >Name is : {username}</h4>
      <button onClick={changeName}>Click me</button>
      <h4>Name using props is : {props.name}</h4>

    </div>
  )
}

export default MyfirstComponent
