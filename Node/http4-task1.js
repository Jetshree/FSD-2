var http=require("http")
var url=require("url")

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<ul><li><a href='/about'>About</a></li><li><a href='/contact'>Contact</a></li></ul>")
    }
    else if(req.url=='/about'){
        res.end("<h1 style='color:blue; text-align:center;'>About page</h1>")
    }
    else if(req.url=='/contact'){
        var cd={"MN":"9999999999","eid":"lj@gmail.com"};
        res.end("mob no.:"+cd.MN)
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"})
        res.end("page not found")
    }
}).listen(8001);