import React, { useState } from 'react'
import axios from 'axios'
function PersonelInfo(props) {
    const [handle, sethandle] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [video, setVideo] = useState(null)
    const handleClick = (e) => {
        if (e.target.src !== undefined) {
            sethandle(!handle)
            try {
                handle ? e.target.pause() : e.target.play()
            }
            catch (err) { }
        }
    }
    const dumb = () => {
    }
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
    return (
        <div className="col-xl-3 col-lg-3">
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <video
                    poster={photo}
                    height='375px'
                    style={{ width: '100%', objectFit: 'cover' }}
                    onClick={video ? handleClick : dumb}>
                    <source src={`/uploads/${props.email}/video.mp4`} type="video/mp4">
                    </source>
                </video>
                <h1 className="h6 mb-3 mt-3 font-weight-bold text-gray-900">Personal Info</h1>
                <p className="mb-2"><i className="fas fa-user-circle fa-fw" /> Known For - {props.actor}</p>
                <p className="mb-2"><i className="fas fa-venus-mars fa-fw" /> Gender - {props.gender.charAt(0).toUpperCase() + props.gender.slice(1)}</p>
                <p className="mb-2"><i className="fas fa-calendar-alt fa-fw" /> Date of Birth - {props.month}-{props.day}-{props.year}</p>
                <p className="mb-2"><i className="fas fa-map-marker-alt fa-fw" /> {props.city}, {props.state}, {props.country}</p>
                <div>
                <a href=''>More at IMDB</a>
            <p className="mb-2"><i className='fa fa-phone-alt fa-fw' ></i> Contact Info: <a href="">Agent, Manager</a></p>
            </div>
            </div>
            
        </div>
    )
}

export default PersonelInfo
