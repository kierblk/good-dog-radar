import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import './App.css';

import { getCurrentUser } from './actions/currentUser'

import NavBar from "./components/layout/NavBar";
import Home from './components/layout/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import PetList from "./components/pet/PetList"
import NewPet from './components/pet/NewPetForm'
import PetCard from './components/pet/PetCard'

import Login from './components/user/Login'
import Signup from './components/user/Signup'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, pets } = this.props
    return (
      <div className="App">
        <Header />
        <NavBar location={this.props.location} />
        <div className="gdr App-header">
          <Switch>
            <Route exact path='/' render={ () => loggedIn ? '' : <Home /> } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/signup' component={ Signup } />
            <Route exact path='/pets' component={ PetList } />
            <Route exact path='/pets/new' component={ NewPet } />
            <Route exact path='/pets/:id' render={ props => { 
                const pet = pets.find(pet => pet.id === props.match.params.id)
                return <PetCard pet={pet} {...props} />
              }
              }/>
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    pets: state.myPets
  })
}



export default withRouter(connect( mapStateToProps, { getCurrentUser })(App));
