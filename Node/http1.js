var http=require("http")
var server=http.createServer((req,res)=>
{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("<h1>Hello World</h1>");
    res.end("the end");
    // res.write("hii") // gives error
})
server.listen(5001,()=>console.log('server started'));