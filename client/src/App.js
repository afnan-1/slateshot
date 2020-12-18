
import React, { useContext, useEffect } from 'react';
import Slateshot from './Components/slateshot';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,useHistory
} from "react-router-dom";
import Register from './Components/user/Register';
import Login from './Components/user/Login';
import Dashboard from './Components/dashboard'
import { AuthContext } from './Context/AuthContext';
import AuthServices from './AuthServices/AuthServices';
function App() {
  const history= useHistory()
  const authContext = useContext(AuthContext);
  const gusername = JSON.parse(localStorage.getItem('googleusername'))
  const gemail = JSON.parse(localStorage.getItem('googleemail'))
  const fusername = JSON.parse(localStorage.getItem('facebookusername'))
  const femail = JSON.parse(localStorage.getItem('facebookemail'))
 
  useEffect(() => {
    console.log(authContext);
    if (localStorage.getItem('googleusername')) {
      const user = {
        username:gusername,
        email:gemail
      }
      AuthServices.loginGoogle(user).then(data => {
        const { isAuthenticated, user, message } = data;
        if (message.msgError) {
            // history.push('/register')
        }
        else if (isAuthenticated) {
           
            authContext.setUser(user);
            authContext.setIsAuthenticated(isAuthenticated);
            // history.push('/edit');
        }
    });
      authContext.setIsAuthenticated(true);
    }
    if (localStorage.getItem('facebookusername')) {
      const user={
        username:fusername,
        email:femail
      }
      AuthServices.loginFacebook(user).then(data => {
        const { isAuthenticated, user, message } = data;
        console.log(user);
        if (message.msgError){
            // history.push('/register')
        }
        else if (isAuthenticated) {
            authContext.setUser(user);
            authContext.setIsAuthenticated(isAuthenticated);
            // history.push('/edit');
        }
    });
      // authContext.setUser({ username: fusername, email: femail });
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
