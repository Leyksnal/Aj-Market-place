const mongoose = require('mongoose')
const ratingModel = mongoose.Schema({
    count:{
        type: Number
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users"}]
}, {timestamps: true})

module.exports = mongoose.Schema("contents", ratingModel)