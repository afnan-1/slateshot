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

function Step2(props) {
    const { onChange, user } = props
    const classes = useStyles();
    const [errors, setErr] = useState({
        firstnameErr: false,
        lastnameErr: false
    })

    return (
        <Container component="main" maxWidth="xs" className='bg-white py-2 my-2'>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
        </Typography>
                <form className={classes.form} onSubmit={props.next}>
                    <TextField
                        value={user.firstname}
                        variant="outlined"
                        margin="normal"
                        required
                        error={errors.firstnameErr}
                        helperText={errors.firstnameErr && 'First Name is required'}
                        onChange={onChange}
                        fullWidth
                        id="firstname"
                        label="First Name"
                        name="firstname"
                        autoComplete="firstname"
                        autoFocus
                    />
                    <TextField
                        value={user.middlename}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onChange={onChange}
                        name="middlename"
                        label="Middle Name"
                        id="middlename"
                        autoComplete="middlename"
                    />
                    <TextField
                        value={user.lastname}
                        variant="outlined"
                        margin="normal"
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
                    <Button
                        type="submit"
                        fullWidth
                        disabled={user.firstname === '' || user.lastname === '' ? true : false}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Next
          </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default Step2
