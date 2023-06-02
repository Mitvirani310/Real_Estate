const express = require('express')
const router = express.Router()
const customerschema = require('../models/customersc')

router.get("/",async(req,res)=>
{
    try{
        const cust_obj = await customerschema.find()
        res.json(cust_obj)
    }
    catch(e){
        res.send(e);
    }
})

router.post("/",async(req,res)=>
{
    const cust_obj = new customerschema(
        {
            id : req.body.id,
            name : req.body.name,
            mobileno : req.body.mobileno,
            email : req.body.email,
            password : req.body.password,
            recovery : req.body.recovery
        })
        try{
            const a1 = await cust_obj.save()
            res.json(a1) 
        }catch(err)
        {
            res.send(err)
        }
})

router.put("/:id", (req, res) => 
{
    customerschema.findOneAndUpdate( {id: req.params.id}, req.body,{useFindAndModify: false}, function(err, result) 
    {
        if (err) 
        {
            return res.status(400).json({ error: err })
        }
        return res.status(200).json( { result } )          
    });			
});

router.delete("/:id", (req, res) => {
    customerschema.deleteOne({ id: req.params.id }, function(err, result) {
        if (err)
        {
            return res.status(400).json({ error: err }) 
        }
        return res.status(200).json({ result });
    });
});

router.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    customerschema.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login success",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send({message:"not register"})
        }
    });
});

router.post("/changepassword",(req,res)=>{
    const {recovery} =req.body;
    customerschema.findOne({recovery:recovery},(err,user)=>{
        if(user){
           if(recovery === user.recovery){
               res.send({message:"View Your Password And User Name",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    });
});

router.post("/Email",(req,res)=>{
    const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vatsalvasani22882@gmail.com',
        pass: 'cotkijgcycppmhth'
    }
});
 
let mailDetails = {
    from: 'vatsalvasani22882@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    html:`
    <div style="padding:10px;border-style:ridge">
        <p>You Have New Requset For Your Property.</p>
        <h1>Contact Details</h1>
        <ul>
            <li>Email : ${req.body.from}</li>
            <li>Subject : ${req.body.subject}</li>
            <li>Message : ${req.body.description}</li>
        </ul>
        `
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        res.send(err);
    } else {
        res.send('Email sent successfully');
    }
});
});


module.exports=router
