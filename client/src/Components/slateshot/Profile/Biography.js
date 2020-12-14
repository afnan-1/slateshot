import React from 'react'
import BiographyThumbnail from './BiographyThumbnail'
function Biography(props) {
    return (
        <div className="bg-white p-3 widget shadow rounded mb-4">
            <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">Biography</h1>
            <div className="row">
                {props.user ? Object.keys(props.user).map((v, i) => {
                return <React.Fragment key={i}>
                    <BiographyThumbnail />
                    </React.Fragment>
                }) : ''}

            </div>
        </div>
    )
}

export default Biography
