import React, {useState} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import {
    useHistory 
} from "react-router-dom";
function SsThumbnail(props) {
    let history = useHistory()
    const [handle, sethandle] = useState(false)
    const [video,setVideo] = useState(React.createRef())
//     const videoControl=(e)=>{
// setVideo(e.target)
   
// }
const handleClick = () => {
    sethandle(!handle)
    handle ? video.current.pause() : video.current.play()
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
                    ref={video}
                    height={obj.height}
                    width={obj.width}>
                    <source src={props.srcVideo} type="video/mp4">
                    </source>
                </video>
            </div>
            <div className="content">
            <div className="buttons">
                    <PersonIcon className='icons' />
                    <EditIcon className='icons2' onClick={()=> history.push('/edit')} />
                    <PlayArrowIcon className='icons1' onClick={handleClick} />
                </div>
                <span className="username">{props.username}</span>
            </div>
        </div>
    )
}

export default SsThumbnail
