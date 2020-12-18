import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
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

function Editform(props) {
    const { onChange, user, pass } = props
    const classes = useStyles();
    const [errors, setErr] = useState({
        firstnameErr: false,
        lastnameErr: false
    })
    return (
        <>
            {/* // <Container component="main" maxWidth="lg" className='bg-white py-2 my-2 overflow-auto px-1'> */}
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Edit Details
        </Typography>
                <div className='row w-100 px-3 pt-1'>
                    <div className='col-6 p-0'>
                        <TextField
                            value={user.firstname}
                            variant="outlined"
                            margin="dense"
                            required
                            error={errors.firstnameErr}
                            helperText={errors.firstnameErr && 'First Name is required'}
                            onChange={onChange}
                            id="firstname"
                            label="First Name"
                            name="firstname"
                            autoComplete="firstname"
                            autoFocus
                            fullWidth
                        />
                    </div>
                    <div className='col-6 pl-1 pr-0 '>
                        <TextField
                            value={user.middlename}
                            variant="outlined"
                            margin="dense"
                            onChange={onChange}
                            name="middlename"
                            label="Middle Name"
                            id="middlename"
                            autoComplete="middlename"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row w-100 pr-2 pl-1 pt-1">
                    <div className='col-12 pr-2'>
                        <TextField
                            value={user.lastname}
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            error={errors.lasttnameErr}
                            helperText={errors.lastnameErr && 'Username is required'}
                            onChange={onChange}
                            name="lastname"
                            label="Last Name"
                            id="lastname"
                            autoComplete="lastname"
                        />
                    </div>
                </div>
                <div className="row w-100 px-3 pt-1 pb-2">
                    <div className="col-6 p-0 ">
                        <TextField
                            value={user.email}
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            disabled
                            error={errors.lasttnameErr}
                            helperText={errors.lastnameErr && 'Username is required'}
                            onChange={onChange}
                            name="email"
                            label="Email"
                            id="email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="col-6 pl-1 pr-0 ">
                        <TextField
                            value={pass}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            type='password'
                            disabled={localStorage.getItem("facebookusername") || localStorage.getItem("googleusername")?true:false}
                            error={errors.lasttnameErr}
                            helperText={errors.lastnameErr && 'Username is required'}
                            onChange={onChange}
                            name="password"
                            label={(localStorage.getItem("facebookusername") || localStorage.getItem("googleusername"))?"No Password - Social login":"New-Password"}
                            id="password"
                            autoComplete="password"
                        />
                    </div>
                </div>
            </div>
        </>
        // {/* </Container> */ }
    )
}
export default Editform
