import React,{useContext,useState,useEffect} from 'react'
import { GoogleLogin } from 'react-google-login'
import AuthService from '../../AuthServices/AuthServices';
import { AuthContext } from '../../Context/AuthContext';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
function GoogleLoginComponent() {
    const authContext = useContext(AuthContext);
    const [user,setUser] = useState({username:null})
    let history = useHistory()

    const responseGoogle = (response) => {
        setUser({username:response.profileObj.name,email:response.profileObj.email})
        localStorage.setItem('googleusername',JSON.stringify(response.profileObj.name))
        localStorage.setItem('googleemail',JSON.stringify(response.profileObj.email))
        AuthService.loginGoogle(user).then(data => {
            console.log(data);
            const { isAuthenticated, user } = data;
            if (isAuthenticated) {
                authContext.setUser({username:response.profileObj.name,email:response.profileObj.email});
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/edit');
            }
        });
    }
    const responseFailureGoogle = (res) => {
        console.log(res)
    }

    return (
        <>  
            <GoogleLogin
                clientId="68679119571-t7cdi4n146r0cangrqba4aksh7561daf.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default GoogleLoginComponent
