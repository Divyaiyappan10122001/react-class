import React, { useState } from 'react'


const FormComponent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && password){
            const newdata = {
                id: Date.now(),
                Name:name,
                Email:email,
                Password: password
            }
            setData([...data, newdata])
            console.log(data)
            setName("")
            setEmail("")
            setPassword("")
        }
    }

    const handleDelete = (id) => {
        alert("Are you Sure! Delete this")
        setData(data.filter((datavalue)=> datavalue.id !== id));
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <input type="text"
            placeholder='Enter your name'
            name='input'
            id='input'
            value={name}
            onChange={(e)=>{setName(e.target.value)}} />

            <input type="email"
            placeholder='Enter your email'
            name='input'
            id='input'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}} />

            <input type="password"
            placeholder='Enter your password'
            name='input'
            id='input'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}} />
            
            <button type="submit">Add</button>
        </form>

        <ul>
            {data.map((datavalue)=>(
            <li key={datavalue.id}>
            <b>Name: </b> {datavalue.Name} - <b>Email: </b> {datavalue.Email} - <b>Password: </b>{datavalue.Password}

            <button onClick={()=>{handleDelete(datavalue.id)}}>Delete </button>
            </li>
        ))}
        </ul>
    
    </div>
  )
}

export default FormComponent