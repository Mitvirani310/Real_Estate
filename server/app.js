const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())

const url = 'mongodb://localhost/realestate'
mongoose.connect(url);
const con = mongoose.connection;

con.on('open',function(){

console.log("connected");

})
app.use(cors());

const customerrouter = require('./routes/customer')
app.use('/customer',customerrouter)

const soldpropertyrouter = require('./routes/soldproperty')
app.use('/soldproperty',soldpropertyrouter)

const payrouter = require('./routes/payment')
app.use('/payment',payrouter)

const rentrouter = require('./routes/rentproperty')
app.use('/rentproperty',rentrouter)


app.listen(8080,()=>
{
    console.log("Its Connected To The Port")
})