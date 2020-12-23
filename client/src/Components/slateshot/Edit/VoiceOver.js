import React, { useState, useContext } from 'react'
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
        bottom: '-5%',
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
function VoiceOver() {
    const authContext = useContext(AuthContext)
    const classes = useStyles();
    const [title, setTitle] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const options = [
        { value: 'Voiceover', label: 'Voiceover' },
        {value:'Score', label:'Score'}
    ];
    const [selectedOption, setSelectedOption] = useState(null);

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
        formData.append('title', title)
        formData.append('email', authContext.user.email)
        formData.append('key', makeid(6))
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
                voiceover: [title, key, selectedOption.value]
            }
            AuthServices.updateReelsDemos(user)
                .then(data => {
                    console.log(data);
                    handleCloseModal()
                    authContext.setUser(data)
                })
                .then(res => res)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
             <button className="btn btn btn-dark" onClick={handleOpenModal}>
                Audio
            </button>
            <Modal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                style={customStyles}
            >

                <h1>Voice Over</h1>
                <hr />
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                    <input className="form-control mt-2" value={title} name="title" onChange={handleChange} type="text" placeholder="Enter Title" />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    <input name='reels' onChange={handleAudioUpload} className='input__btn__upload' type="file" style={{ opacity: 0, width: '80%', position: 'fixed' }} />
                    Add Audio
          </Button>

            </Modal>
        </>
    )
}

export default VoiceOver
