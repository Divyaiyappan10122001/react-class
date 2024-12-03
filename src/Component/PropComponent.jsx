import React from 'react'

const PropComponent = (props) => {

    // array object destructure
    const perDetail = props.stuDetail;

    // array  destructure
    const fruits = props.fruNames;
  return (
    <div>
    {/* array object display in props */}
        <ul>{perDetail.map((person)=>(
            <li key={person.id}>
                <p>{person.rollNo}</p>
                <p>{person.student}</p>
                <p>{person.age}</p>
            </li>
        ))}</ul>

    {/* array display in props */}
        <ul>
            <li>{fruits[0]}</li>
            <li>{fruits[1]}</li>
            <li>{fruits[2]}</li>
        </ul>
    </div>
  )
}

export default PropComponent