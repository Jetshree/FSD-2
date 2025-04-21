const express=require("express")
const app=express();
var s={"name":"ABC","age":28}
app.get("/",(req,res)=>{
    res.write(s.age+"") //must be string
    // res.write(JSON.stringify(s))
    res.send()
})
app.get("/j",(req,res)=>{
    // res.send(20) //not a status code so gives error
    res.send(200) // meaning of status code
})
app.get("/j1",(req,res)=>{
    res.sendStatus(404)
})
app.listen(5003,()=>{
    console.log("started")
})

