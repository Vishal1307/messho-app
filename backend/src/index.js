const express=require('express');
const app= express();
const signup=require("./moduleControl/signUpControl")
const login=require("./moduleControl/loginControl")
app.use(express.json())
app.use("/signup",signup)
app.use("/login",login)

module.exports=app