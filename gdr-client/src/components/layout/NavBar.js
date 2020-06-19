import React from 'react'
import { connect } from 'react-redux'
import Logout from '../user/Logout'

const NavBar = ({currentUser}) => {
  return (
    <div className="navbar">
      { 
      currentUser ? 
      <h1 className="text-white">{currentUser.attributes.org_info.name}</h1> :
      '' 
      }

      { 
      currentUser ? 
      <h6 className="text-white">Contact: {currentUser.attributes.org_info.contact} - Phone: {currentUser.attributes.org_info.phone} - Email: {currentUser.attributes.org_info.email}</h6> : 
      '' 
      }

      <div className="navbar-align-end">
        { 
        currentUser ? 
        <>
          <div className="text-white">Welcome Back, {currentUser.attributes.name}!</div>
          <div><Logout /></div>
        </> : 
        '' 
        }
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