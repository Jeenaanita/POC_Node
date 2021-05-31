const mongoose= require('mongoose')
//default it will put is Employees table
var Customer = mongoose.model('Employee', {
    uname: {type : String},   //these are assigned as coulummns in table
    pwd: {type : String},
    date: {type : String},
    description: {type : String},
    amount: {type : Number}
})
module.exports= { Customer }