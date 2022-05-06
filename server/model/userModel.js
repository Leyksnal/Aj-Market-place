const mongoose = require('mongoose')
const userModel = mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String
    },
    avatar:{
        type: String
    },
    avatarID:{
        type: String
    },
    seller:{
        type: Boolean
    },
    contents: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'contents'
    }]
}, {timestamps: true})


module.exports = mongoose.Schema("users", userModel)