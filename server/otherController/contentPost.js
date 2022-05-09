const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const {image} = require('../utils/multer')
const contentModel = require('../model/contentModel')
const userModel = require('../model/userModel')
const verify = require('../utils/authorize')

router.post('/', verify, multer, async (req, res) =>{
    try {

        const {des, title, price, category} = req.body
        
        
    } catch (error) {
        res.status(500).json({
            status: `Failed`,
            messsage: error.message
        })
    }
})

router.get('viewContent/:contentID', async (req, res) =>{
    try {

        const getUser = await contentModel.findById(req.params.contentID)


    } catch (error) {
        res.status(500).json({
            status: `fail to get`,
            message: error.message
        })
    }
})

router.patch('/viewContent/:contentID/updateContent', verify, image, async (req, res) =>{
    try {

        if(req.user.seller === true){
            const check = await contentModel.findById(req.params.contentID)

            if(check){
                const {des, title, price, category} = req.body
                await cloudinary.uploader.destroy(check.imageID)
                const cloudImage = await cloudinary.uploader.upload(req.file.path)
                const getUser = await contentModel.findByIdAndUpdate(req.params.contentID, {
                    des,
                    title,
                    price,
                    category,
                    image: cloudImage.secure_url,
                    imageID: cloudImage.public_id
                }, {new : true})

                res.status(201).json({
                    status: `updated`,
                    data: getUser
                })
            }else{
                res.status(500).json({
                    message: error.message
                })
            }
        }else{
            res.status(500).json({
                status: `You cannot do this`,
                message: error.message
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


router.delete('/viewContent/:contentID', verify, image, async (req, res) =>{
    try {

        if(req.user.seller === true){
            const getUser = await userModel.findById(req.params.id)
            const deleteData = await userModel.findByIdAndDelete(req.params.contentID)

            getUser.content.pull(deleteData)
            getUser.save();

            res.status(201).json({
                status: `Delete`,
                data: getUser
            })

        }else{
            res.status(500).json({
                status: `You cannot do this`,
                message: error.message
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router