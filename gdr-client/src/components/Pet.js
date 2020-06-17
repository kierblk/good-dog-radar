import React from 'react'

const Pet = ({ pet }) => {
  return (
    <p>{pet.attributes.name}</p>
  )
}

export default Pet
