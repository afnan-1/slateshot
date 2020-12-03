import React, { useState,useContext,useEffect } from 'react'
import axios from 'axios';
import {AuthContext} from '../../../Context/AuthContext';
function Index(props) {
    const authContext = useContext(AuthContext);
    const [handle, sethandle] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [video, setVideo] = useState(null)
  
    const style = {

        main:{
            height: props.height,
            width: props.width,
            minWidth:'160px',
            minHeight:'220px',
        }
    }
   
    const user = authContext.user
    useEffect(() => {
    localStorage.removeItem('timer')
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
    const handleClick = (e) => {
        if(e.target.src!==undefined){
        sethandle(!handle)
        try{
        handle ? e.target.pause() : e.target.play()
        }
        catch(err){}
    }
}
const dumb=()=>{       
}
    return (
        <div className='slateshot' style={style.main}>
        <div>
            <video
                poster={photo}
                height='175px'
                width='100%'
                // style={{ maxWidth: props.width, maxHeight: props.height }}
                onClick={video?handleClick:dumb}>
                <source src={`/uploads/${user.email}/video.mp4`} type="video/mp4">
                </source>
            </video>
        </div>
        <div className="content">
            <span className="username">{props.username}</span>
        </div>
    </div>
    )
}

export default Index
