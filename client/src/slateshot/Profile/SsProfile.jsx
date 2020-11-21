import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
function SsProfile(props) {
    const [handle, sethandle] = useState(false)
    const handleClick = (e) => {
        sethandle(!handle)
        handle ? e.target.pause() : e.target.play()
    }
    let obj={
        height:'180px',
        width:'160px'
    }
    if(props.width!=''){
        obj.width = props.width
        obj.height = props.height
    }
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
        </div>
    </div>
    )
}

export default SsProfile
