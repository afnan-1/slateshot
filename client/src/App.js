
import React, { useContext, useEffect, useState } from 'react';
import Slateshot from './Components/slateshot';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route, Switch, useHistory
} from "react-router-dom";
import Register from './Components/user/Register';
import Login from './Components/user/Login';
import Dashboard from './Components/dashboard'
import { AuthContext } from './Context/AuthContext';
import UserProfile from './Components/slateshot/Profile/index'
import AuthServices from './AuthServices/AuthServices';
import Edit from './Components/slateshot/Edit/Main'
import Thumbnail from './Components/slateshot/Thumbnail'
function App() {
  const history = useHistory()
  const authContext = useContext(AuthContext);

  const gusername = JSON.parse(localStorage.getItem('googleusername'))
  const gemail = JSON.parse(localStorage.getItem('googleemail'))
  const fusername = JSON.parse(localStorage.getItem('facebookusername'))
  const femail = JSON.parse(localStorage.getItem('facebookemail'))
  const [users, setUsers] = useState(null)
  console.log(authContext.isAuthenticated);

  useEffect(() => {
    AuthServices.profile().then(data => {
      setUsers(data)
    })
    console.log(authContext);
    if (localStorage.getItem('googleusername')) {
      const user = {
        username: gusername,
        email: gemail
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
      const user = {
        username: fusername,
        email: femail
      }
      AuthServices.loginFacebook(user).then(data => {
        const { isAuthenticated, user, message } = data;
        console.log(user);
        if (message.msgError) {
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
      <Switch>

        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path={`/thumbnail`}>
          <div className='row'>
            {users ? Object.keys(users).map((v, i) => {
              return <div className='m-2' key={i}>
                <Thumbnail username={users[v].username}
                  email={users[v].email}
                  key={i}
                  height='180px'
                  width='160px'
                  firstname={users[v].firstname}
                  lastname={users[v].lastname}
                />
              </div>
            }) : ''}
          </div>
        </Route>
        <Route path='/edit'>
          <Edit username={authContext.user.username}
            user={authContext.user}
          />
        </Route>
        {users ? Object.keys(users).map(v => {
          return <Route key={v} path={`/profile/${users[v].username}`}>
            <UserProfile username={users[v].username}
              reels={users[v].reelsAndDemos}
              excerpts={users[v].excerpts}
              gender={users[v].gender}
              voiceover={users[v].voiceover}
              day={users[v].dob_day}
              firstname={users[v].firstname}
              lastname={users[v].lastname}
              year={users[v].dob_year}
              month={users[v].dob_month}
              actor={users[v].actor}
              country={users[v].csc_country}
              state={users[v].csc_state}
              city={users[v].csc_city}
              email={users[v].email}
            />
          </Route>
        }) : ''}
      </Switch>
    </Router>
  );
}

export default App;
