import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false);

    // useeffect - count
    useEffect(() => {
      document.title = "Haniya"
        console.log("Printed")
    
    }, [count])

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1)
        }, 1000);
    })


    // useeffect - toggled
    useEffect(() => {
      console.log(`Toggle now is ${isToggled? 'ON': 'OFF'}`)
    
    }, [isToggled])
    

    
  return (
    <div>
      {/* useeffect - count */}
        <p>{count}</p>
        <button onClick={()=>{setCount(count + 1)}}>UseEffect Button Count {count} </button>

      {/* useeffect - toggle */}
      <p>Status: {isToggled ? 'ON': 'OFF'}</p>
      <button onClick={()=>{setIsToggled(!isToggled)}}>Toggle</button>
    </div>
  )
}

export default UseEffectComponent