import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const ContextDemo = () => {
    const {count, setCount} = useContext(UserContext)
 
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+2)}>Increased</button>
    </div>
  )
}

export default ContextDemo