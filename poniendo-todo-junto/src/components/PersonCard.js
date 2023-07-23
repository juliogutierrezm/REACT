import React from 'react'
import Button from './Button'

const PersonCard = (props) => {

  return (
    <div>
      <div className = "w-25 mx-auto">
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age} </p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={props.onIncrementAge}>Increase Age</button>
      </div>
    </div>
  )
}

export default PersonCard