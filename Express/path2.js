const express=require("express")
const app=express()
app.use(express.static("Frontend",{index:"index2.html"}))
app.listen(5001)