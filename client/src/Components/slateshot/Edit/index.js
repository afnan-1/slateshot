import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
function Index(props) {
    const [handle, sethandle] = useState(false)
    const [file, setFile] = useState(null)
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [video, setVideo] = useState(null)
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState(null);
    const handleClick = (e) => {
        sethandle(!handle)
        handle ? e.target.pause() : e.target.play()
    }
    let obj = {
        height: '1000px',
        width: '100%'
    }
    axios.defaults.baseURL = 'http://localhost:5000';
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        console.log(file);
        formData.append('file', file);
        formData.append('video', video);
        formData.append('name', props.username)
        try {
            const res = await axios.post('/upload', formData, {
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
            //   setUploadedFile({ fileName, filePath });
            setUploadedFile(String(filePath).split('s/')[0] + 's/' + props.username + '/picture.jpg')
        } catch (err) {
            console.log(err);
        }
    };
    return (

        <div className='slateshot'>
            {console.log('pic', uploadedFile)}
            <div className="slateshot__video">
                <video
                    poster={uploadedFile ? uploadedFile : props.srcImg}
                    height={obj.height}
                    width={obj.width}
                    style={{ maxWidth: props.width, maxHeight: props.height }}
                    onClick={handleClick}>
                    <source src={props.srcVideo} type="video/mp4">
                    </source>
                </video>
            </div>
            <div className="content">
                <span className="username">{props.username}</span>
                <div className="edit__btns">

                    <form onSubmit={onSubmit}>
                        {file ? <div className='btn1'>

                            <PersonIcon className='btn__icon' />
                            <label className='label'>
                                Upload Photo
                            <input type="submit" accept="image/*" style={{ opacity: 0, width: '8px' }} />
                            </label>

                        </div>
                            : <div className='btn1'>
                                <PersonIcon className='btn__icon' />
                                <label className='label'>
                                    Manage Photo
                                <input name='pic' type="file" style={{ opacity: 0, width: '8px' }} 
                                onChange={(e) => setFile(e.target.files[0])} />
                                    {console.log('file', file)}
                                </label>
                            </div>
                        }
                    </form>

                    {/* {video ? <div className='btn1'>
                        <PersonIcon className='btn__icon' />
                        <label>
                            Upload Video
                            <input type="submit" style={{ opacity: 0, width: '8px' }} />
                        </label>

                    </div>
                        : <div className='btn1'>
                            <PersonIcon className='btn__icon' />
                            <label>
                                Manage Video
    <input type="file" style={{ opacity: 0, width: '8px' }} accept="videos/*" onChange={(e) => setFile(e.target.files[0])} />
                                {console.log('file', file)}
                            </label>
                        </div>
                    } */}
                </div>

            </div>
        </div>

    )
}

export default Index
