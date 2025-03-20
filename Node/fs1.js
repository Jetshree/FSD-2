const fs=require("fs")
// fs.mkdirSync("node"); 
fs.writeFileSync("node/rw.txt","Hello");
fs.appendFileSync("node/rw.txt","\n Welcome")
// data=fs.readFileSync("node/rw.txt","utf-8") // gives actual data
data=fs.readFileSync("node/rw.txt") // gives buffer data
console.log(data.toString()) // gives actual data
console.log(data);

fs.renameSync("node/rw.txt","node/test.txt")
// fs.unlinkSync("node/rw.txt")
fs.appendFileSync("node/rw.txt","Test")
