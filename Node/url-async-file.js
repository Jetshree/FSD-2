var fs=require("fs")
var url=require("url")
var addr="http://localhost:8080/test/about.html?year=2025&month=march#staff"
var parsed=url.parse(addr)
var parsed1=url.parse(addr,true)
console.log(parsed1)
fs.writeFile("a.txt",parsed.query,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("written")
    }
})
console.log("done")