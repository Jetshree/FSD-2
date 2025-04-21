const express=require("express")
const app=express();
var s={"name":"ABC","age":28}
app.get("/branch/:b/name/:n",(req,res)=>{
    res.send(req.params)
    // res.write(req.params.b) // CSE
    // res.send()
})
app.listen(7001,()=>{
    console.log("started")
})
// input: http://localhost:7001/branch/CSE/name/test
// output: {"b":"CSE","n":"test"}
