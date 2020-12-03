import React, { useState, useContext, useEffect } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import {
    useHistory
} from "react-router-dom";
function Index(props) {
    const authContext = useContext(AuthContext);
    const [photo, setPhoto] = useState(null)
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
        async function fetchData() {
            await axios.get(`http://localhost:3000/uploads/${user.email}/picture.jpg`).then((response) => {
                setPhoto(`/uploads/${user.email}/picture.jpg`)
            }).catch((error) => {
                setPhoto(`/uploads/default/picture.jpg`)
            })
            await axios.get(`http://localhost:3000/uploads/${user.email}/video.mp4`).then((response) => {
                setVideo(`/uploads/${user.email}/video.mp4`)
            }).catch((error) => {
                setVideo(null)
            })
        }
        fetchData()
    }, [photo, video])
    const dumb=()=>{
        
    }
    const handleClick = () => {
        sethandle(!handle)
        handle ? videoRef.current.pause() : videoRef.current.play()
    }
    return (
        <div className='slateshot' style={style.main}>
            <div>
                <video
                    poster={photo}
                    height='150'
                    width='100%'
                    ref={videoRef}
                // style={{ maxWidth: props.width, maxHeight: props.height }}
                >
                    <source src={`/uploads/${user.email}/video.mp4`} type="video/mp4">
                    </source>
                </video>
            </div>
            <div className="content">
                <div className="buttons">
                    <PersonIcon className='icons' onClick={() => history.push('/profile')} />
                    <EditIcon className='icons2' onClick={() => history.push('/edit')} />
                    <PlayArrowIcon className='icons1' onClick={video?handleClick:dumb} />
                </div>
                <span className="username">{props.username}</span>
            </div>
        </div>
    )
}

export default Index