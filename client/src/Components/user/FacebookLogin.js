import React,{useContext,useEffect,useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import AuthService from '../../AuthServices/AuthServices';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';


function FacebookLoginComponent() {
    const authContext = useContext(AuthContext);
    const [user,setUser] = useState({username:null})
    let history = useHistory()
   

    const responseFacebook=(res)=>{
        setUser({username:res.name,email:res.email})
        localStorage.setItem('facebookusername',JSON.stringify(res.name))
        localStorage.setItem('facebookemail',JSON.stringify(res.email))
        AuthService.loginFacebook(user).then(data => {
            const { isAuthenticated, user } = data;
            if (isAuthenticated) {
                authContext.setUser({username:res.name,email:res.email});
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/edit');
            }
        });
        console.log(res);
    }

    return (
        <div>
            <FacebookLogin
                appId="663122864621413"
                autoLoad={false}
                fields="name,email"
                callback={responseFacebook} />
        </div>
    )
}

export default FacebookLoginComponent
