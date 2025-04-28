const express=require("express")
const app=express()
const cp=require("cookie-parser")
app.use(cp())
const sess=require("express-session")
app.use(sess({resave: false, saveUninitialized: false, secret: 'LJU123'}))
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color: blue"> you have visited ${req.session.page_view} time </h1>`)
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style="color: green"> Thank you </h1>`)
    }
})
app.listen(5004)