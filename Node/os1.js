var os=require("os")
var tmp=os.tmpdir()
var fs=require("fs")
fs.mkdirSync(tmp+"/AA")
if(d>1){
    fs.writeFileSync(tmp+"AA/temp.txt","Sufficient memory");
} else {
    var fm=os.freemem();
    console.log(fm)
    var d=fm/1024/1024/1024
    console.log(d)
}