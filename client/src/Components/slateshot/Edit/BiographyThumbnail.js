import React,{useState} from 'react'

function BiographyThumbnail(props) {
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
        <div className="col-xl-3 col-md-6 mt-4">
        <div className="card m-card shadow border-0">
          {/* <a href="movies-detail.html"> */}
          <video
              // poster={`/uploads/aa12@gmail.com/picture.jpg`}
              height='300px'
              width='100%'
              style={{ width:'100%', objectFit:'cover' }}
              onClick={handleClick}>
              <source src={`/uploads/${props.email}/${props.reels}`} type="video/mp4">
              </source>
          </video>
            {/* <div className="m-card-cover">
              <img src={'/uploads/aa12@gmail.com/picture.jpg'} style={{width:'100%', objectFit:'cover'}} />
            </div> */}
            <div className="card-body p-3">
              <h5 className="card-title text-center text-gray-900 mb-1">{props.title}</h5>
            </div>
          {/* </a> */}
        </div>
      </div>
    )
}

export default BiographyThumbnail
