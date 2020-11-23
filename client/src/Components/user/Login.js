import React, {useState,useContext} from 'react';
import AuthService from '../../AuthServices/AuthServices';
import {AuthContext} from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const authContext = useContext(AuthContext);
    let history  = useHistory()

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/');
            }
        });
    }



    return(
        <div className='container'>
            <form onSubmit={onSubmit}>
                <h3>Please sign in</h3>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text" 
                       name="username" 
                       onChange={onChange} 
                       className="form-control mt-2" 
                       placeholder="Enter Username"/>
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password" 
                       name="password" 
                       onChange={onChange} 
                       className="form-control mt-2" 
                       placeholder="Enter Password"/>
                <button className="btn btn-lg btn-primary btn-block mt-2" 
                        type="submit">Log in </button>
            </form>
        </div>
    )
}

export default Login;