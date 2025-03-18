var t={
    "name":"test",
    "age": 21,
    "subject": ["FSD-2","FCSP-2"]
}
var jString=JSON.stringify(t);
console.log(jString);
console.log(jString.subject);
var jObj=JSON.parse(jString);
console.log(jObj);
console.log(jObj.name);

// alternate option for parsing: XML -> JSON