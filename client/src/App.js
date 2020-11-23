
import React,{useContext} from 'react';
import Slateshot from './Components/slateshot';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Register from './Components/user/Register';
import Login from './Components/user/Login';
import {AuthContext} from './Context/AuthContext';
function App(props) {
  const authContext = useContext(AuthContext);
  return (
    <Router>
         <Navbar />
      <div className="Slateshot__main">
        <Slateshot username='afnan nadeem'
          height="180px"
          width="160px"
          srcImg={`uploads/${authContext.user.username}/picture.jpg`}
          viewType='edit'
          srcVideo={`uploads/${authContext.user.username}/video.mp4`}
          username={authContext.user.username} />
      </div>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
        <Login />
        </Route>
    </Router>
  );
}

export default App;
