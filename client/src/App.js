
import React, { useContext } from 'react';
import Slateshot from './Components/slateshot';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Register from './Components/user/Register';
import Login from './Components/user/Login';
import Dashboard from './Components/dashboard'
import { AuthContext } from './Context/AuthContext';
function App(props) {
  const authContext = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route exact path='/'>
        <Dashboard />
      </Route>

      <Slateshot
        height="180px"
        width="160px"
        viewType='edit'
        username={authContext.user.username} />
    </Router>
  );
}

export default App;
