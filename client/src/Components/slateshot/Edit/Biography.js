import React from 'react'
import BiographyThumbnail from './BiographyThumbnail'
import Excerpts from './Excerpts';
import ReelsAndDemos from './ReelsAndDemos';
import VoiceOver from './VoiceOver';
function Biography(props) {
    return (
        <>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Reels and Demos</h1>
                <span className='float-right'><ReelsAndDemos /></span>
                <div className="row mt-3">
                    {props.user.reelsAndDemos ? props.user.reelsAndDemos.map((v, i) => {
                        return <React.Fragment key={i}>
                            <BiographyThumbnail reels={v[1]} keyreels={i} title={v[0]} email={props.user.email} />

                        </React.Fragment>
                    }) : ''}


                </div>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Stories,Scripts and Scores</h1>
                <span className='float-right'><Excerpts /></span>
                <div className=" row mt-3">
                    {props.user.excerpts ? props.user.excerpts.map((v, i) => {
                        return <React.Fragment key={i}>
                            <BiographyThumbnail excerptsTitle={v[0]} title2={v[3]} keyexcerpts={i} audio={v[1]} excerpts={v[2]} email={props.user.email} />
                        </React.Fragment>
                    }) : ''}


                </div>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Voice Over and Score</h1>
                <span className='float-right'><VoiceOver /></span>
                <div className=" row mt-3">
                    {console.log(props.user.voiceover)}
                    {props.user.voiceover ? props.user.voiceover.map((v, i) => {
                        return <React.Fragment key={i}>
                            <BiographyThumbnail voiceoverTitle={v[0]} voiceTitle2={v[2]} keyvoiceover={i} audio={v[1]} email={props.user.email} />
                        </React.Fragment>
                    }) : ''}


                </div>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Events</h1>
                <button className='float-right btn btn-dark'>Add Events</button>
            </div>
            <div className="bg-white p-3 widget shadow rounded mb-4">
                <h1 className="h6 d-inline mb-3 mt-0 font-weight-bold text-gray-900">Projects</h1>
                <button className='float-right btn btn-dark'>Add Projects</button>
            </div>
        </>
    )
}

export default Biography
