import React from 'react';



export default function House (props) {
  let { id, name, address, city, state, zip } = props.house;
  return (
    <div className='House'>
      <div className='house-display'>
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
      </div>
      <button onClick={_ => props.deleteHouse(id)}> Delete </button>
    </div>
  )
}