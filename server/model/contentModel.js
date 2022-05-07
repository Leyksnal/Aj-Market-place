const mongoose = require('mongoose')
const contentModel = mongoose.Schema({
    title:{
        type: String
    },
    des:{
        type: String
    },
    price:{
        type: Number
    },
    image:{
        type: String
    },
    imageID:{
        type: String
    },
    category:{
        type: String
    },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "ratings"}],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments"}],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users"}]
}, {timestamps: true})

module.exports = mongoose.Schema("contents", contentModel)