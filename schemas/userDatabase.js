const { Int32 } = require('bson')
const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name:{
        type : String
    },
    age:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    }

})

module.exports = mongoose.model('routes', userData)