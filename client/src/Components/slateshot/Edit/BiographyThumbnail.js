import React, { useState,useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import AuthServices from '../../../AuthServices/AuthServices';
import { AuthContext } from '../../../Context/AuthContext';
function BiographyThumbnail(props) {
  const authContext = useContext(AuthContext)
  const [handle, sethandle] = useState(false)
  const reels={
    key:props.keyreels,
    email:authContext.user.email
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
  const deleteReels=()=>{
    console.log(reels);
    AuthServices.delete(reels).then(data=>{
      console.log(data);
      authContext.setUser(data)
    })
  }
  return (
    <>
      {props.reels &&
        <div className="col-xl-3 col-md-6 mt-4">

          <div className="card m-card shadow border-0">
            {/* <a href="movies-detail.html"> */}
            <video
              // poster={`/uploads/aa12@gmail.com/picture.jpg`}
              height='300px'
              width='100%'
              style={{ width: '100%', objectFit: 'cover' }}
              onClick={handleClick}>
              <source src={`/uploads/${props.email}/${props.reels}`} type="video/mp4">
              </source>
            </video>
            {/* <div className="m-card-cover">
              <img src={'/uploads/aa12@gmail.com/picture.jpg'} style={{width:'100%', objectFit:'cover'}} />
            </div> */}
            <div className="card-body p-3">
              <h5 className="card-title text-center text-gray-900 mb-1">{props.title}</h5>
              <button className="btn btn-dark d-flex align-items-end" onClick={deleteReels}>Delete</button>
            </div>
            {/* </a> */}
          </div>
        </div>
      }
      {
        props.excerpts &&
        <div className="col-xl-6 col-md-6 mt-4">
          <div className="card m-card shadow border-0 h-100">
            <div className="card-title pt-3">
              <h5 className="card-title text-center text-gray-900 mb-0">{props.excerptsTitle}</h5>
            </div>
            <div className="card-body pt-1">
              <h6 className=" text-center text-gray-900 mb-1">{props.excerpts}</h6>
            </div>
            <div className=''>
            <ReactAudioPlayer
              src={`/uploads/${props.email}/${props.audio}`}
              controls
              className="w-100"
            />
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default BiographyThumbnail
