import React, { useState } from 'react'
import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
function Register() {
    const [user, setUser] = useState({
        firstname: "", middlename: "", lastname: "", email: "", age: "", gender: "",
        transgender: "", twins: "", username: "", password: "", dob: { day: "", year: "", month: "" },
        csc: { country: "", city: "", state: "" }
    });

    const onChange = e => {
        console.log('clik');
        setUser({ ...user, [e.target.name]: e.target.value });
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
    const cscCountry = (e) => {
        setUser({ ...user, csc: { ...user.csc, country: e.target.value.split(',')[0] } })
    }
    const cscState = (e) => {
        setUser({ ...user, csc: { ...user.csc, state: e.target.value.split(',')[0] } })
    }
    const cscCity = (e) => {
        setUser({ ...user, csc: { ...user.csc, city: e.target.value.split(',')[0] } })
    }
    console.log(user);
    return (
        <div>
            <Steps>
                <Step component={Step1} onChange={onChange} />
                <Step component={Step2} onChange={onChange} user={user} />
                <Step component={FinalStep} onChange={onChange} user={user}
                    day={day} year={year} month={month}
                    country={cscCountry} city={cscCity} state={cscState} />
            </Steps>
        </div>
    )
}

export default Register
