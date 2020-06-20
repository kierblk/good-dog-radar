import React from 'react'

const Pet = ({ pet }) => {
  return (
    <div className="Pet">
      {pet.attributes.name}
    </div>
  )
}

export default Pet
