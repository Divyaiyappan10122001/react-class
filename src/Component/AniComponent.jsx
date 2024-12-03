import React from 'react'
// import { TypeAnimation } from 'react-type-animation'
import {  useContext } from 'react'
import UserContext from '../Context/UserContext'

const AniComponent = () => {

  const {text, setText} = useContext(UserContext)

  const handleClick = () => {
    setText("Hello")
  }
  return (
    <div>
      <h1>hello i am anicomponent</h1>
       <h1>{text}</h1>
    <button onClick={handleClick}>Click </button>
    </div>
  )
}

export default AniComponent