import React, { useState } from 'react'
import Fail from './Fail'
import Pass from './Pass'

const CondiComponenet = () => {
    const [pass, setPass] = useState(true)

    {/* conditional using ternary */}
    // const handleFun = () => {
    //     setPass(false)
    // }


    {/* conditional using if */}
    // const changeBoolean = () => {
    //     setPass(false)
    // }
    // if(pass){
    //     return <Pass/>
    // }

    {/* conditional usig && */}
    const handleFunction = () => {
        setPass(false)
    }
    return(
    <div>

        {/* conditional using ternary */}
        {/* {pass ? <Pass/> : <Fail/>}
        <button onClick={handleFun}>Change Pass</button> */}


        {/* conditional using if */}
        {/* <button>Demo</button>
        <button onClick={changeBoolean}>Change Boolean</button> */}


        {/* conditional usig && */}
        {pass && <Pass/>}
        {!pass && <Fail/> }
        <button onClick={handleFunction}>And operator</button>
    </div>
  )
}

export default CondiComponenet