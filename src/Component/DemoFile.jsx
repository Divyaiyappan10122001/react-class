import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

const DemoFile = () => {
    
  // const {text, setText} = useContext(UserContext)
  const {age, name, color} = useContext(UserContext)

  // const handleClick = () => {
  //   setText("Haniya")
  // }
  return (
    <div> 
        <h1>Name:  {name}</h1>
        <h1>Age:  {age}</h1>
        <h1>Color: {color}</h1>

        <button onClick={()=>setName("Soulmate")}>Name</button>
    <button onClick={()=>setAge(21)}>Age</button>
    <button onClick={()=>setColor("black")}>Color</button>
        {/* <h1></h1> */}

    {/* <button onClick={handleClick}>Click </button> */}
    </div>
  )
}

export default DemoFile