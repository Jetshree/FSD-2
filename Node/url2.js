var fs=require("fs")
var url=require("url")
var addr="http://localhost:8080/test/about.html?year=2025&month=march#staff"
// var parsed=url.parse(addr)
var p=url.parse(addr,true)
var data=JSON.stringify(p.query)
fs.writeFile("a.txt",data,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("written")
    }
})
console.log("done")
fs.readFile("a.txt","utf-8",(e,d)=>{
    if(e){
        console.log(e)
    }else{
        console.log(d)
        var p=JSON.parse(d)
        console.log(p.year)
    }
})
