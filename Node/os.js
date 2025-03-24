var os=require("os")
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.arch())
var fm=os.freemem()
console.log(fm)
var d= fm/1024/1024/1024
console.log(d+" GB")