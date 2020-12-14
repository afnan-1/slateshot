import React,{useState} from 'react'

function BiographyThumbnail() {
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
        <div className="col-xl-3 col-md-6">
        <div className="card m-card shadow border-0">
          {/* <a href="movies-detail.html"> */}
          <video
              poster={`/uploads/aa12@gmail.com/picture.jpg`}
              height='300px'
              width='100%'
              style={{ width:'100%', objectFit:'cover' }}
              onClick={handleClick}>
              <source src={`/uploads/aa12@gmail.com/video.mp4`} type="video/mp4">
              </source>
          </video>
            {/* <div className="m-card-cover">
              <img src={'/uploads/aa12@gmail.com/picture.jpg'} style={{width:'100%', objectFit:'cover'}} />
            </div> */}
            <div className="card-body p-3">
              <h5 className="card-title text-gray-900 mb-1">Jumanji: The Next Level</h5>
              <p className="card-text"><small className="text-muted">English</small> <small className="text-danger"><i className="fas fa-calendar-alt fa-sm text-gray-400" /> 22 AUG</small> </p>
            </div>
          {/* </a> */}
        </div>
      </div>
    )
}

export default BiographyThumbnail
