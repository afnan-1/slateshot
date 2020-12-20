import { Input } from '@material-ui/core'
import React, { useState, useEffect, useContext } from 'react'
import EditModal from './EditModal'
import './personelinfo.css'
import { AuthContext } from '../../../Context/AuthContext';
import AuthServices from '../../../AuthServices/AuthServices';
function PersonelInfo(props) {
    const { userr } = props
    const authContext = useContext(AuthContext)
    const [editData, setEditData] = useState({
        actor: authContext.user.actor,
        id: authContext.user._id
    })
    const [knownFor, setKnownFor] = useState(false)
    const [dobHook, setDob] = useState('')
    const [cscHook, setCsc] = useState('')
    const handleChangeKnownFor = (e) => {
        const user = {
            actor: authContext.user.actor,
            id: authContext.user._id
        }
        AuthServices.title(user)
        setKnownFor(!knownFor)
    }
    const dob = (e) => {
        setDob(e)
    }
    const csc = (e) => {
        setCsc(e)
    }
    const handleChange = (e) => {
        setEditData({ ...editData, actor: e.target.value })
        authContext.setUser({ ...authContext.user, actor: e.target.value })
    }
    const dumb = () => {
        setKnownFor(!knownFor)
    }
    const { user } = authContext
    return (
        <> <div className='w-100 row'>
            <h1 className="col h6 mb-3 mt-3 font-weight-bold text-gray-900 d-inline">Personal Info</h1>
            <EditModal userr={user} dob={dob} csc={csc} />
        </div>
            <p className="mb-2 d-inline"><i className="fas fa-user-circle fa-fw" /> Known For -
            {knownFor ? <input className='col-4' type="text" onChange={handleChange} name='knownFor' value={authContext.user.actor} /> : authContext.user.actor}
            </p>
            <button className='ml-1 mr-0 btn btn-dark' onClick={knownFor ? handleChangeKnownFor : dumb}> {knownFor ? 'Update' : 'Edit '}</button>
            <p className="mb-2"><i className="fas fa-venus-mars fa-fw" /> Gender - {user.gender}</p>
            <p className="mb-2"><i className="fas fa-calendar-alt fa-fw" /> Date of Birth -{dobHook === "" ? user.dob_month : dobHook.month}-{dobHook === "" ? user.dob_day : dobHook.day}-{dobHook === "" ? user.dob_year : dobHook.year}</p>
            <p className="mb-2"><i className="fas fa-map-marker-alt fa-fw" />{cscHook === "" ? user.csc_country : cscHook.country}, {cscHook === "" ? user.csc_state : cscHook.state}, {cscHook === "" ? user.csc_city : cscHook.city} </p>
        </>
    )
}

export default PersonelInfo
