import React, { useState, useContext } from 'react';
import AuthService from '../../AuthServices/AuthServices';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLogin'
import FacebookLogin from './FacebookLogin';
const Login = props => {
    const [user, setUser] = useState({ username: "", password: "" });
    const authContext = useContext(AuthContext);
    let history = useHistory()

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            console.log(data);
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/edit');
            }
        });
    }



    return (
        <div className='container m-auto'>
            <form onSubmit={onSubmit}>
                <h3 className='m-auto col-6'>Slateshot sign in</h3>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text"
                    name="username"
                    onChange={onChange}
                    className="form-control my-2 col-6 mx-auto"
                    placeholder="Enter Username" />
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password"
                    name="password"
                    onChange={onChange}
                    className="form-control col-6 my-2 mx-auto"
                    placeholder="Enter Password" />
                <button className="btn btn-lg btn-primary btn-block mt-2 col-6 m-auto"
                    type="submit">Log in </button>
            </form>
            <GoogleLoginComponent />
            <FacebookLogin />
        </div>
    )
}

export default Login;