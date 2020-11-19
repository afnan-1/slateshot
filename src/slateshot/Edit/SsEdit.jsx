import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

function SsEdit(props) {
    const [handle, sethandle] = useState(false)
    const handleClick = (e) => {
        sethandle(!handle)
        handle ? e.target.pause() : e.target.play()
    }
    let obj={
        height:'180',
        width:'160'
    }
    if(props.width!==''){
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
                <div className="edit__btns">
                    <div className='btn1'>
                        <PersonIcon className='btn__icon' /> 
                        <span>Manage Photo</span></div>
                    <div className='btn1'>
                        <AddIcon className='btn__icon' /> 
                        <span>Add Slateshot</span></div>
                </div>

            </div>
        </div>
    )
}

export default SsEdit
