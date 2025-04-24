// 2.	Write express js script to print message in next line splitting by “.” And use get method to submit the data. HTML file contains form of text area for the message and submit button.
const express=require("express")
const app=express()
app.use(express.static(__dirname,{index:"get2.html"}))
app.get("/process",(req,res)=>{
    res.set("content-type","text/plain")
    console.log(req.query)
    x=req.query.t1.split(".")
    y=""
    for(i of x){
        y=y+i+"\n"
    }
    res.send(y)
})
app.listen(5001)
