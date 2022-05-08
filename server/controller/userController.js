const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signInUser = async (req, res) =>{
    try {
        const {email, password} = req.body
        const findUser = await userModel.findOne({email})
        if(findUser){
            const passCheck = await bcrypt.compare(password, findUser.password)
            if(passCheck){
                const token = jwt.sign({
                    _id:find._id,
                    email: findUser.email,
                    username: find.username,
                    seller: findUser.seller,
                    avatar: find.avatar
                }, "AjeGUNleseLLerMarketPLaCE", {expiresIn: "1d"})

                const {password, ...info} = findUser._doc
                res.status(201).json({
                    status: `Welcome back ${findUser.username}`,
                    data: {token, ...info}
                })
            } else {
                res.status(500).json({
                    status: `Incorrect password`
                })
            }
            
        }  else {
            res.status(500).json({
                status: `User not found`
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status: `Failed to get User`,
            message: error.message
        })
    }
}


const getUsers = async (req, res) =>{
    try {

        const user = await userModel.find()
        res.status(200).json({
            status: `success`,
            data: user
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getUser = async (req, res) =>{
    try {

        const user = await userModel.findById(req.params.id)
        res.status(200).json({
            status: `one user`,
            data: user
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteUser = async (req, res) =>{
    try {

        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: `Deleted`
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    signInUser,
    getUser,
    getUsers,
    deleteUser
}