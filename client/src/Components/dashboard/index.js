import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from "react-router";

function Dashboard() {

    const { isAuthenticated } = useContext(AuthContext);
    const [auth, setAuth] = useState(isAuthenticated)
    const [seconds, setSeconds] = useState(15);
    let history = useHistory()
    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
        setAuth(isAuthenticated)
        if (!isAuthenticated) {
            history.push("/login");
        }
    })

    return (
        <div className='container'>
            {auth&& localStorage.getItem('timer')? <div className='mx-auto col-6'> Please Wait,{seconds} Seconds Your SlateShot is Uploading </div> : ""}
            {seconds === 0 && history.push('/profile')}
        </div>
    )
}

export default Dashboard