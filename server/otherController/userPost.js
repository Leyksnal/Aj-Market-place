const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const { userImage } = require('../utils/multer')
const bcrypt = require('bcrypt')
const userModel = require('../model/userModel')


router.post("/register", userImage, async(req, res) =>{
    try {
        const {email, password, username} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const cloud = await cloudinary.uploader.upload(req.file.path)
        const createUser = await userModel.create({
            email,
            password: hashed,
            username,
            avatar: cloud.secure_url,
            avatatID: cloud.public_id,
            seller: false
        })

        res.status(201).json({
            status: `memeber created`,
            data: createUser
        })
        
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})


router.post("/register_join", userImage, async(req, res) =>{
    try {

        const {email, password, username} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const image = await cloudinary.uploader.upload(req.file.path)
        const createUser = await userModel.create({
            email,
            password: hashed,
            username,
            avatar: image.secure_url,
            avatatID: image.public_id,
            seller: true
        })

        res.status(201).json({
            message: `memeber created`,
            data: createUser
        })
        
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})


router.patch("/:id/update", userImage, async(req, res) =>{
    try {

        const {username} = req.body

        const image = await cloudinary.uploader.upload(req.file.path)
        const createUser = await userModel.findByIdAndUpdate(req.params.id, {
            username,
            avatar: image.secure_url,
            avatatID: image.public_id
        }, {new: true})

        res.status(201).json({
            message: `updated`,
            data: createUser
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router