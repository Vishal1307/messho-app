const mongoose=require('mongoose');
const bcrypt=require("bcrypt")
const signUpSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    mobile:{type:Number, required:true}


})
signUpSchema.pre('save', function(next) {
    console.log(this.isModified('password'));                                                                                                                                        
        if(this.password && this.isModified('password')){                                                                                                                                                                                                                                                                                      
            this.password  = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8),null);                                                                                                             
        }
    
        next()                                                                                                                                                                     
})
signUpSchema.methods.checkPassword=(password)=>{
    return bcrypt.compareSync(password, this.password)
}

module.exports=mongoose.model('signup',signUpSchema)