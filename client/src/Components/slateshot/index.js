import React, { useState, useContext, useEffect } from 'react'
import './slateshot.css'
import UserProfile from './Profile/index'
import Edit from './Edit/Main'
import Thumbnail from './Thumbnail'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AuthService from '../../AuthServices/AuthServices';
import { AuthContext } from '../../Context/AuthContext';

function Index(props) {
    const authContext = useContext(AuthContext);
    const [users, setUsers] = useState(null)
    AuthService.profile().then(data => {
        setUsers(data)
    })
    useEffect(() => {

    }, [])
    return (
        <div>
            <Switch>
                {
                    // <Route path='/edit'>
                    //     <Edit username={props.username}
                    //         height={props.height}
                    //         width={props.width}
                    //         user={authContext.user}
                    //     />
                    // </Route>
                }
                {/* <Route path={`/thumbnail`}>
                    <div className='row'>
                        {users ? Object.keys(users).map((v, i) => {
                            return <Thumbnail username={users[v].username}
                                email={users[v].email}
                                key={i}
                                height={props.height}
                                width={props.width}
                                srcImg={props.srcImg}
                                srcVideo={props.srcVideo} />
                        }) : ''}
                    </div>
                </Route> */}
                {/* {users ? Object.keys(users).map(v => {
                    return <Route path={`/profile/${users[v].username}`}>
                        <UserProfile username={users[v].username}
                            user={users[v].reelsAndDemos}
                            gender={users[v].gender}
                            day={users[v].dob_day}
                            year={users[v].dob_year}
                            month={users[v].dob_month}
                            jadu={users[v].jadu}
                            country={users[v].csc_country}
                            state={users[v].csc_state}
                            city={users[v].csc_city}
                            email={users[v].email}
                            height={props.height}
                            width={props.width}
                            srcImg={props.srcImg}
                            srcVideo={props.srcVideo} />
                    </Route>
                }) : ''} */}
            </Switch>
        </div>
    )
}

export default Index