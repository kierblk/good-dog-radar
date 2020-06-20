import React from 'react'
import { Link } from 'react-router-dom'

const Pet = ({ pet }) => {
  return (
    <Link to={`/pets/${pet.id}`} key={pet.id}>
      <div className="Pet">
        <img src={pet.attributes.photo} alt="" /> &nbsp;
        {pet.attributes.name}
      </div>
    </Link>
  )
}

export default Pet
