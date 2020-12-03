const express = require('express')
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport')

const JWT = require('jsonwebtoken')
const User = require('../models/User')


const signToken = userID => {
    return JWT.sign({
        iss: "afnan",
        sub: userID
    }, "afnan", { expiresIn: "1h" });
}
userRouter.post('/register', (req, res) => {
    const { firstname, email, gender, middlename, lastname, username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError: true } })
        if (user)
            res.status(400).json({ 'message': { msgbody: 'username is already taken', msgError: true } })
        else {
            const newUser = new User({ firstname, email, gender, middlename, lastname, email, gender, username, password })
            newUser.save(err => {
                if (err)
                    res.status(500).json({ 'message': { msgbody: 'error has occured', msgError: true } })
                else
                    res.status(201).json({ 'message': { msgbody: 'Account has succesfully created', msgError: false } })
            })
        }
    })
})
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, role, email } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username, role,email }, token: token });
    }
});
userRouter.post('/logingoogle',(req,res)=>{
    const {username,email} = req.body
    res.status(200).json({ isAuthenticated: true, user: { username,email }});
});
userRouter.post('/loginfacebook',(req,res)=>{
    const {username, email} = req.body
    res.status(200).json({ isAuthenticated: true, user: { username,email }});
});
userRouter.get('/logout', (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { username: "", role: "",email:"" }, success: true });
});
userRouter.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user.role === 'admin') {
        res.status(200).json({ message: { msgBody: 'You are an admin', msgError: false } });
    }
    else
        res.status(403).json({ message: { msgBody: "You're not an admin,go away", msgError: true } });
});
userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, role,email } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role,email } });
});

module.exports = userRouter;