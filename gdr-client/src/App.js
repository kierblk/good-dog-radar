import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from "./components/NavBar";
import PetList from "./components/PetList";
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        <NavBar />
        <div className="gdr App-header">
          <Switch>
            <Route exact path='/' render={ () => loggedIn ? <PetList /> : <Home /> } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/signup' component={ Signup } />
            <Route exact path='/pets' component={ PetList } />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}



export default connect( mapStateToProps, { getCurrentUser })(App);
