import React, { useState, useContext, useEffect, useRef } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import {
    useHistory
} from "react-router-dom";
import AuthService from '../../../AuthServices/AuthServices';

function Index(props) {
    const authContext = useContext(AuthContext);
    let slateshotRefs = useRef([]);
    const [photo, setPhoto] = useState(null)
    const [users, setUsers] = useState(null)
    const [video, setVideo] = useState(null)
    let history = useHistory()
    const [handle, sethandle] = useState(false)
    const [videoRef, setVideoRef] = useState(React.createRef())

    const style = {

        main: {
            height: props.height,
            width: props.width,
            minWidth: '160px',
            minHeight: '220px',
        }
    }
    const user = authContext.user
    useEffect(() => {
        AuthService.profile().then(data => {
            setUsers(data)
        })
    }, [])
    async function fetchData() {
        await axios.get(`http://localhost:3000/uploads/${props.email}/picture.jpg`).then((response) => {
            setPhoto(`/uploads/${props.email}/picture.jpg`)
        }).catch((error) => {
            setPhoto(`/uploads/default/picture.jpg`)
        })
        await axios.get(`http://localhost:3000/uploads/${props.email}/video.mp4`).then((response) => {
            setVideo(`/uploads/${props.email}/video.mp4`)
        }).catch((error) => {
            setVideo(null)
        })
    }
    fetchData()
    const dumb = () => {
    }
    const handleClick = () => {
        console.log(videoRef);
        sethandle(!handle)
        if (video) {
            handle ? videoRef.current.pause() : videoRef.current.play()
        }
        else {
            dumb()
        }

    }
    return (
        <div>

            <div className='slateshot' style={style.main}>
                <div>
                    <video
                        poster={`/uploads/${props.email}/picture.jpg`}
                        height='160'
                        width='100%'
                        ref={videoRef}
                    // style={{ maxWidth: props.width, maxHeight: props.height }}
                    >
                        <source src={`/uploads/${props.email}/video.mp4`} type="video/mp4">
                        </source>
                    </video>
                </div>
                <div className="content">
                    <div className="buttons p-0">
                        <PersonIcon className='icons' onClick={() => history.push(`/profile/${props.username}`)} />
                        {/* <EditIcon className='icons2' onClick={() => history.push('/edit')} /> */}
                        <PlayArrowIcon className='icons1' onClick={handleClick} />
                    </div>
                    <span className="username text-dark">{props.firstname.toUpperCase()} {props.lastname.toUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}

export default Index