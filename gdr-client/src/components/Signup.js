import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleUserInfoInputChange} />
      </p>

      <p>
        <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfoInputChange} />
      </p>

      <p>
        <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
      </p>

      <p>
        <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
      </p>

      <p>
        <input placeholder="phone number" value={signupFormData.phone} name="phone" type="text" onChange={handleUserInfoInputChange} />
      </p>

      <p>
        <input placeholder="Organization" value={signupFormData.organization_id} name="organization_id" type="text" onChange={handleUserInfoInputChange} />
      </p>

      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)