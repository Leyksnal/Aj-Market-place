const mongoose = require('mongoose')
const commentModel = mongoose.Schema({
    message:{
        type: String
    },
    seller:{
        type: String
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users"}],
    contents: [{ type: mongoose.Schema.Types.ObjectId, ref: "contents"}],
}, {timestamps: true})

module.exports = mongoose.Schema("contents", commentModel)