import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../AuthServices/AuthServices';
import { AuthContext } from '../Context/AuthContext';

const Navbar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        localStorage.removeItem('googleusername')
        localStorage.removeItem('googleemail')
        localStorage.removeItem('facebookusername')
        localStorage.removeItem('facebookemail')
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
       
    }
    const unauthenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>
            </>
        )
    }
    const authenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                {
                    <Link to='/edit'>
                        <li className="nav-item nav-link">
                            Edit
                    </li>
                    </Link>
                }
                <button type="button"
                    className="btn btn-link nav-item nav-link"
                    onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">Slateshot</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {(!isAuthenticated && !localStorage.getItem('googleusername')) ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;