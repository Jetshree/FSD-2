var http=require("http")
var url=require("url")
var server=http.createServer((req,res)=>
{
    res.writeHead(200,{"Content-Type":"text/html"});
    var data=url.parse(req.url,true).query;
    var mul=data.a*data.b
    
    res.write("<h1 style='color:red'>url path fetched</h1>");
    // res.end("<h2>"+req.url+"</h2>");
    res.end(mul+"")
    // res.write("hii") // gives error
})
server.listen(5001,()=>console.log('server started'));
// http://localhost:5001/test/about?a=2&b=6