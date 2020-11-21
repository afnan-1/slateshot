import React, { useState } from 'react'
import './slateshot.css'
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import SsEdit from './Edit/SsEdit';
import SsThumbnail from './slateshotThumbnail/SsThumbnail';
import SsProfile from './Profile/SsProfile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory 
} from "react-router-dom";
function Slateshot(props) {
    let history = useHistory()
    // if(props.viewType==='edit'){
    //     history.push('/edit')
    // }
    return (

        <div>
            <Router>
                <Switch>
                <Route path={`/edit`}>
                        <SsEdit username={props.username}
                            height={props.height}
                            width={props.width}
                            srcImg={props.srcImg}
                            srcVideo={props.srcVideo} />
                    </Route>
                    <Route path={`/thumbnail`}>
                        <SsThumbnail username={props.username}
                            height={props.height}
                            width={props.width}
                            srcImg={props.srcImg}
                            srcVideo={props.srcVideo} />
                    </Route>
                    <Route path={`/profile`}>
                        <SsProfile username={props.username}
                            height={props.height}
                            width={props.width}
                            srcImg={props.srcImg}
                            srcVideo={props.srcVideo} />
                     </Route>
                </Switch>

            </Router>

        </div>
    )
}

export default Slateshot
