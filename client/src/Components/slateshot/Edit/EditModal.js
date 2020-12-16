import Modal from 'react-modal';
import React, {useState,useContext} from 'react'
import Dob from '../../user/Register/Dob';
import CSC from '../../user/Register/CSC';
import Editform from './Editform';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AuthServices from '../../../AuthServices/AuthServices';
import { AuthContext } from '../../../Context/AuthContext';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '-40%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
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

function EditModal() {
    const authContext = useContext(AuthContext)
    const loggedUser = authContext.user
    const {_id, firstname, middlename, lastname, email} = loggedUser
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState({
        id:_id,
        firstname: firstname, middlename: middlename, lastname: lastname, email: email, age: "N", gender: "",reelsAndDemos:[['pic','video']],
        username: "", password: "", dob: { day: "", year: "", month: "" },
        csc: { country: "", city: "", state: "" }
    });
    const handleOpenModal=()=>{
        setShowModal(true)
    }
    const handleCloseModal=()=>{
        AuthServices.update(user).then(data=>{
            console.log('user updated succesfullly');
        })
        setShowModal(false)

    }
    const day = (e) => {
        setUser({ ...user, dob: { ...user.dob, day: e } })
    }
    const month = (e) => {
        setUser({ ...user, dob: { ...user.dob, month: parseInt(e) + 1 } })
    }
    const year = (e) => {
        setUser({ ...user, dob: { ...user.dob, year: e } })
    }
    const country = (e) => {
        setUser({ ...user, csc: { ...user.csc, country: e}})
    }
    const region = (e) => {
        setUser({ ...user, csc: { ...user.csc, state: e } })
    }
    const city = (e) => {
        setUser({ ...user, csc: { ...user.csc, city: e }})
    }
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
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
         <Editform onChange={onChange} user={user} />
         <div className='px-1'>
         <div className="w-100 px-4">
          <Dob dob={user.dob} day={day} month={month} year={year} />
          </div>
          </div>
        <div className="px-3">
          <CSC city={city} country={country} region={region} />
          </div>
          <div className="px-3">
          <Button
                        onClick={handleCloseModal}
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
