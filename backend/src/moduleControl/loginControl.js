const express=require('express');
// const Login=require("..//module/login")
const SignUp=require("..//module/signup")
const router=express.Router()
const jwt=require("jsonwebtoken")
const privateKey="asdfghjklmnopqrs"

const newToken=(user)=>{
    return jwt.sign({user:user},privateKey)
}

router.post("",async (req,res)=>{
    try{
        
        
        let user=await SignUp.findOne({email:req.body.email}).lean().exec()
        if(!user){
            return res.status(404).send("Email is not register")
        }
        
        let match=user.checkPassword(req.body.password)
        if(!match){
            return res.status(404).send("Password is incorrect")
        }
        const token=newToken(user)
        console.log(token,user)
        return res.status(200).send({token,user})


    }
    catch(err){
        return res.status(400).send({message: err.message});
    }
})
router.get("",async (req,res)=>{
    try{
        const login=await SignUp.findOne({email:"a@a"}).lean().exec()
        console.log(login)
        console.log(login.password)
        return res.status(200).send(login)

    }
    catch(err){
        return res.status(400).send({message: err.message});
        
    }
})
module.exports=router