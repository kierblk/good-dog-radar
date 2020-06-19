import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'


const Login = ({loginForm, updateLoginForm, login, history}) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(loginForm, history)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={loginForm.username} name="username" placeholder="username" />

      <input type="text" onChange={handleInputChange} value={loginForm.password} name="password" placeholder="password"/>
      
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)