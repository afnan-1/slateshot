import React from 'react'
import './slateshot.css'
import Profile from './Profile'
import Edit from './Edit'
import Thumbnail from './Thumbnail'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function Index(props) {
    return (

        <div>
                <Switch>
                {<Route path='/edit'>
                 <Edit username={props.username}
                            height={props.height}
                            width={props.width}
                            /></Route>}
                      
                    <Route path={`/thumbnail`}>
                        <Thumbnail username={props.username}
                            height={props.height}
                            width={props.width}
                            srcImg={props.srcImg}
                            srcVideo={props.srcVideo} />
                    </Route>
                    <Route path={`/profile`}>
                        <Profile username={props.username}
                            height={props.height}
                            width={props.width}
                            srcImg={props.srcImg}
                            srcVideo={props.srcVideo} />
                     </Route>
                </Switch>
        </div>
    )
}

export default Index