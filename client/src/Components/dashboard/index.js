import React,{useContext,useState,useEffect} from 'react'
import {AuthContext} from '../../Context/AuthContext';
import {useHistory} from "react-router";

function Dashboard() {

    const {isAuthenticated} = useContext(AuthContext);
    const [auth,setAuth] = useState(isAuthenticated)
    let history = useHistory()
    useEffect(() => {
        setAuth(isAuthenticated)
        if (!isAuthenticated){
            history.push("/login");
        }
    }, [isAuthenticated])

    return (
        <div>
            {auth?<div>Dashboard</div>:""}
        </div>
    )
}

export default Dashboard