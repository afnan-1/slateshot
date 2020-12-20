import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../AuthServices/AuthServices';
import RegisterFinal from './Register/Register'
const Register = props => {
    const [user, setUser] = useState({ firstname: "", middlename: "", lastname: "", email: "123", gender: "", username: "", password: "" });
    const [message, setMessage] = useState(null);
    const [showerr, setShowerr] = useState(false);
    let timerID = useRef(null);
    const [confirmemail, setconfirmEmail] = useState(null)
    let history = useHistory()

    useEffect(() => {
        // if (localStorage.getItem('facebookemail')){
        //     console.log('helo');
        //     setUser({...user,email:JSON.parse(localStorage.getItem('facebookemail'))})
        // }
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setconfirmEmail('')
        setUser({ firstname: "", middlename: "", lastname: "", email: "", gender: "", username: "", password: "" });
    }

    const onSubmit = e => {
        setShowerr('Email must be same')
        e.preventDefault();
        if (confirmemail === user.email) {
            setShowerr('')
            AuthService.register(user).then(data => {
                const { message } = data;
                setMessage(message);
                resetForm();
                if (!message.msgError) {
                    timerID = setTimeout(() => {
                        if (localStorage.getItem('facebookemail')) {
                            history.push('/edit')
                        }
                        history.push('/login');
                    }, 1000)
                }
            });
        }
    }



    return (
        <div className='container'>
            <RegisterFinal />

        </div>
    )
}

export default Register;