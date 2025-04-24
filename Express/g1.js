const express=require("express")
const app=express()
app.use(express.static(__dirname,{index:"g1.html"}))
app.get("/process",(req,res)=>{
    console.log(req.query)
    res.send(`<h1>welcome ${req.query.fn} ${req.query.ln}</h1>`)
})
app.listen(5001)
