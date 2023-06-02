const mongodb = require('mongodb')
const mongoose = require('mongoose')

const soldpropertysc = new mongoose.Schema(
    {
        id:
        {
            type : Number,
            required : true
        },
        customername:
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
            required : true,
        },
        address:
        {
            type : String,
            required : true
        },
        image1:
        {
            type : String,
            required : true
        },
        image2:
        {
            type : String,
            required : true
        },
        image3:
        {
            type : String,
            required : true
        },
    }
)

module.exports = mongoose.model('soldpropertyschema',soldpropertysc)