import React, { useState,useContext } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import {AuthContext} from '../../../Context/AuthContext';
function Index(props) {
    const authContext = useContext(AuthContext);
    const style = {
        main:{
            height: props.height,
            width: props.width,
            minWidth:'160px',
            minHeight:'220px',
        }
    }

    axios.defaults.baseURL = 'http://localhost:5000';

    const user = authContext.user

    const [handle, sethandle] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0);
    // const [getPathImg,setPathImg] = useState(false)
    // const [getPathVideo,setPathVideo] = useState(false)

    axios.get(`http://localhost:3000/uploads/${user.username}/picture.jpg`).then((response) => {
        setPhoto(`/uploads/${user.username}/picture.jpg`)
    }).catch((error) => {
        setPhoto(`/uploads/default/picture.jpg`)
    })
    axios.get(`http://localhost:3000/uploads/${user.username}/video.mp4`).then((response) => {
        // setVideo(`/uploads/${user.username}/video.mp4`)
    }).catch((error) => {
        setVideo(null)
    })


    const handleClick = (e) => {
        if(e.target.src!==undefined){
            sethandle(!handle)
            try{
            handle ? e.target.pause() : e.target.play()
            }
            catch(err){}
        }
    }
    const handlePhotoUpload = async(e) => {
        console.log('picture');
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('name', props.username)
        try {
            const res = await axios.post('/uploadphoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            const { fileName, filePath } = res.data;
            setPhoto(String(filePath).split('s/')[0] + 's/' + props.username + '/picture.jpg')
        } catch (err) {
            console.log(err);
        }
    };

    const handleVideoUpload = async(e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('name', props.username)
        try {
            const res = await axios.post('/uploadphoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                         // Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });
            const { fileName, filePath } = res.data;
            setVideo(String(filePath).split('s/')[0] + 's/' + props.username + '/video.mp4')
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className='slateshot' style={style.main}>
            <div>
                <video
                    poster={photo}
                    height='125px'
                    width='100%'
                    // style={{ maxWidth: props.width, maxHeight: props.height }}
                    onClick={handleClick}>
                    <source src={video?video:`uploads/${user.username}/video.mp4`} type="video/mp4">
                    </source>
                </video>
            </div>
            <div className="content">
                <span className="username">{props.username}</span>
                <div className="edit__btns">
                    <div className='btn1'>
                        <PersonIcon className='btn__icon' />
                        <label className='label'>
                            Manage Photo
                        <input name='pic' className='input__btn__upload' type="file" style={{ opacity: 0, width: '0px', position: 'fixed', marginLeft: '-120px' }}
                                onChange={(e)=>handlePhotoUpload(e)} />

                        </label>
                    </div>
                    <div className='btn1'>
                        <PersonIcon className='btn__icon' />
                        <label className='label'>
                            Add Slateshot
                        <input name='pic' className='input__btn__upload' type="file" style={{ opacity: 0, width: '0px', position: 'fixed', marginLeft: '-120px' }}
                                onChange={(e)=>handleVideoUpload(e)} />

                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index
