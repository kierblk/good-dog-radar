import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from "./components/NavBar";
import PetList from "./components/PetList";
import ActivityFeed from "./components/ActivityFeed";
import ActivityForm from "./components/ActivityForm";

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="gdr">
          <PetList />
          <ActivityFeed />
          <ActivityForm />
        </div>
      </div>
    )
  }
}



export default connect( null, { getCurrentUser })(App);
