const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy
const InstagramStrategy = require("passport-instagram").Strategy;

const INSTAGRAM_CLIENT_ID = "234089404726480"
const INSTAGRAM_CLIENT_SECRET = "4adba27b8a1697b52525557fc803e6f0";
const User = require('./models/User')
const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

//  authorization
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "afnan"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false)
        if (user)
            return done(null, user);
        else
            return done(null, false)
    })
}))


// authenticared local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        // something went wrong with database
        if (err)
            return done(err)
        // if no user exist
        if (!user)
            return done(null, false)
        // check if password is correct
        user.comparePassword(password, done);
    })
}))
let user={}
passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "/auth/instagram/callback"
},
(accessToken, refreshToken, profile, cb) => {
    user = { ...profile };
    return cb(null, profile);
}));