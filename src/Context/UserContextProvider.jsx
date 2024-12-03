import React,{useState} from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [count, setCount] = useState(10)
  return (
    <UserContext.Provider value={{count, setCount}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider