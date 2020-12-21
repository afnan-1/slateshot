import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CSC from './CSC'
import Dob from './Dob'
import {Link} from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
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
function FinalStep(props) {
    const classes = useStyles();
    const [legal_checkbox, setLegalCheckbox] = useState(false)
    const authContext = useContext(AuthContext);
    const { onChange, user, day, month, year, country, city, region, onSubmit, showerr, userErr, emailErr, user_public } = props
    return (
        <form onSubmit={onSubmit}>
            <Container component="main" maxWidth="xs" className={'bg-white py-2 my-2'}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign Up
        </Typography>
                    <div className={classes.form}>
                        <TextField
                            value={user.username}
                            variant="outlined"
                            margin="normal"
                            required
                            error={userErr}
                            helperText={userErr && 'Username is already taken'}
                            onChange={onChange}
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            value={user.password}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            disabled={localStorage.getItem("facebookusername") || localStorage.getItem("googleusername") ? true : false}
                            onChange={onChange}
                            name="password"
                            label="Password"
                            id="password"
                            autoComplete="password"
                            type='password'
                        />
                        <TextField
                            value={user.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            error={emailErr}
                            helperText={emailErr && 'Email is already registered'}
                            onChange={onChange}
                            name="email"
                            label="Email"
                            id="email"
                            type='email'
                            autoComplete="email"
                        />
                        <TextField
                            value={localStorage.getItem("facebookusername") || localStorage.getItem("googleusername") ? user.email : authContext.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            error={showerr}
                            helperText={showerr && 'Email is Not Same'}
                            name="confirmemail"
                            onChange={(e) => authContext.setEmail(e.target.value)}
                            label="Confirm Email"
                            id="confirmemail"
                            autoComplete="confirmemail"
                        />
                        <label className="my-2 mx-2">Gender (to play):</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input ml-2 mr-1" type="radio" onChange={onChange} id='male' value="male" name="gender" />
                            <label className="form-check-label " htmlFor="male">Male</label>
                            <input className="form-check-input ml-2 mr-1" type="radio" onChange={onChange} value="female" id='female' name="gender" />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <label className='mt-3 ml-2'>Are you 18 or older or legally emancipated?</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input ml-2 mr-1" type="radio" onChange={onChange} id='yes' value="Yes" name="older18" />
                            <label className="form-check-label " htmlFor="yes">Yes</label>
                            <input className="form-check-input ml-2 mr-1" type="radio" onChange={onChange} value="No" name="older18" id='no' />
                            <label className="form-check-label" htmlFor="no">No</label>
                        </div>
                        <div className="px-3">
                            <Dob onChange={onChange} dob={user.dob} day={day} month={month} year={year} />
                        </div>
                        <CSC city={city} country={country} region={region} user={user.csc} />
                        <div className="ml-1 mt-2 custom-control custom-switch">
                            <input type="checkbox" onChange={user_public} className="custom-control-input" id="customSwitch1" />
                            <label class="custom-control-label" for="customSwitch1">User Public</label>
                        </div>
                        <div className='p-1'>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" onChange={()=>setLegalCheckbox(!legal_checkbox)} class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">I Agree to <Link to='/cookies'>Cookies, </Link><Link to='communityguidelines'>Community Guidelines, </Link> <Link to='privicypolicy'>Privacy Policy, </Link> & <Link to='/termofuse'>Terms of Use</Link></label>
                            </div>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        disabled={user.username === '' || user.email === '' || user.gender === '' || authContext.email === '' || legal_checkbox===false ? true : false}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                        </Button>
                </div>

            </Container>
        </form>
    )
}

export default FinalStep
