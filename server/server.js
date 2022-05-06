require('./config/config')
const express = require('express')
port = 9000
const app = express()
app.listen(port, () =>{
    console.log(`connected to port: ${port}`)
})