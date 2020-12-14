import React,{useContext,useEffect,useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import AuthService from '../../AuthServices/AuthServices';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';


function FacebookLoginComponent() {
    const authContext = useContext(AuthContext);
    let history = useHistory()
    const responseFacebook=(res)=>{
        const user = {
            username:res.username,
            email:res.email
        }
        AuthService.loginFacebook(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if (message.msgError){
                localStorage.setItem('facebookusername',JSON.stringify(res.name))
                localStorage.setItem('facebookemail',JSON.stringify(res.email))
                history.push('/register')
            }
            else if (isAuthenticated) {
                authContext.setUser({username:res.name,email:res.email});
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/edit');
            }
        });
    }
    return (
        <div>
            <FacebookLogin
                appId="663122864621413"
                autoLoad={false}
                fields="name,email"
                icon='fa fa-facebook'
                textButton='&nbsp; Login with Facebook '
                cssClass='facebook btn rounded py-2'
                scope={'public_profile'}
                callback={responseFacebook} />
                
        </div>
    )
}

export default FacebookLoginComponent
