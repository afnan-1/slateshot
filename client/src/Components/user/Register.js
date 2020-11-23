import React, {useState,useRef,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../AuthServices/AuthServices';

const Register = props=>{
    const [user, setUser] = useState({ firstname: "", middlename: "", lastname: "", email: "", gender: "", username: "", password: "" });
    const [message,setMessage] = useState(null);
    const [showerr,setShowerr] = useState(null);
    let timerID = useRef(null);
    const [confirmemail,setconfirmEmail] = useState(null)
    let history  = useHistory()

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetForm = ()=>{
        setconfirmEmail('')
        setUser({ firstname: "", middlename: "", lastname: "", email: "", gender: "", username: "", password: "" });
    }

    const onSubmit = e =>{
        setShowerr('Email must be same')
        e.preventDefault();
        if(confirmemail===user.email)
        {
            setShowerr('')
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    history.push('/login');
                },2000)
            }
        });
    }
}



    return(
        <div className='container'>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>
                <label htmlFor="firstname" className="sr-only">Firstname </label>
                <input type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={onChange}
                    className="form-control mt-2"
                    placeholder="Enter FirstName" />
                 <label htmlFor="middlename" className="sr-only">middlename </label>
                <input type="text"
                    name="middlename"
                    value={user.middlename}
                    onChange={onChange}
                    className="form-control  mt-2"
                    placeholder="Enter MiddleName" />

                <label htmlFor="lastname" className="sr-only">lastname </label>
                <input type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={onChange}
                    className="form-control  mt-2"
                    placeholder="Enter lastname" />
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       className="form-control mt-2" 
                       placeholder="Enter Username"/>
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       className="form-control mt-2" 
                       placeholder="Enter Password"/>
                 <label htmlFor="email" className="sr-only">email </label>
                <input type="text"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                    className="form-control  mt-2"
                    placeholder="Enter email" />
                    <label htmlFor="email" className="sr-only">Confirm email </label>
                    {showerr!==""?showerr:''}
                <input type="text"
                    name="confirmemail"
                    value={confirmemail}
                    onChange={(e)=>setconfirmEmail(e.target.value)}
                    className="form-control  mt-2"
                    placeholder="Confirm email" />
                     <label htmlFor="radio" className="sr-only">Gender</label>
               Male <input type="radio" onChange={onChange} value="male" name="gender" className='mr-3' />
               Female <input type="radio" onChange={onChange} value="female" name="gender" />

                
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;