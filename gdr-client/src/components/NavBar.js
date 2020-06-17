import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'

const NavBar = ({currentUser}) => {
  return (
    <div className="navbar">
      { currentUser ? <h1 className="text-white">{currentUser.attributes.org_info.name}</h1> : '' }
  { currentUser ? <p>Contact: {currentUser.attributes.org_info.contact} - Phone: {currentUser.attributes.org_info.phone} - Email: {currentUser.attributes.org_info.email}</p> : '' }
      <div className="navbar-align-end">
        { currentUser ? <p className="text-white">Welcome Back, {currentUser.attributes.name}! </p> : '' }
        { currentUser ? <Logout /> : <Login /> }
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)