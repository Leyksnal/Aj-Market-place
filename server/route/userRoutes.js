const express = require('express')
const router = express.Router()
const { getUsers, signInUser, getUser, deleteUser } = require('../controller/userController')


router.route('/')
        .get(getUsers)

router.route('/signin')
        .post(signInUser)

router.route('/:id')
        .get(getUser)
        .delete(deleteUser)

module.exports = router