require('./config/config')
const express = require('express')
port = 9000
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).json({
        message: `We are live now`
    })
})
app.listen(port, () =>{
    console.log(`connected to port: ${port}`)
})