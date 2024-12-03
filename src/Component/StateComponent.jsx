import React, { useState } from 'react'

const StateComponent = () => {

    const [name, setName] = useState("Divya")
    const [count, setCount] = useState(10)
    const [theme, setTheme] = useState("blue")
    const [text, setText] = useState("Haniya")

    const [student, setStudent] = useState("Good Morning")

  return (
    <div>

        {/* string state */}
        <p>{name}</p>
        <button onClick={()=>{setName("Haniya")}}>Change Name</button>

        {/* Count State */}
        <p>{count}</p>
        <button onClick={() => {setCount(count + 1)}}>Increament</button>
        <button onClick={() => {setCount(count - 1)}}>Decreament</button>

        {/* Theme State */}
        <p style={{color:theme}}>Im a Blue Color</p>
        <button onClick={() => {setTheme("red")}}>Change Theme</button>

        {/* text Change using Ternary operator*/}
        <p>{text}</p>
        <button onClick={()=> {setText(text === "Haniya"? "divya": "Haniya")}}>Text Change</button>
        
        {/* task single line */}
        <p>{student}</p>
        <button onClick={()=>{setStudent(student === "Good Morning"? " " : "Good Morning")}}>Click </button>

  
    </div>
  )
}

export default StateComponent