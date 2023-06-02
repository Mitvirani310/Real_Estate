const express =require('express')
const Razorpay = require('razorpay'); 
const router = express.Router()
const paymentschema = require('../models/paymentsc')

router.get("/",async(req,res)=>
{
    try{
        const pay_obj = await paymentschema.find()
        res.json(pay_obj)
    }
    catch(e)
    {
        res.send(e);
    }
})

router.post("/",async(req,res)=>
{
    const pay_obj =new paymentschema(
        {
            paymentid : req.body.paymentid,
            propertyid : req.body.propertyid,
            buyer_name : req.body.buyer_name,
            b_mobileno : req.body.b_mobileno,
            seller_name : req.body.seller_name,
            s_mobileno : req.body.s_mobileno,
            price : req.body.price,
        })
    try{
       const a1 =await pay_obj.save()
       res.json(a1)
    }
    catch(e)
    {
        res.send(e);
    }
})


router.put("/:id", (req, res) => {
    paymentschema.findOneAndUpdate( {id: req.params.id},req.body,{useFindAndModify: false},  function(err, result) {
        if (err) 
            return res.status(400).json({ error: err })
        return res.status(200).json( { result } )
    });			
});

router.delete("/:id", (req, res) => {
    paymentschema.deleteOne({ id: req.params.id }, function(err, result) {
        if (err)
            return res.status(400).json({ error: err }) 
        return res.status(200).json({ result });
    });
});

const razorpayInstance = new Razorpay({
    key_id: 'rzp_test_4zj1KjWTY6oX8G'	,
    key_secret: 'N8X8KU6J8G0F9RslLWG11j7K'
});

router.get('/pay',(req,res)=>{
    var options = {
        amount:60000,
        currency:'INR',
    }
    razorpayInstance.orders.create(options,function(err,order){
        if(err){
            console.log(err);
        }
        else{
            console.log(order);
            res.send(order.id);
        }
    });
})

module.exports =router