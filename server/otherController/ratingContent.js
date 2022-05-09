const express = require('express')
const router = express.Router()
const {image} = require('../utils/multer')
const userModel = require('../model/userModel')
const ratingModel = require('../model/ratingModel')
const verify = require('../utils/authorize')

router.post('/:contentID/rating', verify, async (req, res) =>{
    try {

        const contentData = await userModel.findById(req.params.contentID)
        const ratingData = new ratingModel({count})

        ratingData.content = contentData
        ratingData.save()

        contentData.rating.push(ratingData)
        contentData.save()

        res.status(201).json({
            status: `rated`,
            data: ratingData
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = router