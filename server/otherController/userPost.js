const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const bcrypt = require('bcrypt')


router.post("/register", upload, async(req, res) =>{
    try {

        const {email, password, username} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const image = await cloudinary.uploader.upload(req.file.path)
        const createUser = await userModel.create({
            email,
            password,
            username
        })
        
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})
