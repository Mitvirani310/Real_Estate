const mongodb = require('mongodb')
const mongoose = require('mongoose')

const customersc = new mongoose.Schema(
    {
        id:
        {
            type : Number,
            required : true
        },
        name:
        {
            type : String,
            required : true
        },
        mobileno:
        {
            type : String,
            required : true,
            max: 10
        },
        email:
        {
            type : String,
            required : true
        },
        password:
        {
            type : String,
            required : true
        },
        recovery:
        {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model('customerschema',customersc)