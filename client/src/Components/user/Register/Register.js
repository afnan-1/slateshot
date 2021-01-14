import React, { useState, useRef, useContext, useEffect } from 'react'
import { Steps, Step } from "react-step-builder";
import { useHistory } from 'react-router-dom';
import Step1 from "./Step1";
import Step2 from "./Step2";
import { AuthContext } from '../../../Context/AuthContext';
import AuthService from '../../../AuthServices/AuthServices';
import FinalStep from "./FinalStep";
function Register() {
    const history = useHistory()
    let timerID = useRef(null);
    const authContext = useContext(AuthContext);
    const [showerr, setShowerr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [userErr, setUserErr] = useState(null)
    const [user, setUser] = useState({
        firstname: "", middlename: "", lastname: "", jadu: '123', email: "", age: "N", gender: "",
        user_public:false,
        username: "", password: "", dob: { day: "", year: "", month: "" },
        csc: { country: "", city: "", state: "" }
    });
    useEffect(() => {
        if (localStorage.getItem('facebookemail')) {
            authContext.setEmail(JSON.parse(localStorage.getItem('facebookemail')))
            setUser({ ...user, email: JSON.parse(localStorage.getItem('facebookemail')) })
        }
        else if (localStorage.getItem('googleemail')) {
            authContext.setEmail(JSON.parse(localStorage.getItem('googleemail')))
            setUser({ ...user, email: JSON.parse(localStorage.getItem('googleemail')) })
        }
    }, [])

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const day = (e) => {
        setUser({ ...user, dob: { ...user.dob, day: e } })
    }
    const month = (e) => {
        setUser({ ...user, dob: { ...user.dob, month: parseInt(e) + 1 } })
    }
    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
        else {
            setUser({ ...user, [e.target.name]: 'No' });
        }
    }
    const year = (e) => {
        setUser({ ...user, dob: { ...user.dob, year: e } })
    }
    const cscCountry = (e) => {
        setUser({ ...user, csc: { ...user.csc, country: e } })
    }
    const cscRegion = (e) => {
        setUser({ ...user, csc: { ...user.csc, state: e } })
    }
    const cscCity = (e) => {
        setUser({ ...user, csc: { ...user.csc, city: e } })
    }
    const userPublic=()=>{
        setUser({...user,user_public:!user.user_public})
    }
    const resetForm = () => {
        authContext.setEmail('')
        setShowerr(false)
        setUserErr(false)
        setUser({
            firstname: "", middlename: "", lastname: "", email: "", age: "", gender: user.gender,
            username: "", password: "", dob: { day: "", year: "", month: "" },
            csc: { country: "", city: "", state: "" }
        })
    }
    const onSubmit = async e => {
        e.preventDefault();
        setEmailErr(false)
        if (localStorage.getItem("facebookusername") || localStorage.getItem("googleusername")) {
            authContext.setEmail(user.email)
        }
        if (authContext.email === user.email) {
            setShowerr(false)
            await AuthService.register(user).then(data => {
                const { message, email } = data;
                if (!message.msgError && !message.emailError) {
                    // resetForm();
                    setUserErr(false)
                    setEmailErr(false)
                    timerID = setTimeout(() => {
                        history.push('/login');
                    }, 100)
                }
                else if (message.msgError === true) {
                    setUserErr(true)
                    setEmailErr(false)
                }
                else if (message.emailError === true) {
                    setEmailErr(true)
                    setUserErr(false)
                }
            });
        }
        else { setShowerr(true) }
    }
    return (
        <div>
            <Steps>
                <Step component={Step1} onChange={onChange} user={user} />
                <Step component={Step2} onChange={onChange} user={user} />
                <Step component={FinalStep} onChange={onChange} user={user}
                    day={day} year={year} month={month}
                    country={cscCountry} city={cscCity}
                    user_public={userPublic}
                    region={cscRegion} checkbox={handleCheckbox}
                    showerr={showerr} userErr={userErr} onSubmit={onSubmit}
                    emailErr={emailErr} />
            </Steps>
        </div>
    )
}

export default Register
