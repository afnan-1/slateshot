import React from 'react'
import BiographyThumbnail from './BiographyThumbnail'
function Biography(props) {
    return (
        <>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Reels and Demos</h1>
                <div className="row mt-3">
                    {props.reels ? props.reels.map((v, i) => {
                        return <React.Fragment key={i}>
                            <BiographyThumbnail reels={v[1]} title={v[0]} email={props.email} />
                        </React.Fragment>
                    }) : ''}


                </div>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Voice Over and Score</h1>
                <div className=" row mt-3">
                    {props.voiceover ? props.voiceover.map((v, i) => {
                        return <React.Fragment key={i}>
                            <BiographyThumbnail voiceoverTitle={v[0]} voiceTitle2={v[2]} keyvoiceover={i} audio={v[1]} email={props.email} />
                        </React.Fragment>
                    }) : ''}
                </div>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Stories Scripts and Score</h1>
                <div className=" row mt-3">
                    {props.excerpts ? props.excerpts.map((v, i) => {
                        return <React.Fragment key={i}>
                            <BiographyThumbnail excerptsTitle={v[0]} title2={v[3]} audio={v[1]} excerpts={v[2]} email={props.email} />
                        </React.Fragment>
                    }) : ''}


                </div>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Events</h1>
                
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Projects</h1>
               
            </div>
        </>
    )
}

export default Biography
