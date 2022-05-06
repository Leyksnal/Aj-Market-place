const mongoose = require('mongoose')
const ratingModel = mongoose.Schema({
    count:{
        type: Number
    },
    seller:{
        type: String
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users"}],
    contents: [{ type: mongoose.Schema.Types.ObjectId, ref: "contents"}],
}, {timestamps: true})

module.exports = mongoose.Schema("contents", ratingModel)