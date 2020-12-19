import React, { useEffect, useState, useContext } from 'react'
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import AuthServices from '../../../AuthServices/AuthServices';
import Select from "react-select";
import 'react-dropdown/style.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: '-22%',
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
function Excerpts() {
    const authContext = useContext(AuthContext)
    const classes = useStyles();
    const [excerpts, setExcerpts] = useState('')
    const [showModal, setShowModal] = useState(false)
    const options = [
        { value: 'Stories', label: 'Stories' },
        { value: 'Scripts', label: 'Scripts' },
        { value: 'Scores', label: 'Scores' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleChangeExcerpts = (e) => {
        setExcerpts(e.target.value)
    }
    const makeid = (length) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const handleAudioUpload = async (e) => {
        localStorage.setItem('timer', JSON.stringify(true))
        const formData = new FormData();
        formData.append('reels', e.target.files[0]);
        formData.append('title', selectedOption.value)
        formData.append('email', authContext.user.email)
        formData.append('key', makeid(5))
        try {
            const res = await axios.post('/uploadreels', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            let { key, filePath } = res.data;
            key = key + '.mp3'
            const user = {
                email: authContext.user.email,
                excerpts: [selectedOption.value, key, excerpts]
            }
            AuthServices.updateReelsDemos(user)
                .then(data => {
                    console.log(data);
                    handleCloseModal()
                    authContext.setUser(data)
                })
                .then(res => res)
            // console.log('key');
            // setVideo(String(filePath).split('s/')[0] + 's/' + user.email + '/video.mp4')
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <button className="btn btn btn-dark" onClick={handleOpenModal}>
                Add Excerpts
            </button>
            <Modal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                style={customStyles}
            >

                <h1>Excerpts</h1>
                <hr />
                <div className="container">
                    {console.log(selectedOption)}
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                    {/* <input className="form-control" value={title} name="title" onChange={handleChange} type="text" placeholder="Enter Title" /> */}
                    <textarea className="form-control mt-2" value={excerpts} name="excerpts" onChange={handleChangeExcerpts} type="text" placeholder="Enter Excerpts" rows='10' cols='50' />
                </div>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    <input name='reels' onChange={handleAudioUpload} className='input__btn__upload' type="file" style={{ opacity: 0, width: '80%', position: 'fixed' }} />
                    Add Excerpts Audio
          </Button>

            </Modal>
        </>
    )
}

export default Excerpts
