import React, { useState } from 'react'
function PersonelInfo() {
    const [editData, setEditData] = useState({
        knownFor: '',
        Gender: '',
        Dob: '',
        country: '',
        city: '',
        state: ''
    })
    const [knownFor, setKnownFor] = useState(false)
    const handleChange = (e) => {
        setKnownFor(!knownFor)
    }
    const onChange = (e) => {
        setEditData({ ...editData, [e.target.name]: [e.target.value] })
    }
    return (
        <>
            <h1 className="h6 mb-3 mt-3 font-weight-bold text-gray-900">Personal Info</h1>
            <p className="mb-2"><i className="fas fa-user-circle fa-fw" /> Known For -
            {knownFor ? <input type="text" className="col-4" name='knownFor' onChange={onChange} value={editData.knownFor} />
                    : editData.knownFor}

                <button className='ml-2' onClick={handleChange}><i className="fa fa-edit"></i></button>
            </p>
            <p className="mb-2"><i className="fas fa-venus-mars fa-fw" /> Gender - </p>
            <p className="mb-2"><i className="fas fa-calendar-alt fa-fw" /> Date of Birth -</p>
            <p className="mb-2"><i className="fas fa-map-marker-alt fa-fw" /> </p>
        </>
    )
}

export default PersonelInfo
