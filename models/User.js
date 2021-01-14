const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 6,
        max: 20
    },
    firstname: {
        type: String,
    },
    middlename: {
        type: String,
    },
    lastname: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        min: 3,
        max: 30
    },
    actor:{type:String},
    gender: {
        type: String,
    },
    transgender:{
        type:String,
    },
    twins:{
        type:String,
    },
    older18:{
        type:String,
    },
    dob_day:{
        type:String,
    },
    dob_year:{
        type:String,
    },
    dob_month:{
        type:String
    },
    csc_country:{
        type:String,
    },
    csc_city:{
        type:String,
    },
    csc_state:{
        type:String,
    },
    reelsAndDemos:{
        type:Array
    },
    excerpts:{
        type:Array
    },
    voiceover:{
        type:Array
    },
    user_public:{
        type:Boolean
    },
    pic:{
        type:String
    },
    video:{
        type:String
    }
});
UserSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err);
        this.password = passwordHash
        next();
    })
})

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err);
        else {
            if (!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    })
}
module.exports = mongoose.model('User', UserSchema);