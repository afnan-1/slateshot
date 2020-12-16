
import React, { useContext, useEffect } from 'react';
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
import AuthServices from './AuthServices/AuthServices';
function App(props) {
  const authContext = useContext(AuthContext);
  const gusername = JSON.parse(localStorage.getItem('googleusername'))
  const gemail = JSON.parse(localStorage.getItem('googleemail'))
  const fusername = JSON.parse(localStorage.getItem('facebookusername'))
  const femail = JSON.parse(localStorage.getItem('facebookemail'))
  useEffect(() => {
    if (localStorage.getItem('googleusername')) {
      authContext.setUser({ username: gusername, email: gemail });
      authContext.setIsAuthenticated(true);
    }
    if (localStorage.getItem('facebookusername')) {
      authContext.setUser({ username: fusername, email: femail });
      authContext.setIsAuthenticated(true);
    }
  }, [])

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
