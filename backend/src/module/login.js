const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const loginSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:Number,required:true}
})

module.exports=mongoose.model("login", loginSchema)