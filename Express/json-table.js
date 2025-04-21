var s={d:[{"name":"A","age":20},{"name":"C","age":18},{"name":"Z","age":30}]}
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<table border='1px solid'><tr><th>Name</th><th>Age</th></tr>")
    for(i of s.d){
        res.write(`<tr><td> ${i.name}</td><td> ${i.age}</td></tr>`)
    }
    res.write("</table>")
    res.send()
})
app.get("/test",(req,res)=>{
    res.send("<h2> Hello </h2>")
})
app.listen(5001)