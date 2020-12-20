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
    const { username } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError: true } })
        }
        if (user) {
            res.status(400).json({ 'message': { msgbody: 'username is already taken', msgError: true } })
        }
        else {
            const { firstname, email, gender, middlename, lastname, username, password, age, csc, dob, older18, reelsAndDemos } = req.body;
            User.findOne({ email }, (err, user) => {
                if (err) {
                    res.status(500).json({ 'message': { msgbody: 'error has occured', emailError: true, msgError: false } })
                }
                if (user) {
                    res.status(400).json({ 'message': { msgbody: 'email is already taken', emailError: true, msgError: false } })
                }
                else {
                    const csc_country = csc.country
                    const csc_city = csc.city
                    const csc_state = csc.state
                    const dob_day = dob.day
                    const dob_year = dob.year
                    const dob_month = dob.month

                    if (password !== "") {
                        const newUser = new User({
                            firstname, email, gender, middlename, lastname, email, gender,
                            username, password, age, csc_country, csc_city,
                            csc_state, dob_day, dob_year, dob_month, older18, reelsAndDemos
                        })
                        newUser.save(err => {
                            if (err)
                                res.status(500).json({ message: { msgbody: 'error has occured', msgError: true } })
                            else
                                res.status(201).json({ message: { msgbody: 'Account has succesfully created', msgError: false, emailError: false } })
                        })
                    }
                    else {
                        const newUser = new User({
                            firstname, email, gender, middlename, lastname, email, gender,
                            username, age, csc_country, csc_city,
                            csc_state, dob_day, dob_year, dob_month, older18, reelsAndDemos
                        })
                        newUser.save(err => {
                            if (err)
                                res.status(500).json({ message: { msgbody: 'error has occured', msgError: true } })
                            else
                                res.status(201).json({ message: { msgbody: 'Account has succesfully created', msgError: false, emailError: false } })
                        })
                    }

                }
            })

        }
    })
})
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    console.log('helo');
    if (req.isAuthenticated()) {
        console.log('login');
        const { _id, username, role, email } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: req.user, token: token });
    }
});
userRouter.post('/logingoogle', (req, res) => {
    const { username, email } = req.body
    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError: false } })
        }
        if (user) {
            res.status(200).json({ isAuthenticated: true, user: user, 'message': { msgError: false } });
        }
        else {
            res.status(500).json({ 'message': { msgbody: 'successfull', msgError: true } })
        }
    })
});
userRouter.get('/profile', (req, res) => {
    User.find({}, function (err, users) {
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });
        console.log(userMap);
        res.send(userMap);
    });
});
userRouter.post('/loginfacebook', (req, res) => {
    const { username, email } = req.body
    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).json({ 'message': { msgbody: 'error has occured', msgError: false } })
        }
        if (user) {
            res.status(200).json({ isAuthenticated: true, user: user, 'message': { msgError: false } });
        }
        else {
            res.status(500).json({ 'message': { msgbody: 'successfull', msgError: true } })
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
    res.status(200).json({ isAuthenticated: true, user: req.user });
});


userRouter.put('/updatetitle', (req, res) => {
    const { id, actor } = req.body
    User.findOne({ _id: id }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!user) {
                res.status(404).send()
            }
            else {
                user.actor = actor
                user.save((err, updatedtitle) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send()
                    }
                    else {
                        res.status(200).json({ update: updatedtitle })
                    }
                })

            }

        }
    })
})
userRouter.put('/updatereelsanddemos', (req, res) => {
    const { email } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!user) {
                console.log('not found');
                res.status(404).send()
            }
            else {
                if (req.body.reelsAndDemos) {
                    user.reelsAndDemos = [...user.reelsAndDemos, req.body.reelsAndDemos]
                }
                if (req.body.excerpts) {
                    user.excerpts = [...user.excerpts, req.body.excerpts]
                }
                if(req.body.voiceover){
                    user.voiceover = [...user.voiceover, req.body.voiceover]
                }
                user.save((err, updatedUser) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send()
                    }
                    else {
                        res.send(updatedUser)
                    }
                })
            }
        }
    })
})
userRouter.put('/update', (req, res) => {
    // const {id} = req.params
    const { id, firstname, middlename, lastname, dob, csc, password } = req.body
    User.findOne({ _id: id }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!user) {
                console.log('not found');
                res.status(404).send()
            }
            else {
                const csc_country = csc.country
                const csc_city = csc.city
                const csc_state = csc.state
                const dob_day = dob.day
                const dob_year = dob.year
                const dob_month = dob.month
                user.firstname = firstname
                user.middlename = middlename
                user.lastname = lastname
                user.csc_country = csc_country
                user.csc_city = csc_city
                user.csc_state = csc_state
                user.dob_day = dob_day
                user.dob_month = dob_month
                user.dob_year = dob_year
                if (password !== "") {
                    user.password = password
                }
                user.save((err, updatedUser) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send()
                    }
                    else {
                        res.send(updatedUser)
                    }
                })
            }
        }
    })
})
userRouter.put('/delete', (req, res) => {
    const { email, key,reels, excerpts, voiceover } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!user) {
                res.status(404).send()
            }
            else {
                if(reels){
                user.reelsAndDemos.splice(key, 1)
                }
                if(excerpts){
                    user.excerpts.splice(key,1)
                }
                if(voiceover){
                    user.voiceover.splice(key,1)
                }
                user.save((err, updatedtitle) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send()
                    }
                    else {
                        res.send(updatedtitle)
                    }
                })

            }
        }
    })
})
module.exports = userRouter;