const express=require("express")
const app=express()
const cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"cookie3.html"}))
app.use(express.urlencoded())
app.post("/submit",(req,res)=>{
    const {un,eid,msg,rating}=req.body
    const feedback={un,eid,msg,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send("<h2> Thank you </h2> <br> <a href='/details'> Show Details </a>")
})
app.get("/details",(req,res)=>{
    var fb=req.cookies.feedback
    if(fb){
        res.send(`<h2> Name: ${fb.un} </br>
            Email: ${fb.eid} </br>
            Message: ${fb.msg}
            Rating: ${fb.rating}</hr>`)
    }
    else{
        res.send("<h2> No feedback available </h2>")
    }
})
app.listen(5003)