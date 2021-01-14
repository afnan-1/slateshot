import Modal from 'react-modal';
import React, { useState, useContext, useEffect } from 'react'
import Dob from '../../user/Register/Dob';
import CSC from '../../user/Register/CSC';
import Editform from './Editform';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AuthServices from '../../../AuthServices/AuthServices';
import { AuthContext } from '../../../Context/AuthContext';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: '-40%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
Modal.setAppElement('#root')
function EditModal(props) {
    const { dob, csc } = props
    const authContext = useContext(AuthContext)
    const loggedUser = authContext.user
    const { _id, firstname, middlename, lastname, email, dob_year, dob_month, dob_day } = loggedUser
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState({
        id: authContext.user._id,
        user_public:loggedUser.user_public,
        firstname: firstname, middlename: middlename, lastname: lastname, email: email, age: "N", gender: "", reelsAndDemos: [],
        username: "", password: "", dob: { dob_day:dob_day, dob_year: dob_year, month: dob_month },
        csc: { country: loggedUser.csc_country, city: loggedUser.csc_city, state: loggedUser.csc_state }
    });
    useEffect(() => {
        setUser({
            id: authContext.user._id,
            user_public:loggedUser.user_public,
            firstname: firstname, middlename: middlename, lastname: lastname, email: email, age: "N", gender: "", reelsAndDemos: [],
            username: "", password: "", dob: { dob_day:dob_day, dob_year: dob_year, month: dob_month },
            csc: { country: loggedUser.csc_country, city: loggedUser.csc_city, state: loggedUser.csc_state }
        })
    }, [loggedUser])
    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleEdit = () => {
        dob(user.dob)
        csc(user.csc)
        AuthServices.update(user).then(data => {
            console.log('data', data);
        })
      
        setShowModal(false)
    }
    const day = (e) => {
        setUser({ ...user, dob: { ...user.dob, dob_day: e } })
    }
    const month = (e) => {
        setUser({ ...user, dob: { ...user.dob, month: parseInt(e) + 1 } })
    }
    const year = (e) => {
        setUser({ ...user, dob: { ...user.dob, dob_year: e } })
    }
    const country = (e) => {
        setUser({ ...user, csc: { ...user.csc, country: e } })
    }
    const region = (e) => {
        setUser({ ...user, csc: { ...user.csc, state: e } })
    }
    const city = (e) => {
        setUser({ ...user, csc: { ...user.csc, city: e } })
    }
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const userPublic=()=>{
        setUser({...user,user_public:!user.user_public})
    }
    return (
        <>
            <button className='btn col-2 text-dark' onClick={handleOpenModal}>Edit</button>
            <Modal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <Editform onChange={onChange} user={user} pass={user.password} />
                <div className='px-1'>
                    <div className="w-100 px-4">
                        <Dob dob={user.dob} day={day} month={month} year={year}
                        />
                    </div>
                </div>
                <div className="px-3">
                    <CSC city={city} country={country} region={region} />
                </div>
                <div className="ml-3 mt-2 custom-control custom-switch">
                    <input type="checkbox" onChange={userPublic} checked={user.user_public} className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" for="customSwitch1">User Public</label>
                </div>
                <div className="px-3">
                    <Button
                        onClick={handleEdit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Save
          </Button>
                </div>
            </Modal>
        </>
    )
}
export default EditModal
