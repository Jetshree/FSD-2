var http=require("http")
var url=require("url")
var server=http.createServer((req,res)=>
{
    res.writeHead(200,{"Content-Type":"text/html"});
    var data=url.parse(req.url,true);
    var mul=data.a*data.b
    
    res.write("<h1 style='color:red'>url path fetched</h1>");
    res.end(JSON.stringify(data)) //{"protocol":null,"slashes":null,"auth":null,"host":null,"port":null,"hostname":null,"hash":null,"search":"?a=2&b=6","query":{"a":"2","b":"6"},"pathname":"/test/about","path":"/test/about?a=2&b=6","href":"/test/about?a=2&b=6"}
    // res.end(data+"") //[object Object]
})
server.listen(5001,()=>console.log('server started'));
// http://localhost:5001/test/about?a=2&b=6