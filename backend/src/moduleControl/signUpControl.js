const express=require('express');
const router=express.Router()
const SignUp=require("..//module/signup")
const jwt=require("jsonwebtoken")
const privateKey="asdfghjklmnopqrs"
const newToken=(user)=>{
    return jwt.sign({user:user}, privateKey)

}

router.post("",async (req,res)=>{
    try{
        let signup=await SignUp.findOne({email:req.body.email}).lean().exec()
        if(signup){
            return res.status(400).send("Email is already registered")
        }
        let user=await SignUp.create(req.body)
        const token=newToken(user)
       
        return res.status(200).send({user,token})

    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
})
router.get("",async (req,res)=>{
    try{
        let signup=await SignUp.find().lean().exec()
        return res.status(200).send({signup: signup});

    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
})

module.exports=router