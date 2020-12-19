import React, { useState, useContext, useEffect } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import PersonelInfo from './PersonelInfo'
import { AuthContext } from '../../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
function Index(props) {
    const authContext = useContext(AuthContext);
    const history = useHistory()
    const {isAuthenticated} = useContext(AuthContext);
    const [auth,setAuth] = useState(isAuthenticated)
    const style = {
        main: {
            height: props.height,
            width: props.width,
            minWidth: '160px',
            minHeight: '220px',
        }
    }

    axios.defaults.baseURL = 'http://localhost:5000';

    const user = authContext.user
    const [handle, sethandle] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [video, setVideo] = useState(null)
    useEffect(() => {
      if(localStorage.getItem('googleusername'))
                {}
        
      if(localStorage.getItem('facebookusername'))
                {}
        
     else if (!isAuthenticated){
            // history.push("/login");
        }
        fetchData()
    })
    console.log(user);
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
    const handleClick = (e) => {
        if (e.target.src !== undefined) {
            sethandle(!handle)
            try {
                handle ? e.target.pause() : e.target.play()
            }
            catch (err) { }
        }
    }
    const handlePhotoUpload = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('name', user.email)
        try {
            const res = await axios.post('/uploadphoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            const { fileName, filePath } = res.data;
            setPhoto(String(filePath).split('s/')[0] + 's/' + user.email + '/picture.jpg')
        } catch (err) {
        }
    };

    const handleVideoUpload = async (e) => {
        localStorage.setItem('timer',JSON.stringify(true))
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('name', user.email)
        try {
            const res = await axios.post('/uploadphoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            const { fileName, filePath } = res.data;
            setVideo(String(filePath).split('s/')[0] + 's/' + user.email + '/video.mp4')
           
            history.push('/')
        } catch (err) {
            console.log(err);
        }
    };
    const dumb=()=>{  
    }

    return (
        <div className="col-xl-3 col-lg-3">
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <video
                    poster={photo}
                    height='300'
                    width='100%'
                    style={{ width:'100%', objectFit:'cover' }}
                    onClick={video?handleClick:dumb}>
                    <source src={video ? video : `${process.env.PUBLIC_URL}/uploads/${user.email}/video.mp4`} type="video/mp4">
                    </source>
                </video>
            <div className="content">
                <span className="username">{props.username}</span>
                <div className="edit__btns col-lg-12 col-sm-12 col-xs-12 pl-0 pr-0">
                    <div className='btn1'>
                        <PersonIcon className='btn__icon' />
                        <label className='label py-1'>
                            Manage Photo
                        <input name='pic' className='input__btn__upload' type="file" style={{ opacity: 0, width: '0px',display:'none', position: 'fixed', marginLeft: '-120px' }}
                                onChange={handlePhotoUpload}/>

                        </label>
                    </div>
                    <div className='btn1'>
                        <PersonIcon className='btn__icon' />
                        <label className='label py-1'>
                            Add Slateshot
                        <input name='video' className='input__btn__upload' type="file" style={{ opacity: 0,display:'none', width: '0px', position: 'fixed', marginLeft: '-120px' }}
                                onChange={handleVideoUpload} />
                        </label>
                    </div>
                </div>
            </div>
            <PersonelInfo  userr={user} />
        </div>
        </div>
    )
}

export default Index
