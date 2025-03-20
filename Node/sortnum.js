const fs=require("fs")
// fs.mkdirSync("node"); 
fs.writeFileSync("node/num.txt","100 34 854 -55 -411 8 59 0");

data=fs.readFileSync("node/num.txt","utf-8") // gives actual data

temp=data.split(" ")
temp=temp.sort((a,b)=>a-b)
for(i=0;i<temp.length;i++){ // string to int 
    temp[i]=parseInt(temp[i])
}
console.log(temp)
fs.appendFileSync("node/num.txt","\n"+temp)