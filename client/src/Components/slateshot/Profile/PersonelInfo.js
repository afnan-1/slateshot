import React,{useState} from 'react'

function PersonelInfo(props) {
    const [handle, sethandle] = useState(false)
    const handleClick = (e) => {
        if (e.target.src !== undefined) {
            sethandle(!handle)
            try {
                handle ? e.target.pause() : e.target.play()
            }
            catch (err) { }
        }
    }
    return (
        <div className="col-xl-3 col-lg-3">
            <div className="bg-white p-3 widget shadow rounded mb-4">
            <video
                poster={`/uploads/${props.email}/picture.jpg`}
                height='375px'
                // width='100%'
                style={{ width:'100%', objectFit:'cover' }}
                onClick={handleClick}>
                <source src={`/uploads/${props.email}/video.mp4`} type="video/mp4">
                </source>
            </video>
                <h1 className="h6 mb-3 mt-3 font-weight-bold text-gray-900">Personal Info</h1>
                <p className="mb-2"><i className="fas fa-user-circle fa-fw" /> Known For - Acting</p>
                <p className="mb-2"><i className="fas fa-venus-mars fa-fw" /> Gender - {props.gender.charAt(0).toUpperCase()+props.gender.slice(1)}</p>
                <p className="mb-2"><i className="fas fa-calendar-alt fa-fw" /> Date of Birth - {props.year}-{props.month}-{props.day}</p>
                <p className="mb-2"><i className="fas fa-map-marker-alt fa-fw" /> {props.city}, {props.state}, {props.country}</p>
            </div>
        </div>
    )
}

export default PersonelInfo
