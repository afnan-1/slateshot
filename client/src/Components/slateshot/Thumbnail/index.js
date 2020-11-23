import React, { useState, useContext } from 'react'
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
    const [videoRef,setVideoRef] = useState(React.createRef())
   
    const style = {

        main: {
            height: props.height,
            width: props.width,
            minWidth: '160px',
            minHeight: '220px',
        }
    }
    const user = authContext.user

    // const [getPathImg,setPathImg] = useState(false)
    // const [getPathVideo,setPathVideo] = useState(false)

    axios.get(`http://localhost:3000/uploads/${user.username}/picture.jpg`).then((response) => {
        setPhoto(`/uploads/${user.username}/picture.jpg`)
    }).catch((error) => {
        setPhoto(`/uploads/default/picture.jpg`)
    })
    axios.get(`http://localhost:3000/uploads/${user.username}/video.mp4`).then((response) => {
        setVideo(`/uploads/${user.username}/video.mp4`)
    }).catch((error) => {
        setVideo(null)
    })
    const handleClick = () => {
        sethandle(!handle)
            handle ? videoRef.current.pause() : videoRef.current.play()
    }
    return (
        <div className='slateshot' style={style.main}>
            {/* {console.log('path',getPath)} */}
            <div>
                <video
                    poster={photo}
                    height='145px'
                    width='100%'
                    ref={videoRef}
                    // style={{ maxWidth: props.width, maxHeight: props.height }}
                    onClick={handleClick}>
                    <source src={`/uploads/${user.username}/video.mp4`} type="video/mp4">
                    </source>
                </video>
            </div>
            <div className="content">
                <div className="buttons">
                    <PersonIcon className='icons' onClick={() => history.push('/profile')} />
                    <EditIcon className='icons2' onClick={() => history.push('/edit')} />
                    <PlayArrowIcon className='icons1' onClick={handleClick} />
                </div>
                <span className="username">{props.username}</span>
            </div>
        </div>
    )
}

export default Index