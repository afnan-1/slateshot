import React, { useState, useContext, useEffect } from 'react';
import AuthService from '../../AuthServices/AuthServices';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLogin'
import FacebookLogin from './FacebookLogin';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthServices from '../../AuthServices/AuthServices';
import InstaButton from './InstaButton';
import InstagramLogin from './InstagramLogin'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
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
const Login = props => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: "", password: "" });
  const authContext = useContext(AuthContext);
  let history = useHistory()

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (authContext.isAuthenticated) {
      const user = { username: authContext.user.username, email: authContext.user.email }
      AuthServices.login(user).then(data => {
        authContext.setUser(user)
      })
    }
    if(localStorage.getItem("googleusername") || localStorage.getItem("facebookusername"))
    {
      history.push("/edit")
    }
  }, [])
  const onSubmit = e => {
    e.preventDefault();
    console.log('helo');
    AuthService.login(user).then(data => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        history.push('/edit');
      }
    });
  }



  return (
    <div className='container mx-auto'>
      <Container component="main" maxWidth="xs" className={'bg-white'}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              onChange={onChange}
              label='Username'
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={onChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link to='/register' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <div className="col btn btn-lg my-2">
              <GoogleLoginComponent />
              <FacebookLogin />
              <InstagramLogin />
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Login;