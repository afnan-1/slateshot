import { Input } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import EditModal from './EditModal'
import './personelinfo.css'
import { AuthContext } from '../../../Context/AuthContext';
import AuthServices from '../../../AuthServices/AuthServices';
function PersonelInfo() {
    const authContext = useContext(AuthContext)
    const [editData, setEditData] = useState({
        jadu:authContext.user.jadu,id:authContext.user._id})
    const [knownFor, setKnownFor] = useState(false)
    const [Gender, setGender] = useState(false)
    const [Dob, setDob] = useState(false)
    const [csc, setcsc] = useState(false)
    const handleChangeKnownFor = (e) => {
        AuthServices.title(editData)
        setKnownFor(!knownFor)
    }
    const handleChange=(e)=>{
        setEditData({...editData, jadu:e.target.value})
    }
    const dumb=()=>{
        setKnownFor(!knownFor)
    }
    console.log(authContext);
    return (
        <>  <div className='w-100 row'>
            <h1 className="col h6 mb-3 mt-3 font-weight-bold text-gray-900 d-inline">Personal Info</h1>
            <EditModal />
            </div>
            <p className="mb-2 d-inline"><i className="fas fa-user-circle fa-fw" /> Known For -
            {knownFor? <input className='col-4' type="text" onChange={handleChange} name='knownFor' value={editData.jadu} />:editData.jadu }
            </p>
            <button className='ml-3 btn btn-dark' onClick={knownFor?handleChangeKnownFor:dumb}> {knownFor?'Update':'Edit '}</button>    
            <p className="mb-2"><i className="fas fa-venus-mars fa-fw" /> Gender - </p>
            <p className="mb-2"><i className="fas fa-calendar-alt fa-fw" /> Date of Birth -</p>
            <p className="mb-2"><i className="fas fa-map-marker-alt fa-fw" /> </p>
        </>
    )
}

export default PersonelInfo
