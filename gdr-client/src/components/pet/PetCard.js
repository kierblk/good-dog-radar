import React from 'react'
import { Link } from 'react-router-dom'

const PetCard = ({ pet }) => {
  return (
    pet ?
    <>
      <div className="pet-edit-delete">
          <Link to={`/pets/${pet.id}/edit`}>Edit</Link> &nbsp;
          <Link to={`/pets/${pet.id}/delete`}>Delete</Link>
      </div>
      <div className="PetCard">
        <div className="pet-photo">
          <img src={pet.attributes.photo} alt="" />
        </div>

        <div className="pet-info">
          <p className="pet-name">{ pet.attributes.name }</p>
          <p>{ pet.attributes.breed }</p>
          <p>Birthdate:<br />{ pet.attributes.birthdate ? pet.attributes.birthdate : "Unknown" }</p>
        </div>
      </div>
      <div className="pet-comments">
        <h3>Comments</h3>
        <Link to="">Add Comment</Link>
      </div>
    </>:
    <p>Add a Pet First!</p>
  )
}

export default PetCard
