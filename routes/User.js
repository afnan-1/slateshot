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
    const { firstname, email, gender, middlename, lastname, username, password, age, csc, dob, older18, transgender, twins } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err){
            console.log(err,'error has occured');
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError: true } })
        }
            
        if (user)
        {console.log(user,'username taken');
            res.status(400).json({ 'message': { msgbody: 'username is already taken', msgError: true } })}
            
            
        else {
            console.log('hyloooo');
            const { firstname, email, gender, middlename, lastname, username, password, age, csc, dob, older18, transgender, twins,reelsAndDemos } = req.body;
            User.findOne({email},(err,user)=>{
                if (err){
                    console.log(err,'error has occured');
                    res.status(500).json({ 'message': { msgbody: 'error has occured', emailError: true, msgError:false } })
                }
                if (user)
        {console.log(user,'email taken');
            res.status(400).json({ 'message': { msgbody: 'email is already taken', emailError: true,msgError:false } })}
                else{
                    const csc_country = csc.country
                    const csc_city = csc.city
                    const csc_state = csc.state
                    const dob_day = dob.day
                    const dob_year = dob.year
                    const dob_month = dob.month
                    const newUser = new User({
                        firstname, email, gender, middlename, lastname, email, gender,
                        username, password, age, transgender, twins, csc_country, csc_city,
                        csc_state, dob_day, dob_year, dob_month, older18, reelsAndDemos
                    })
                    newUser.save(err => {
                        if (err)
                            res.status(500).json({ message: { msgbody: 'error has occured', msgError: true } })
                        else
                            res.status(201).json({ message: { msgbody: 'Account has succesfully created', msgError: false , emailError:false} })
                    })
                }
            })
          
        }
    })
})
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, role, email } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username, role, email }, token: token });
    }
});
userRouter.post('/logingoogle', (req, res) => {
    const { username, email } = req.body
    
    User.findOne({email},(err,user)=>{
        if(err){
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError:false } })
        }
        if (user){
            res.status(200).json({ isAuthenticated: true, user: { username, email }, 'message':{msgError:false}});
        }
        else{
            res.status(500).json({ 'message': { msgbody: 'successfull', msgError:true } })
        }
    })
});
userRouter.get('/profile', (req, res) => {
    User.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
        console.log(userMap);
        res.send(userMap);  
});
});
userRouter.post('/loginfacebook', (req, res) => {
    const { username, email } = req.body
    console.log(email);
    User.findOne({email},(err,user)=>{
        if(err){
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError:false } })
        }
        if (user){
            res.status(200).json({ isAuthenticated: true, user: { username, email }, 'message':{msgError:false}});
        }
        else{
            console.log('hylo');
            res.status(500).json({ 'message': { msgbody: 'successfull', msgError:true } })
        }
    })
    
});
userRouter.get('/logout', (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { username: "", role: "", email: "" }, success: true });
});
userRouter.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user.role === 'admin') {
        res.status(200).json({ message: { msgBody: 'You are an admin', msgError: false } });
    }
    else
        res.status(403).json({ message: { msgBody: "You're not an admin,go away", msgError: true } });
});
userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, role, email } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role, email } });
});




userRouter.put('/update/:id',(req,res)=>{
    const {id} = req.params
    User.findOne({_id:id},(err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                console.log('not found');
                res.status(404).send()
            }
            else{
                if(req.body.reelsAndDemos){
                    user.reelsAndDemos = [...user.reelsAndDemos, req.body.reelsAndDemos]
                }
                user.save((err,updatedUser)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send()
                    }
                    else{
                        res.send(updatedUser)
                    }
                })
            }
        }
    })
})
module.exports = userRouter;