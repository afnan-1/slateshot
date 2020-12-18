import React from 'react'
import BiographyThumbnail from './BiographyThumbnail'
import ReelsAndDemos from './ReelsAndDemos';
function Biography(props) {
    console.log(props.user);
    return (
        <div className="bg-white p-3 widget shadow rounded mb-4">
        <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Reels and Demos</h1>
        <span className='float-right'><ReelsAndDemos/></span>
        <div className="row mt-3">   
            {props.user.reelsAndDemos ? props.user.reelsAndDemos.map((v, i) => {
            return <React.Fragment key={i}> 
                <BiographyThumbnail reels={v[1]} title={v[0]} email={props.user.email}/>
                </React.Fragment>
            }) : ''}

        </div>
    </div>
    )
}

export default Biography
