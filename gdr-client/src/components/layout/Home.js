import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome<br /><br />
      <Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link></h2>
      
    </div>
  );
};

export default Home;