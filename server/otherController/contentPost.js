const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const multer = require('../utils/multer')
const contentModel = require('../model/contentModel')
const verification = require('../utils/authorize')

router.get("/", async (req, res) =>{
    try {

        const getContent = await contentModel.find()
        res.status(200).json({
            message: `success`,
            data: getContent
        })
        
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})


router.get("/:id", async (req, res) =>{
    try {
        const getContent = await contentModel.findById(req.params.id)
        res.status(200).json({
            message: `success`,
            data: getContent
        })
        
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})


router.delete("/:id", verification, async (req, res) =>{
    if(req.user.seller === true){
        try {
            await contentModel.findByIdAndDelete(req.params.id)
            res.status(201).json({
                messae: `Deleted`
            })
        
        } catch (error) {
            res.status(500).json({
                message: err.message
            })
        }
    }  else{
        res.status(500).json({
            message: `You cannot carry out this operation`
        })
    }
})


router.patch("/:id", image, async (req, res) =>{
    if(req.user.seller === true){
        try {
            const newContent = await contentModel.findByIdAndUpdate(req.params.id)

            if(newContent){
                const {des, title, price, category} = req.body
                await cloudinary.uploader.upload(req.file.path)

                const getContent = await contentModel.findByIdAndUpdate(req.params.id, {
                    des, title, price, category
                }, {new: true})
            }
            res.status(201).json({
                messae: `Deleted`
            })
        
        } catch (error) {
            res.status(500).json({
                message: err.message
            })
        }
    }  else{
        res.status(500).json({
            message: `You cannot carry out this operation`
        })
    }
})