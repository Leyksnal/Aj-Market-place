const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/marketplaceAj").then((req, res) =>{
    console.log(`connected to database`)
}).catch((error) =>{
    console.log(`can not connect`)
})