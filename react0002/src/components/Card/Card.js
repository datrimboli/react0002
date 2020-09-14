import React from 'react'
let person = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  address: '123 Main St'
}
const Card = () => {
  return (
    <div className="card red">
      {person.name}
      <br />
      <br />
      {person.email}
      <br />
      <br />
      {person.address}
    </div>


  )
}

export default Card