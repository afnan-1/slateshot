import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import firebase from '../../firebase'
import axios from 'axios';
function SsEdit(props) {
    const [handle, sethandle] = useState(false)
    const [file, setFile] = useState(null)
     const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
    const handleClick = (e) => {
        sethandle(!handle)
        handle ? e.target.pause() : e.target.play()
    }
    let obj = {
        height: '180',
        width: '160'
    }
    if (props.width != '') {
        obj.width = props.width
        obj.height = props.height
    }
    axios.defaults.baseURL = 'http://localhost:5000';
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        console.log(file);
        formData.append('file', file);
        formData.append('name','mubeen123')
        try {
          const res = axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            //   'Access-Control-Allow-Origin':'*'
              
            },
            body: JSON.stringify({
                user: {
                    name: "Jon",
                }
            })
        
          });
    
          const { fileName, filePath } = res.data;
          setUploadedFile({ fileName, filePath });
    
        } catch (err) {
        }
      };
    return (
      
        <div className='slateshot'>
            <div className="slateshot__video">
                <video
                    poster={props.srcImg}
                    height={obj.height}
                    width={obj.width}
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
                        <label>
                            Upload Photo
                            <input type="submit" style={{ opacity: 0, width: '8px' }} />
                        </label>

                    </div>
                        : <div className='btn1'>
                            <PersonIcon className='btn__icon' />
                            <label>
                                Manage Photo
    <input type="file" style={{ opacity: 0, width: '8px' }} onChange={(e) => setFile(e.target.files[0])} />
                                {console.log('file', file)}
                            </label>
                        </div>
                    }
                    </form>
                    <div className='btn1'>
                        <AddIcon className='btn__icon' />
                        <label>
                            Add Slateshot
    <input type="file" style={{ opacity: 0, width: '8px' }} />

                        </label>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SsEdit
