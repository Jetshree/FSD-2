const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h3> Demo </h3>")
    res.send()
})
app.get("/test",(req,res)=>{
    res.send("<h2> Hello </h2>")
})
app.listen(5001)
