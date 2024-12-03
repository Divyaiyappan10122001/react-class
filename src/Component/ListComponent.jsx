import React from 'react'

const ListComponent = () => {
    // Array
    const fruits = ["mango", "banana", "apple"]

    // Object
    const student = {
        id:1002,
        name:"Divya"
    }

    // array object
    const arrObj = [
       {id: 1010, name: "Haniya"},
       {id: 1015, name: "Sumi"}
    ]

    // array object using map 
    const person = [
        {rollNo:1, student:"Sumi", age:21},
        {rollNo:2, student:"Renu", age:22},
        {rollNo:3, student:"Hani", age:21}
    ]

  return (
    <div>
        {/* display arr */}
        <ul>
            <li>{fruits}</li>
            <li>{fruits[0]}</li>
            <li>{fruits[1]}</li>
            <li>{fruits[2]}</li>
        </ul>

        {/* display object */}
        <ul>
            <li>{student.id}</li>
            <li>{student.name}</li>
        </ul>

        {/* display array object */}
        <ul>
            <li>{arrObj[0].name}</li>
        </ul>

        {/* display array object using map */}
        <ul>
            {person.map((students)=>(
                <li key={students.id} style={{display:'flex'}}>
                    <p style={{paddingRight:'1rem'}}>{students.rollNo}</p>
                    <p style={{paddingRight:'1rem'}}>{students.student}</p>
                    <p>{students.age}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListComponent