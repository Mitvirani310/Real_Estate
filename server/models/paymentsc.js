const mongodb = require('mongodb')
const mongoose = require('mongoose')

const paymentsc =new mongoose.Schema(
    {
        paymentid:
        {
            type: Number,
            required:true
        },
        propertyid:
        {
            type: String,
            required:true
        },
        buyer_name:
        {
            type: String,
            required:true,
        },
        b_mobileno:
        {
            type: String,
            required:true,
            max:10
        },
        seller_name:
        {
            type: String,
            required:true,
        },
        s_mobileno:
        {
            type: String,
            required:true,
            max:10
        },
        price:
        {
            type: String,
            required:true,
        }
    }
)

module.exports = mongoose.model('paymentschema',paymentsc)