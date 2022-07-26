const app=require("..//index")
const connect=require("..//config/db")


app.listen(3001,async ()=>{
    await connect()
    console.log("port listening on 3001")
})