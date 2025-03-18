// Consider below JSON object and fetch values using for loop.(for…in/for…of).
  sub={
    "FSD": [
      {
        "Topic": "HTML",
        "course": "Beginer",
        "content": ["tags", "table", "form"],
      },
      {
        "Topic": "CSS",
        "course": "Beginer",
        "content": ["tags", "table", "form"]
      }
    ]
  }

for(x in sub.FSD){
    for(y in sub.FSD[x]){
        console.log(sub.FSD[x][y]+"   ")
    }
}
console.log("------------")
for(x1 of sub.FSD){
   console.log(x1.Topic,x1.content,x1.course)
}
// in-index
// of-key


// HTML   
// Beginer           
// tags,table,form   
// CSS   
// Beginer           
// tags,table,form
// ------------
// HTML [ 'tags', 'table', 'form' ] Beginer
// CSS [ 'tags', 'table', 'form' ] Beginer
