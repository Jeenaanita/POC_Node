const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Employee',(err)=>{
    if(!err)
    console.log("Mongo Db connection is successful")
    else 
    console.log("Error while connection :"+ JSON.stringify(err,undefined,2))// used to convert the error to json format
})
module.exports = mongoose